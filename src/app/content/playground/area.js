(function () {
	'use strict';

	angular.module('playground.area', [ 'playground.toolbar', 'playground.browser', 'playground.transformation', 'playground.paper' ])

	// TODO Show active (last clicked) widget using panel-primary and panel-info

	// TODO snap areas to percentages using relative coords
	// TODO dragable (or lockable) on/off in panel top

	.directive('wooArea', function( $document ) {
		return {
			restrict: 'EA',
			scope: {
				area: '=',
				name: '@',
				panelType: '@',
				layout: '=',
				browser: '=',
				currentFile: '=',
				woo: '@'
			},
			templateUrl: 'app/content/playground/area.tpl.html',
			link: function(scope, element, attr) {
				var unit = 'px';
				var startX = 0, startY = 0, x = 0, y = 0;

				x = scope.layout.style.left;
				y = scope.layout.style.top;

				scope.dragStart = function( event ) {
					// Prevent default dragging of selected content
					event.preventDefault();
					startX = event.screenX - x;
					startY = event.screenY - y;
					$document.on('mousemove', mousemove);
					$document.on('mouseup', mouseup);
				};

				function mousemove(event) {
					y = event.screenY - startY;
					x = event.screenX - startX;

					scope.$apply( function() {
						scope.layout.style.top = y;
						scope.layout.style.left = x;
					});
				}

				function mouseup() {
					$document.off('mousemove', mousemove);
					$document.off('mouseup', mouseup);
				}
			}
		};
	})
	;

}());
