/*
Request API factory
*/
angular.module('requestApp')
	.factory('requestAPI', function($http){
		var api = {};

		// create a feature request
		api.create = function(data) {
			return $http.post('/api/request', data);
		};

		return api;
	});
