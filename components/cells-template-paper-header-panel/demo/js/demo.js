
document.addEventListener('WebComponentsReady', function() {
  var myTemplate = this.querySelectorAll('cells-template-paper-header-panel');
  var paperTabs = document.querySelector('paper-tabs');
  var contentTabs = document.querySelectorAll('div[data-tab]');

  for (var i = 0; i < myTemplate.length; i++) {
    myTemplate[i].state = 'active';
  }

  paperTabs.addEventListener('click', function(e) {
    e.preventDefault();
    var tab = e.target.parentElement.dataset.tab;
    [].forEach.call(contentTabs, function(contentTab) {
      contentTab.classList.toggle('hidden', contentTab.dataset.tab !== tab);
    });
  });
});
