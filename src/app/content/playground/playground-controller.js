(function () {
  'use strict';

  angular.module('playground.controller', [ 'playground.service'] )

  .controller('PlaygroundController', function( $scope, PlaygroundService ) {
    // scope owner, meaning it is root and owns all data
    // all data shared with children is done via an isolated scope for a directive
    $scope.browser = {};
    $scope.browser.files = PlaygroundService.files;

    var initialFile = PlaygroundService.files[0];

    $scope.transformation = {};
    $scope.transformation.currentTransformation = initialFile.content.transformation;

    $scope.candidate = {};
    $scope.candidate.currentCandidate = initialFile.content.candidate;

    $scope.paper = {};
    $scope.paper.currentPaper = initialFile.content.paper;


  });

}());
