(function () {
	'use strict';

	angular.module('playground.debug', [ 'playground.debug.inspector' ])

	// Set as attribute on element e
	// Child elements e_c of this directive can be
	// decorated with debug child directives
	.directive('wooDebug', function( ) {
		return {
			restrict: 'A',
			link: function( scope ) {
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
			}
		};
	})
	;

}());
