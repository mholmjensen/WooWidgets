(function () {
	'use strict';

	angular.module('woo.content', [ 'playground' ])

	.directive('wooContent', function() {
    return {
      restrict: 'EA',
      scope: true,
			transclude: true,
      templateUrl: 'app/content/content.tpl.html'
    };
  })
	;

}());
