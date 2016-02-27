angular.module('requestApp', ['ui.bootstrap', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('', {
				templateUrl: 'views/main.tpl.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
			.when('/services', {
				templateUrl: 'views/services.tpl.html',
				// controller: 'servicesCtrl',
				// controllerAs: 'service'
			})
			.when('/request', {
				templateUrl: 'views/request.tpl.html',
				controller: 'requestCtrl',
				controllerAs: 'request'
			})
			.otherwise('/');

		// TODO: handle url #
		// $locationProvider.html5mode(true);
	});