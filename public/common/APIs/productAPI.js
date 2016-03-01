/*
Product API factory
*/
angular.module('requestApp')
	.factory('productAPI', function($http){
		var api = {};

		// create a feature request
		api.read = function() {
			return $http.get('/api/products');
		};

		return api;
	});
