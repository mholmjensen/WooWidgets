(function () {
  'use strict';

  angular.module('woo.menu', ['woo.menu.controller'])

  .directive('wooMenu', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/menu/menu.tpl.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl'
    };
  });

}());
