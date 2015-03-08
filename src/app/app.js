'use strict';

(function () {

	angular.module('woo', ['templates', 'ui.router', 'dndLists',
												 'woo.config' ])

	.run(function($rootScope) {
		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			console.log('State change error: %o', error);
		});
	})

	;

}());
