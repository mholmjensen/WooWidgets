(function () {
  'use strict';

  angular.module('playground.controller', [ 'playground.service'] )

  .controller('PlaygroundController', function( $scope, PlaygroundService ) {
    // scope owner, meaning it is root and owns all data
    // all data shared with children is done via an isolated scope for a directive
    // This should be updated or at least watchable from service

    // $scope.files = PlaygroundService.files;
    $scope.browser = {
      layout: {
        offsetLeft: 100,
        offsetTop: 130
      },
      files: PlaygroundService.files,
      currentFile: PlaygroundService.files[0]
    };

  });

}());
