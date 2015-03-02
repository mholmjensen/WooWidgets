(function () {
	'use strict';

	angular.module('playground.toolbar', [ 'playground.toolbar.controller' ])

	.directive('wooToolbar', function() {
    return {
      restrict: 'EA',
      scope: true,
      templateUrl: 'app/content/playground/toolbar/toolbar.tpl.html',
      controller: 'PlaygroundToolbarController',
      controllerAs: 'playgroundToolbarCtrl'
    };
  })
	;

}());
