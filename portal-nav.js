// "← Portal" link for pages opened inside the Somadome team portal (served under /redesign/).
// Does nothing on the public design-concepts site, or inside the tablet previews (iframes).
//
//   <script src="portal-nav.js"></script>                  adds html.in-portal so the page can show its own link
//   <script src="portal-nav.js" data-float></script>       also adds a floating link, top left
//   <script src="portal-nav.js" data-float data-theme></script>   and applies the portal's light/dark choice
(function () {
  if (!location.pathname.startsWith('/redesign/') || window.top !== window) return;
  var script = document.currentScript, root = document.documentElement;
  root.classList.add('in-portal');

  if (script && script.hasAttribute('data-theme')) {
    var theme = 'light';
    try { if (localStorage.getItem('somadome-theme') === 'dark') theme = 'dark'; } catch (e) {}
    root.setAttribute('data-theme', theme);
  }

  if (script && script.hasAttribute('data-float')) {
    var add = function () {
      var a = document.createElement('a');
      a.href = '/';
      a.textContent = '← Portal';
      a.className = 'portal-back-float';
      a.style.cssText = 'position:fixed;z-index:1000;top:calc(env(safe-area-inset-top,0px) + 14px);left:14px;display:inline-flex;align-items:center;' +
        'height:36px;padding:0 16px;border-radius:999px;font:500 14px/1 Poppins,system-ui,sans-serif;text-decoration:none;color:#fff;' +
        'background:rgba(30,18,72,.55);border:1px solid rgba(255,255,255,.34);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4)';
      document.body.appendChild(a);
    };
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', add) : add();
  }
})();
