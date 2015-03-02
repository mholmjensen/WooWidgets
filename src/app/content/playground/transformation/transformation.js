(function () {
	'use strict';

	angular.module('playground.transformation', ['playground', 'playground.config',
																							 'playground.transformation.controller', 'playground.candidate.controller'])

	.directive('wooTransformation', function() {
    return {
      restrict: 'EA',
      scope: {
				transformation: '=',
				candidate: '='
			},
      templateUrl: 'app/content/playground/transformation/transformation.tpl.html',
      controller: 'PlaygroundTransformationController',
      controllerAs: 'playgroundTransformationCtrl'
    };
  })

	.directive('wooCandidate', function() {
    return {
      restrict: 'EA',
      scope: {
				transformation: '=',
				candidate: '='
			},
      templateUrl: 'app/content/playground/transformation/candidate.tpl.html',
      controller: 'PlaygroundCandidateController',
      controllerAs: 'playgroundCandidateCtrl'
    };
  })
	;

}());
