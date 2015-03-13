(function () {
	'use strict';

	angular.module('playground.debug', [ 'playground.debug.inspector' ])

	.directive('wooDebug', function( ) {
		return {
			restrict: 'A',
			link: function( scope, elem, attr ) {
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
