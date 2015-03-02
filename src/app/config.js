(function () {
	'use strict';

	angular.module('woo.config', ['woo.content', 'woo.menu'])

	.constant('FB', 'https://snippetmanager.firebaseio.com/')

	.config(function( $urlRouterProvider, $stateProvider ) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('default', {
			url: '/'
		});
	})


	.run(function($rootScope) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
			console.log(fromState.name + ' -> ' + toState.name);
		});
	})

	;

}());
