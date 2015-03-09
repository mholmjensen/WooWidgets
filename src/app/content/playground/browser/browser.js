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
				scope.editingName = false;
				scope.fileSelected = function( event, file ) {
					// Not very spectacular stuff this here
					var candidate = file;
					angular.forEach( scope.browser.files, function( otherFile, key ) {
						if ( file.name === otherFile.name ) { //FIXME: Messes up on same names, and generally risky unless in tree
							candidate = otherFile;
							console.log('found' + file.name );
							return false;
						}
					});
					scope.browser.currentFile = candidate;
				};
				scope.fileMoved = function( event, index, file ) {
					var remfile = scope.browser.files.splice( index, 1 );
					scope.fileSelected( event, remfile[0] );
				};
			}
    };
  })

	;

}());
