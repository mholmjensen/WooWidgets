(function () {
  'use strict';

  angular.module('playground.browser.controller', [])

  .controller('PlaygroundBrowserController', function( $scope ) {
    var self = this;

    this.status = {
      selected: $scope.files[0]
    };

    this.list = {
      moved: function(event, index, file) {
        $scope.files.splice(index, 1);
      },
      selected: function(file) {
        self.status.selected = file;
        $scope.transformation = file.content.transformation;
        $scope.candidate = file.content.candidate;
        $scope.paper = file.content.paper;
      }
    };

  });

}());
