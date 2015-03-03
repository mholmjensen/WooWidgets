(function () {
	'use strict';

	angular.module('playground.area', [ 'playground.toolbar', 'playground.browser', 'playground.transformation', 'playground.paper' ])

	// TODO: Floating widgets
	// TODO Show active (last clicked) widget using panel-primary and panel-info

	.directive('wooArea', function( $document ) {
		return {
			restrict: 'EA',
			scope: {
				name: '@',
				panelType: '@',
				offsetLeft: '=',
				offsetTop: '=',
				content: '=',
				woo: '='
			},
			templateUrl: 'app/content/playground/area.tpl.html',
			link: function(scope, elem) {

				elem.css({
					top: scope.offsetTop + 'px',
					left: scope.offsetLeft + 'px'
				});

				var startX, startY, initialMouseX, initialMouseY;
				elem.css({position: 'absolute'});

				elem.bind('mousedown', function($event) {
          startX = elem.prop('offsetLeft');
          startY = elem.prop('offsetTop');
          initialMouseX = $event.clientX;
          initialMouseY = $event.clientY;
					$document.bind('mousemove', mousemove);
					$document.bind('mouseup', mouseup);
          return false;
        });

        var mousemove = function ($event) {
          var dx = $event.clientX - initialMouseX;
          var dy = $event.clientY - initialMouseY;
					elem.css({
            top:  startY + dy + 'px',
            left: startX + dx + 'px'
          });
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
