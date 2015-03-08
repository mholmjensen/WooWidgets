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
			link: function(scope) {
				var startX = 0, startY = 0, x = 0, y = 0;


				scope.dragStart = function( event ) {
					// Prevent default dragging of selected content
					event.preventDefault();
					x = scope.layout.style.left;
					y = scope.layout.style.top;
					startX = event.screenX - x;
					startY = event.screenY - y;
					$document.on('mousemove', scope.beingDragged);
					$document.on('mouseup', scope.dragEnd);
				};

				scope.beingDragged = function() {
					y = event.screenY - startY;
					x = event.screenX - startX;

					scope.$apply( function() {
						scope.layout.style = {
							top: y,
							left: x
						};
					});
				};

				scope.dragEnd = function () {
					$document.off('mousemove', scope.beingDragged);
					$document.off('mouseup', scope.dragEnd);
				};
			}
		};
	})
	;

}());
