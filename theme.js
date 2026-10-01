(function () {
  var key = 'tianjt-site-theme';
  var saved = localStorage.getItem(key);
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-theme-toggle]');
    if (!button) return;
    var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(key, next);
    button.setAttribute('aria-label', next === 'dark' ? '切换到浅色' : '切换到深色');
  });
})();
