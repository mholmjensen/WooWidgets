(function () {
  'use strict';

  angular.module('playground.candidate.controller', [])

  .controller('PlaygroundCandidateController', function( $scope ) {
    $scope.addCandidate = function( from, to ) {
      // FIXME: input validation, preferably in DOM
      $scope.transformation.highlight = {
        from: from,
        to: to
      };

      $scope.transformation.replacements.push(
        {
          from: from,
          to: to
        }
      );

      $scope.reset();
    };

    $scope.reset = function() {
      $scope.candidate.current.from = '';
      $scope.candidate.current.to = '';
    };
  });

}());
