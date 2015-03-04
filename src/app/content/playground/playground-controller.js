(function () {
  'use strict';

  angular.module('playground.controller', [ 'playground.service'] )

  .controller('PlaygroundController', function( $scope, PlaygroundService ) {
    // scope owner, meaning it is root and owns all data
    // all data shared with children is done via an isolated scope for a directive

    //FIXME incorrect references here leads to non-responsive browser
    var initialFile = PlaygroundService.files[0];

    var files = PlaygroundService.files;

    $scope.areas = [
      {
        settings: { //TODO move settings to files..
          woo: 'Browser',
          layout: 'absolute',
          // snap to percentages using relative coords
          // dragable (or lockable) on/off in panel top
          offsetLeft: 145,
          offsetTop: 130
        },
        content: {
          browser: {
            files: files
          },
          transformation: {
            current: initialFile.content.transformation
          },
          candidate: {
            current: initialFile.content.candidate
          },
          paper: {
            current: initialFile.content.paper
          }
        }
      }, {
        settings: {
          woo: 'Paper',
          layout: 'absolute',
          // snap to percentages using relative coords
          offsetLeft: 740,
          offsetTop: 130
        },
        content: {
          browser: {
            files: files
          },
          transformation: {
            current: initialFile.content.transformation
          },
          candidate: {
            current: initialFile.content.candidate
          },
          paper: {
            current: initialFile.content.paper
          }
        }
      }, {
        settings: {
          woo: 'Transformation',
          layout: 'absolute', // Find gridster/ ui layout flow style as alternative
          // snap to percentages using relative coords
          offsetLeft: 300,
          offsetTop: 130
        },
        content: {
          browser: {
            files: files
          },
          transformation: {
            current: initialFile.content.transformation
          },
          candidate: {
            current: initialFile.content.candidate
          },
          paper: {
            current: initialFile.content.paper
          }
        }
      }
    ];


  });

}());
