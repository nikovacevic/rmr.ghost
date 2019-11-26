(function(window, document) {

  var mainNav = document.querySelector('#main-nav');
  var mainNavToggles = document.querySelectorAll('.toggle-main-nav');

  mainNavToggles.forEach(function (element) {
    element.addEventListener('click', function() {
      toggleClass(mainNav, 'open');
    });
  });

  document.addEventListener('click', function(e) {
    var closeMenu = true;

    for (var el of e.path) {
      if (el.id && el.id === 'main-nav') {
        closeMenu = false;
      }
      if (el.className && el.className.indexOf('toggle-main-nav') > -1) {
        closeMenu = false;
      }
    }

    if (closeMenu) {
      removeClass(mainNav, 'open');
    }
  });

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
