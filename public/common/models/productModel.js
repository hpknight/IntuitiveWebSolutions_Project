/*
Product Model service
// TODO: create product api
*/
angular.module('requestApp')
	.service('productModel', function(){
		var model = {};

		// Product Model -- hard coded
		model.data = [{
            id: 1,
            name: 'Policies',
        }, {
            id: 2,
            name: 'Billing',
        }, {
            id: 3,
            name: 'Claims',
        }, {
            id: 4,
            name: 'Reports',
        }];

        // Load data via http call
        // model.loadProductData = function(e) {
        // 	// e === params passed up to the server
        // 	return productAPI.read(e)
        // 		.then(function(data) {
        // 			if (data && data.Success) {
        // 				// model.metaData = data; // if making app RESTful
        //				mode.data = data;
        // 				return data;
        // 			} else {
        // 				return [];
        // 			}
        // 		})
        // 		.catch(function(data) {
        // 			console.log(data);
        // 			return data;
        // 		})
        // 		.finally(function(data) {
        // 			return data;
        // 		});
        // };

		return model;
	});
