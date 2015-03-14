(function () {
	'use strict';

	angular.module('playground.debug.inspector', [ ])

	// Inherits scope of parent (TODO read up on scope: true)
	.directive('wooDebugInspector', function( $log ) {
		return {
			restrict: 'EA',
			// require: '^wooDebug',
			templateUrl: 'app/content/playground/debug/inspector/inspector.tpl.html',
			link: function( scope, elem, attrs ) {
				attrs.$addClass( 'woo-debug-inspector' );
				if ( angular.isDefined( attrs.$attr.inline ) ) { // TODO: Should be set directly as optional css class? bootstrap style?
					attrs.$addClass( 'inspector added inline' );
				}

			}
		};
	})

	.directive('wooDebugInspectorToggle', function( $log ) {
		return {
			restrict: 'EA',
			templateUrl: 'app/content/playground/debug/inspector/inspector-toggle.tpl.html',
			link: function( scope, elem, attrs ) {
				attrs.$addClass( 'woo-debug-inspector-toggle' );
				if ( angular.isDefined( attrs.$attr.inline ) ) {
					$log.log('toggle added inline');
					attrs.$addClass( 'inline' );
				}
			}
		};
	})
	;

}());
