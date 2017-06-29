/*global document window */

function fakeScroll(to) {
  var panel = document.getElementById('scroll-panel');
  if (panel) {
    panel.scrollItemIntoView({data: document.getElementById(to)});
  }
}

document.addEventListener('WebComponentsReady', function() {
  var template = document.querySelector('cells-template-paper-drawer-panel');
  var templatePaper = template.querySelector('paper-drawer-panel');
  var leftMenu = document.querySelector('.js-button-left');
  var rightMenu = document.querySelector('.js-button-right');
  var paperTabs = document.querySelector('paper-tabs');
  var contentTabs = document.querySelectorAll('div[data-tab]');
  var directionDrawer = 'right';
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer;
  var callbackObserver;
  var optionsObserver = {
    'attributes': true,
    'attributeOldValue': true
  };
  callbackObserver = function(mutations) {
    mutations.map(function(mutation) {
      if (mutation.oldValue === 'drawer') {
        rightMenu.classList.remove('active');
        leftMenu.classList.remove('active');
      }
    });
  };

  observer = new MutationObserver(callbackObserver);
  observer.observe(templatePaper, optionsObserver);
  paperTabs.addEventListener('click', function(e) {
    e.preventDefault();
    var tab = e.target.parentElement.dataset.tab;
    [].forEach.call(contentTabs, function(contentTab) {
      contentTab.classList.toggle('hidden', contentTab.dataset.tab !== tab);
    });
  });

  function managerMenu(direction, buttonPressed) {
    var durationAnimation = 0;
    if (templatePaper.selected === 'drawer' && template.rightDrawer === direction) {
      templatePaper.closeDrawer();
      return;
    }

    if (template.rightDrawer !== direction && templatePaper.selected === 'main') {
      durationAnimation = 316;
      template.set('rightDrawer', direction);
    }

    if (template.rightDrawer !== direction && templatePaper.selected === 'drawer') {
      durationAnimation = 616;
      window.setTimeout(function() {
        template.set('rightDrawer', direction);
      }, 316);
    }

    templatePaper.closeDrawer();

    window.setTimeout(function() {
      buttonPressed.classList.toggle('active');
      template.toggleMenu();
    }, durationAnimation);

  }

  leftMenu.addEventListener('click', function(e) {
    e.preventDefault();
    managerMenu(false, leftMenu);
  });

  rightMenu.addEventListener('click', function(e) {
    e.preventDefault();
    managerMenu(true, rightMenu);
  });

  document.addEventListener('cells-scroll-complete', function() {
    document.querySelector('#toast').open();
  });
});