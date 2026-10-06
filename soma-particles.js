// <soma-particles> — particle curtain background (three.js, no spin, no controls)
(function(){
  if(customElements.get('soma-particles'))return;
  const THREE_URL='https://unpkg.com/three@0.160.0/build/three.module.js';
  let threeP=null;const loadThree=()=>threeP||(threeP=import(THREE_URL));
  class SomaParticles extends HTMLElement{
    connectedCallback(){
      this.style.cssText+=';display:block;position:absolute;inset:0;pointer-events:none;overflow:hidden';
      this._io=new IntersectionObserver(([e])=>e.isIntersecting?this._start():this._stop(),{rootMargin:'200px'});
      this._io.observe(this);
    }
    disconnectedCallback(){this._io&&this._io.disconnect();this._stop();}
    _start(){
      if(this._alive)return;this._alive=true;
      loadThree().then(THREE=>{if(this._alive&&!this._renderer)this._init(THREE);}).catch(e=>console.warn('soma-particles',e));
    }
    _stop(){
      this._alive=false;cancelAnimationFrame(this._raf);this._ro&&this._ro.disconnect();
      if(this._renderer){this._renderer.dispose();this._renderer.forceContextLoss();this._renderer.domElement.remove();this._renderer=null;}
    }
    _init(THREE){
      const COUNT=Number(this.getAttribute('count')||9000);
      const dense=this.getAttribute('density')||'1';
      const scene=new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(55,1,0.1,2000);camera.position.set(0,0,110);
      const renderer=new THREE.WebGLRenderer({antialias:false,alpha:true,powerPreference:'high-performance'});
      renderer.setClearColor(0x000000,0);renderer.setPixelRatio(Math.min(devicePixelRatio,matchMedia('(pointer:coarse)').matches?1:1.5));
      this.appendChild(renderer.domElement);renderer.domElement.style.cssText='position:absolute;inset:0;width:100%;height:100%';
      this._renderer=renderer;
      const pos=new Float32Array(COUNT*3),col=new Float32Array(COUNT*3);
      const geo=new THREE.BufferGeometry();
      geo.setAttribute('position',new THREE.BufferAttribute(pos,3));geo.setAttribute('color',new THREE.BufferAttribute(col,3));
      const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d');const rg=g.createRadialGradient(32,32,0,32,32,32);rg.addColorStop(0,'rgba(255,255,255,1)');rg.addColorStop(.35,'rgba(255,255,255,.6)');rg.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=rg;g.fillRect(0,0,64,64);
      const tex=new THREE.CanvasTexture(c);
      const mat=new THREE.PointsMaterial({size:2.6*Number(dense),map:tex,vertexColors:true,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,sizeAttenuation:true});
      scene.add(new THREE.Points(geo,mat));
      const color=new THREE.Color();
      const hues=(this.getAttribute('hues')||'0.52,0.56,0.78').split(',').map(Number);
      const light=Number(this.getAttribute('lightness')||0.5);
      const fit=()=>{const w=this.clientWidth||1,h=this.clientHeight||1;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};
      fit();this._ro=new ResizeObserver(fit);this._ro.observe(this);
      const t0=performance.now();
      const tick=()=>{if(!this._alive)return;this._raf=requestAnimationFrame(tick);
        const time=(performance.now()-t0)/1000*0.8;
        for(let i=0;i<COUNT;i++){
          const u=i/COUNT,band=i%3,seed=i*2.399963229728653,spread=Math.sin(seed*1.7)*0.5+0.5;
          const x=(u-0.5)*240;
          const phase=x*0.032+time*0.35+band*1.3;
          const pulse=0.5+0.5*Math.sin(time*0.7);
          const curtain=Math.sin(phase)*(13+pulse*6);
          const folds=Math.sin(x*0.085+time*0.23+band)*7;
          const height=16+spread*44;
          const y=curtain+folds+height*(spread-0.5);
          const z=(band-1)*17+Math.sin(phase*0.7)*8;
          pos[i*3]=x;pos[i*3+1]=y;pos[i*3+2]=z;
          color.setHSL(hues[band]??0.5,0.75+pulse*0.15,light*(0.5+spread*0.5)+pulse*0.08);
          col[i*3]=color.r;col[i*3+1]=color.g;col[i*3+2]=color.b;
        }
        geo.attributes.position.needsUpdate=true;geo.attributes.color.needsUpdate=true;
        renderer.render(scene,camera);
      };
      tick();
    }
  }
  customElements.define('soma-particles',SomaParticles);
})();
