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
				name: '@',
				panelType: '@',
				layout: '=',
				browser: '=',
				currentFile: '=',
				woo: '@'
			},
			templateUrl: 'app/content/playground/area.tpl.html',
			link: function(scope, elem) {
				// scope.position = {
				// 	position: 'absolute',
				// 	top: scope.layout.offsetTop + 'px',
				// 	left: scope.layout.offsetLeft + 'px'
				// };

				// elem.css( {
				// 	position: 'absolute',
				// 	top: scope.layout.offsetTop + 'px',
				// 	left: scope.layout.offsetLeft + 'px'
				// } );


				var startX = 0, startY = 0, x = 0, y = 0;
				scope.drag = function( $event ) {
					console.log('dragged2');
					$event.preventDefault();
		      startX = $event.pageX - x;
		      startY = $event.pageY - y;
		      $document.bind('mousemove', mousemove);
		      $document.bind('mouseup', mouseup);
          return false;
				};

				// elem.bind('mousedown', function($event) {
        //   startX = elem.prop('offsetLeft');
        //   startY = elem.prop('offsetTop');
        //   initialMouseX = $event.clientX;
        //   initialMouseY = $event.clientY;
				// 	$document.bind('mousemove', mousemove);
				// 	$document.bind('mouseup', mouseup);
        //   return false;
        // });

        var mousemove = function ($event) {
					console.log('mousemove');

					y = $event.pageY - startY;
		      x = $event.pageX - startX;
					// scope.position = {
					// 	position: 'absolute',
          //   top:  startY + y + 'px',
          //   left: startX + x + 'px'
          // };

					scope.layout.offsetTop = startY + y;
					scope.layout.offsetLeft = startX + x;

          return false;
        };

				var mouseup = function() {
					$document.unbind('mousemove', scope.mousemove);
					$document.unbind('mouseup', scope.mouseup);
        };
			}
		};
	})

	;

}());
