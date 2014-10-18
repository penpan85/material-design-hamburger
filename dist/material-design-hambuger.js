(function() {

  'use strict';

  document.querySelector('.material-design-hamburger__icon').addEventListener(
    'click',
    function() {

      document.body.classList.toggle('nav-open');

      return this.classList.contains(
          'material-design-hamburger__icon--to-arrow') ?
        this.classList
        .toggle('material-design-hamburger__icon--from-arrow') : this.classList
        .toggle(
          'material-design-hamburger__icon--to-arrow');

    });

})();