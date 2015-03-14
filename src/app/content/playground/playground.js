(function () {
	'use strict';

	angular.module('playground', [ 'playground.controller', 'playground.service',
																 'playground.area', 'playground.debug',
																 'playground.toolbar', 'playground.browser', 'playground.transformation', 'playground.paper' ])

	// TODO: Floating widgets
	// TODO Show active (last clicked) widget using panel-primary and panel-info
	.directive('wooPlayground', function( PlaygroundService ) {
		var postLink = function( scope ) {
			scope.browser = PlaygroundService.browser;
		};
		return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'app/content/playground/playground.tpl.html',
      controller: 'PlaygroundController',
      controllerAs: 'playgroundCtrl',
			compile: function(tElement, tAttrs) {
				tAttrs.$addClass( 'woo-playground' );
				return postLink;
			}
		};
	})

	;

}());
