(function () {
  if (document.body.dataset.nav === 'off') return;
  var script = document.currentScript || document.querySelector('script[src$="nav.js"]');
  var root = new URL('.', script.src);
  var css = [
    '.topbar{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:12px;',
    'height:64px;padding:0 22px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(12px);}',
    '.topbar a{color:var(--heading);text-decoration:none;font-weight:700;}',
    '.topbar nav{display:flex;align-items:center;gap:14px;}',
    '.topbar nav a{font-weight:600;color:var(--muted);font-size:14px;}',
    '.topbar nav a:hover{color:var(--accent);}',
    '.theme-btn{border:1px solid var(--line);background:transparent;color:var(--muted);border-radius:999px;padding:6px 10px;cursor:pointer;font:inherit;font-size:13px;}',
    '@media(max-width:640px){.topbar nav a:not(.keep){display:none;}}'
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  var bar = document.createElement('header');
  bar.className = 'topbar';
  bar.innerHTML =
    '<a href="' + root.href + '">田金涛</a>' +
    '<nav aria-label="站内">' +
    '<a class="keep" href="' + root.href + '#projects">项目</a>' +
    '<a href="' + new URL('projects/byrski/showcase/', root).href + '">初雪画册</a>' +
    '<button class="theme-btn" type="button" data-theme-toggle aria-label="切换主题">主题</button>' +
    '</nav>';
  document.body.prepend(bar);
})();
