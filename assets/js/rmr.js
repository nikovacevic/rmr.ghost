(function(window, document) {

  var mainNav = document.querySelector('#main-nav');
  var mainNavOpeners = document.querySelectorAll('.open-main-nav');
  var mainNavClosers = document.querySelectorAll('.close-main-nav');

  mainNavOpeners.forEach(function (element) {
    element.addEventListener('click', function() {
      toggleClass(mainNav, 'open');
    });
  });

  // If the event occurs outside the main nav and the element is not an
  // open button, close the nav. If the event occurs inside the main nav
  // and the element is not a close button, open the nav.
  var toggleMainNav = function(e) {
    var closeMenu = true;

    for (var el of e.path) {
      if (el.id && el.id === 'main-nav') {
        closeMenu = false;
      }
      if (el.className && el.className.indexOf('open-main-nav') > -1) {
        closeMenu = false;
        break;
      }
      if (el.className && el.className.indexOf('close-main-nav') > -1) {
        closeMenu = true;
        break;
      }
    }

    if (closeMenu) {
      removeClass(mainNav, 'open');
    } else {
      addClass(mainNav, 'open');
    }
  }
  document.addEventListener('click', toggleMainNav);
  document.addEventListener('touchend', toggleMainNav);

  function toggleClass(element, className) {
    if (hasClass(element, className)) {
      removeClass(element, className);
    } else {
      addClass(element, className);
    }
  }

  // https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
  function hasClass(element, className) {
    return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  // https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
  function addClass(element, className) {
    if (!hasClass(element,className)) element.className += " " + className;
  }

  // https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
  function removeClass(element, className) {
    if (hasClass(element,className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      element.className=element.className.replace(reg,' ');
    }
  }

})(window, document);
