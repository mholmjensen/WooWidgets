(function () {
  'use strict';

  angular.module('playground.paper.controller', [])

  .controller('PlaygroundPaperController', function($scope) {

    this.lineClicked = function( number ) {
      console.log('lc: ' + number );
    };

  });

}());
