/*
Client Model service
// TODO: create client api
*/
angular.module('requestApp')
	.service('clientModel', function(){
		var model = {};

		// Client Model -- hard coded
		model.data = [{
            id: 1,
            name: 'Client A',
            location: 'Location A'
        }, {
            id: 2,
            name: 'Client B',
            location: 'Location B'
        }, {
            id: 3,
            name: 'Client C',
            location: 'Location C'
        }];

        // Load data via http call
        // model.loadClientData = function(e) {
        // 	// e === params passed up to the server
        // 	return clientAPI.read(e)
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
