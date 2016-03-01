/*
Client API factory
*/
angular.module('requestApp')
	.factory('clientAPI', function($http){
		var api = {};

		// create a feature request
		api.read = function() {
			return $http.get('/api/clients');
		};

		return api;
	});
