(function () {
	'use strict';

	angular.module('playground.browser', [])

	.directive('wooBrowser', function() {
    return {
      restrict: 'EA',
      scope: {
				browser: '='
			},
      templateUrl: 'app/content/playground/browser/browser.tpl.html',
			link: function( scope ) {
				scope.fileSelected = function( event, file ) {
					scope.browser.currentFile = file;
					scope.selectedFile = file;
				};
				scope.fileMoved = function( event, index, file ) {
					var remfile = scope.browser.files.splice( index, 1 );
					scope.browser.currentFile = file;
					scope.selectedFile = file;
				};
			}
    };
  })

}());
