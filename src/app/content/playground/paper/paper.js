(function () {
	'use strict';

	angular.module('playground.paper', ['playground', 'playground.config',
																			'playground.paper.controller',
																			'monospaced.elastic'])

	.directive('wooPaper', function() {
    return {
      restrict: 'EA',
      scope: {
				paper: '=',
				transformation: '=',
				candidate: '='
			},
      templateUrl: 'app/content/playground/paper/paper.tpl.html',
      controller: 'PlaygroundPaperController',
      controllerAs: 'playgroundPaperCtrl'
    };
  })

	.directive('wooLine', function() {
    return {
      restrict: 'EA',
			scope: {
        letters: '@letters',
        number: '@number',
				transformation: '=',
				candidate: '='
      },
      templateUrl: 'app/content/playground/paper/line.tpl.html'
    };
  })


	.directive('wooWord', function() {
    return {
      restrict: 'EA',
			scope: {
				word: '@',
				transformation: '=',
				candidate: '='
      },
      templateUrl: 'app/content/playground/paper/word.tpl.html'
    };
  })



		.filter('substitute', function () {
			return function(line, subs) {
				var output = line;

				angular.forEach(subs, function(sub) {
					if( sub.enabled === undefined || sub.enabled ) {
						output = output.replace(new RegExp(sub.from, 'g'), sub.to);
					}
				});

				return output;
			};
		})

		.filter('highlight', function () {
			return function( line, sub ) {
				if( sub === undefined || sub.to === undefined ) {
					// console.log( 'sub is not well-defined' );
					return line;
				}

				return line.replace(new RegExp(sub.to, 'g'), '<mark>' + sub.to + '</mark>');
			};
		})

		.filter('rawToLines', function () {
			return function( text ) {
				var lines = [];
				//FIXME allow double lines if line.length > 0 twice in a row
				angular.forEach( text.split('\n'), function( line ) {
					var trimmed = line.trim();

					lines.push( ( trimmed.length === 0 ? '' : trimmed ) );

				});
				return lines;
			};
		})

		.filter('lettersToWords', function () {
			return function( letters ) {
				var words = [];
				angular.forEach( letters.split(' '), function( line ) {
					var trimmed = line.trim();
					if( line !== undefined && trimmed.length > 0 ) {
						words.push(trimmed);
					}
				});
				return words;
			};
		})

		.filter('html', function($sce) {
	    return function(val) {
	      return $sce.trustAsHtml(val);
	    };
	  })


	;

}());
