(function () {
	'use strict';

	angular.module('playground.browser', ['playground', 'playground.config',
																				'playground.browser.controller',
																				'playground.browser-file.controller'])

	.directive('wooBrowser', function() {
    return {
      restrict: 'EA',
      scope: {
				files: '=files',
				transformation: '=transformation',
				candidate: '=candidate',
				paper: '=paper'
			},
      templateUrl: 'app/content/playground/browser/browser.tpl.html',
      controller: 'PlaygroundBrowserController',
      controllerAs: 'playgroundBrowserCtrl'
    };
  })

	.directive('wooBrowserFile', function() {
    return {
      restrict: 'EA',
      scope: {
				file: '=file'
			},
      templateUrl: 'app/content/playground/browser/browser-file.tpl.html',
      controller: 'PlaygroundBrowserFileController',
      controllerAs: 'playgroundBrowserFileCtrl'
    };
  })
	;

}());
