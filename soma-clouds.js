// <soma-clouds> — procedural cloud background (WebGL, no libraries).
// Soft violet/coral cloud banks that undulate and drift, in the spirit of the aurora option.
//
// Attributes
//   palette  "dusk" (dark, default) | "dawn" (light) | "auto" (follows <html data-theme>: "dark" → dusk, else dawn)
//   mirror   "1" mirrors left/right like the original cloud artwork (default "0")
//   speed    animation speed multiplier (default "1")
//   lite     "1" draws a static CSS gradient instead of WebGL (for thumbnails)
//
// Pauses when off-screen or when the tab is hidden; draws a single still frame for prefers-reduced-motion.
(function(){
  if(customElements.get('soma-clouds'))return;

  const PALETTES={
    dusk:{ground:'#5B3A9E',deep:'#2E1A66',glow:'#C2549E',cloud:'#F07C74',hi:'#FFB89E'},
    dawn:{ground:'#E6DCF8',deep:'#C9B6EE',glow:'#EFB0D8',cloud:'#FFC4AE',hi:'#FFF4EE'}
  };
  const hex=h=>{const n=parseInt(h.slice(1),16);return[(n>>16)/255,(n>>8&255)/255,(n&255)/255]};
  const cssFallback=p=>`radial-gradient(60% 45% at 50% 22%,${p.cloud}cc,transparent 70%),radial-gradient(40% 35% at 8% 10%,${p.cloud}aa,transparent 70%),radial-gradient(40% 35% at 92% 10%,${p.cloud}aa,transparent 70%),radial-gradient(70% 40% at 50% 70%,${p.glow}88,transparent 75%),linear-gradient(180deg,${p.ground},${p.deep})`;

  const VERT='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  const FRAG=`precision mediump float;
uniform vec2 uRes;uniform float uTime,uMirror;
uniform vec3 uGround,uDeep,uGlow,uCloud,uHi;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);
  for(int i=0;i<4;i++){v+=a*noise(p);p=m*p;a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes;float aspect=uRes.x/uRes.y;
  vec2 p=vec2((uv.x-.5)*aspect,uv.y-.5);
  if(uMirror>.5)p.x=abs(p.x);
  float t=uTime;
  // aurora-style undulation: slow waves travelling sideways through the cloud banks
  p.y+=.06*sin(p.x*1.9+t*.31)+.03*sin(p.x*3.7-t*.23);
  // stretch horizontally so clouds form soft banks, like the reference artwork
  vec2 q=vec2(p.x*1.25,p.y*2.5);
  vec2 w=vec2(fbm(q+vec2(t*.028,-t*.012)),fbm(q+vec2(5.2,1.3)-t*.020));
  float f=fbm(q*1.1+1.25*w+vec2(-t*.035,t*.010));
  float d=f+.08*sin(p.y*4.6+w.x*2.2)+.16*(w.y-.5)+.02;
  float c=smoothstep(.46,.74,d);
  vec3 col=mix(uDeep,uGround,clamp(.35+.65*uv.y+.4*(f-.5),0.,1.));
  col=mix(col,uGlow,smoothstep(.32,.60,d)*.55);
  col=mix(col,uCloud,c*.92);
  col=mix(col,uHi,smoothstep(.70,.86,d)*.45);
  gl_FragColor=vec4(col,1.);
}`;

  class SomaClouds extends HTMLElement{
    static get observedAttributes(){return['palette','mirror','speed','lite'];}
    connectedCallback(){
      this.style.cssText+=';display:block;position:absolute;inset:0;pointer-events:none;overflow:hidden';
      this._applyFallback();
      if(this._isLite())return;
      this._io=new IntersectionObserver(([e])=>{this._visible=e.isIntersecting;this._visible?this._start():this._pause();},{rootMargin:'200px'});
      this._io.observe(this);
      this._onVis=()=>document.hidden?this._pause():(this._visible&&this._start());
      document.addEventListener('visibilitychange',this._onVis);
      if(this.getAttribute('palette')==='auto'){
        this._mo=new MutationObserver(()=>{this._applyFallback();this._draw();});
        this._mo.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
      }
    }
    disconnectedCallback(){
      this._io&&this._io.disconnect();this._mo&&this._mo.disconnect();
      document.removeEventListener('visibilitychange',this._onVis);
      this._pause();this._ro&&this._ro.disconnect();
      if(this._gl){const ext=this._gl.getExtension('WEBGL_lose_context');ext&&ext.loseContext();this._canvas.remove();this._gl=null;}
    }
    attributeChangedCallback(){if(this.isConnected){this._applyFallback();this._draw();}}
    _isLite(){return this.getAttribute('lite')==='1';}
    _palette(){
      let name=this.getAttribute('palette')||'dusk';
      if(name==='auto')name=document.documentElement.getAttribute('data-theme')==='dark'?'dusk':'dawn';
      return PALETTES[name]||PALETTES.dusk;
    }
    _applyFallback(){this.style.background=cssFallback(this._palette());}
    _setup(){
      const canvas=document.createElement('canvas');
      canvas.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block';
      const gl=canvas.getContext('webgl',{alpha:false,antialias:false,depth:false,powerPreference:'low-power'});
      if(!gl)return false;
      const sh=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);
        if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){console.warn('soma-clouds',gl.getShaderInfoLog(s));return null;}return s;};
      const vs=sh(gl.VERTEX_SHADER,VERT),fs=sh(gl.FRAGMENT_SHADER,FRAG);if(!vs||!fs)return false;
      const prog=gl.createProgram();gl.attachShader(prog,vs);gl.attachShader(prog,fs);gl.linkProgram(prog);
      if(!gl.getProgramParameter(prog,gl.LINK_STATUS))return false;
      gl.useProgram(prog);
      const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);
      gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
      const loc=gl.getAttribLocation(prog,'a');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
      this._u={};for(const n of['uRes','uTime','uMirror','uGround','uDeep','uGlow','uCloud','uHi'])this._u[n]=gl.getUniformLocation(prog,n);
      this.appendChild(canvas);this._canvas=canvas;this._gl=gl;
      // Clouds are soft, so render at reduced resolution and let the browser scale up.
      const fit=()=>{const s=0.4,w=Math.max(1,Math.round((this.clientWidth||1)*s)),h=Math.max(1,Math.round((this.clientHeight||1)*s));
        if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}this._draw();};
      this._ro=new ResizeObserver(fit);this._ro.observe(this);fit();
      return true;
    }
    _draw(){
      const gl=this._gl;if(!gl)return;
      const p=this._palette(),u=this._u;
      gl.uniform2f(u.uRes,this._canvas.width,this._canvas.height);
      gl.uniform1f(u.uTime,this._time||0);
      gl.uniform1f(u.uMirror,this.getAttribute('mirror')==='1'?1:0);
      for(const k of['ground','deep','glow','cloud','hi'])gl.uniform3fv(u['u'+k[0].toUpperCase()+k.slice(1)],hex(p[k]));
      gl.drawArrays(gl.TRIANGLES,0,3);
    }
    _start(){
      if(this._raf||document.hidden)return;
      if(!this._gl&&!this._setup())return;   // no WebGL: keep the CSS fallback
      // Start at a pleasant moment rather than t=0, and keep going from where we paused.
      if(this._time===undefined)this._time=40;
      if(matchMedia('(prefers-reduced-motion: reduce)').matches){this._draw();return;}
      let last=performance.now();
      const tick=now=>{
        this._raf=requestAnimationFrame(tick);
        if(now-last<33)return;          // ~30 fps is plenty for slow clouds
        this._time+=Math.min(now-last,100)/1000*Number(this.getAttribute('speed')||1);last=now;
        this._draw();
      };
      this._raf=requestAnimationFrame(tick);
    }
    _pause(){cancelAnimationFrame(this._raf);this._raf=0;}
  }
  customElements.define('soma-clouds',SomaClouds);
})();
