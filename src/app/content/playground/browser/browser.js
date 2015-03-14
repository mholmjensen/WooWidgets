(function () {
	'use strict';

	angular.module('playground.browser', [])

	.directive('wooBrowser', function() {
    return {
      restrict: 'EA',
      scope: {
				files: '=',
				currentFile: '=' //TODO previously browser was sent here
			},
      templateUrl: 'app/content/playground/browser/browser.tpl.html',
			link: function( scope ) {
				scope.editingName = false;
				scope.fileSelected = function( event, file ) {
					// Not very spectacular stuff this here
					var candidate = file;
					angular.forEach( scope.files, function( otherFile ) {
						if ( file.name === otherFile.name ) { //FIXME: Messes up on same names, and generally risky unless in tree
							candidate = otherFile;
							console.log('found' + file.name );
							return false;
						}
					});
					scope.currentFile = candidate;
				};
				scope.fileMoved = function( event, index ) {
					var remfile = scope.files.splice( index, 1 );
					scope.fileSelected( event, remfile[0] );
				};
			}
    };
  })

	;

}());
