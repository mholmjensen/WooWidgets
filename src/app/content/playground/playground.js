(function () {
	'use strict';

	angular.module('playground', [ 'playground.controller', 'playground.service',
																 'playground.area', 'playground.debug',
																 'playground.toolbar', 'playground.browser', 'playground.transformation', 'playground.paper' ])

	// TODO: Floating widgets
	// TODO Show active (last clicked) widget using panel-primary and panel-info
	.directive('wooPlayground', function( PlaygroundService ) {
		return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'app/content/playground/playground.tpl.html',
      controller: 'PlaygroundController',
      controllerAs: 'playgroundCtrl',
			link: function( scope ) {
				scope.browser = PlaygroundService.browser;
			}
		};
	})

	;

}());
