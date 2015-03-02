(function () {
	'use strict';

	angular.module('playground', [ 'playground.controller',
																 'playground.toolbar', 'playground.browser', 'playground.transformation', 'playground.paper' ])

	// TODO: Floating widgets
	// TODO Show active (last clicked) widget using panel-primary and panel-info
	.directive('wooPlayground', function() {
		return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'app/content/playground/playground.tpl.html',
      controller: 'PlaygroundController',
      controllerAs: 'playgroundCtrl',
			link: function(scope, iElement, iAttrs, controller, transcludeFn) {
				console.log(scope);
				console.log(iElement);
				console.log(iAttrs);

				console.log(controller);
				console.log(transcludeFn);
				console.log('test');
			}
		};
	})

	.directive('wooArea', function() {
		return {
			restrict: 'EA',
			transclude: true,
			templateUrl: 'app/content/playground/area.tpl.html',
			link: function(scope, iElement, iAttrs, controller, transcludeFn) {
				console.log(scope);
				console.log(iElement);
				console.log(iAttrs);

				console.log(controller);
				console.log(transcludeFn);
				console.log('test');
			}
		};
	})

	;

}());
