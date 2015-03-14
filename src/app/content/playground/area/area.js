(function () {
	'use strict';

	angular.module('playground.area', [])

	// TODO Show active (last clicked) widget using panel-primary and panel-info

	// TODO snap areas to percentages using relative coords
	// TODO dragable (or lockable) on/off in panel top

	.directive('wooArea', function( $document ) {
		return {
			restrict: 'EA',
			scope: {
				name: '@',
				layout: '='
			},
			// scope: {
			// 	area: '=',
			// 	panelType: '@',
			// 	layout: '=',
			// 	browser: '=',
			// 	woo: '@'
			// },
			transclude: true,
			templateUrl: 'app/content/playground/area/area.tpl.html',
			link: function( scope) {
				var startX = 0, startY = 0, x = 0, y = 0;

				scope.dragStart = function( event ) {
					if ( event.which === 1 ) {
						event.preventDefault();
						startX = event.screenX - scope.layout.style.left;
						startY = event.screenY - scope.layout.style.top;
						$document.on('mousemove', scope.beingDragged);
						$document.on('mouseup', scope.dragEnd);
					}
				};

				scope.beingDragged = function() {
					scope.$apply( function() {
						scope.layout.style.left = event.screenX - startX;
						scope.layout.style.top = event.screenY - startY;
					}	);
				};

				scope.dragEnd = function () {
					$document.off('mousemove', scope.beingDragged);
					$document.off('mouseup', scope.dragEnd);
				};


				scope.resizeStart = function( event ) {
					if ( event.which === 1 ) {
						event.preventDefault();
						scope.startWidth = scope.layout.style.width;
						scope.startHeight = scope.layout.style.height;
						startX = event.screenX;
						startY = event.screenY;
						$document.on('mousemove', scope.beingResized);
						$document.on('mouseup', scope.resizeEnd);
					}
				};

				scope.beingResized = function() {
					y = event.screenY - startY;
					x = event.screenX - startX;

					scope.$apply( function() {
						scope.layout.style.width = scope.startWidth + x;
						scope.layout.style.height = scope.startHeight + y;
						scope.borderWidth = '3';
					});
				};

				scope.resizeEnd = function () {
					scope.$apply( function() {
						scope.borderWidth = '';
					});
					$document.off('mousemove', scope.beingResized);
					$document.off('mouseup', scope.resizeEnd);
				};


			}
		};
	})

	.directive('wooAreaMenu', function( ) {
		return {
			restrict: 'E',
			scope: true
		};
	})

	;

}());
