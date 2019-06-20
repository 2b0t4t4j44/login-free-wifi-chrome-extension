(function (target) {
  switch (target.location.pathname.replace('/aeon/', '')) {
    case 'contract':
      target.document.getElementById('contract-ok').firstElementChild.submit();
    default:
      target.addEventListener('unload', _ => chrome.runtime.sendMessage('closeTab'));
  }
})(window);