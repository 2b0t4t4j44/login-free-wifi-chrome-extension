document.getElementById('freeWifiLists').childNodes.forEach((node) => {
  node.addEventListener('click', (event) => {
    window.open(event.target.dataset.url);
  });
});