(function () {
	'use strict';

	angular.module('playground.debug.inspector', [ ])

	.directive('wooInspector', function( ) {
		return {
			restrict: 'EA',
			scope: true,
			// require: '^wooDebug',
			templateUrl: 'app/content/playground/debug/inspector/inspector.tpl.html',
			link: function( scope, elem, attr ) {
				console.log(scope.inspector);
			}
		};
	})

	.directive('wooInspectorToggle', function( ) {
		return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'app/content/playground/debug/inspector/inspector-toggle.tpl.html',
			link: function( scope, elem, attr ) {
				console.log(scope.inspector);
			}
		};
	})
	;

}());
