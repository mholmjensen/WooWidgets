(function () {
	'use strict';

	angular.module('playground.debug.inspector', [ ])

	// Inherits scope of parent (TODO read up on scope: true)
	.directive('wooInspector', function( ) {
		return {
			restrict: 'EA',
			scope: true,
			// require: '^wooDebug',
			templateUrl: 'app/content/playground/debug/inspector/inspector.tpl.html',
			link: function( scope, elem, $attr ) {
				scope.onTop = angular.isDefined( $attr.onTop ); // FIXME: Introduce
			}
		};
	})

	.directive('wooInspectorToggle', function( ) {
		return {
			restrict: 'EA',
			scope: true,
			templateUrl: 'app/content/playground/debug/inspector/inspector-toggle.tpl.html',
			link: function( scope, elem, $attr ) {
				scope.onTop = angular.isDefined( $attr.onTop );
				console.log(scope.onTop);
			}
		};
	})
	;

}());
