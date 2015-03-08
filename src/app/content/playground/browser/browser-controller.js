(function () {
  'use strict';

  angular.module('playground.browser.controller', [])

  .controller('PlaygroundBrowserController', function( $scope ) {
    var self = this;

    this.list = {
      moved: function(event, index, file) {
        //$scope.files.splice(index, 1);
        //TODO drag and drop should work
      },
      selected: function(file) {
        $scope.browser.currentFile = file;
      }
    };

  });

}());
