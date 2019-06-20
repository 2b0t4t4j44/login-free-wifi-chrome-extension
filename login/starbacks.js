(function (target) {
  switch (target.location.pathname.replace('/wi2auth/at_STARBUCKS_Wi2/', '')) {
    case 'index.html':
      target.document.getElementById('button_next_page').click();
      break;
    case 'agreement.html':
      target.document.getElementById('button_accept').click();
    default:
      target.addEventListener('unload', _ => chrome.runtime.sendMessage('closeTab'));
  }
})(window);