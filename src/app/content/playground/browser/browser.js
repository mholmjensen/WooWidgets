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
				scope.fileSelected = function( file ) {
					scope.browser.currentFile = file;
				};
				scope.fileMoved = function( index, file ) {
					scope.browser.files.splice( index, 1 );
					scope.browser.currentFile = file;
				};
			}
    };
  })

	.directive('wooBrowserFile', function() {
    return {
      restrict: 'EA',
      scope: {
				file: '=file'
			},
      templateUrl: 'app/content/playground/browser/browser-file.tpl.html',
			link: function( scope ) {
				
			}
    };
  })
	;

}());
