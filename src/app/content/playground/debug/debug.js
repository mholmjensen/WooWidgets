(function () {
	'use strict';

	angular.module('playground.debug', [ 'playground.debug.inspector' ])

	// Set as attribute on element e
	// Child elements e_c of this directive can be
	// decorated with debug child directives
	.directive('wooDebug', function( $log ) {
		var linker = function( scope, iElem, tAttrs ) {

			var dataToWatch = [];
			angular.forEach( scope, function(value,index) {
				if( index.charAt(0) !== '$' ) {
					dataToWatch.push( { name: index, ref: scope[index], show: true } );
				}
			});

			scope.inspector = {
				dataToWatch: dataToWatch,
				showPanel: false
			};

			scope.highlight = {
				level: 0
			};

			scope.$watch( 'highlight.level', function( newValue, oldValue ) {
				tAttrs.$removeClass( 'debug-highlight-' + oldValue );
				if( newValue > 0) {
					tAttrs.$addClass( 'debug-highlight-' + newValue );
				}
				scope.highlight.level = newValue;
			});

		};

		return {
			restrict: 'A',
			compile: function(tElement, tAttrs) {
				tAttrs.$addClass( 'woo-debug' );
				return {
					pre: null,
					post: linker
				};
			}
		};
	})


	;

}());
