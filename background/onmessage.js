chrome.runtime.onMessage.addListener((request, sender) => {
  if (request == 'closeTab' && sender.tab) {
    chrome.tabs.remove(sender.tab.id, () => {});
  }
});