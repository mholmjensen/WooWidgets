(function () {
  'use strict';

  angular.module('playground.paper.controller', [])

  .controller('PlaygroundPaperController', function() {
    this.lineClicked = function( number ) {
      console.log('lc: ' + number );
    };

  });

}());
