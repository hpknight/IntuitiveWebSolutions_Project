/*
Controller for the Requests route / page
Main controller to send up the request to the node server
// TODO: turn this into a service to minimize controller use
*/
angular.module('requestApp')
 	// need to inject client model / product model / request model
    .controller('requestCtrl', function(requestAPI) {
        var vm = this;

        vm.title = 'Request a feature updates to our software!';
        vm.clients = [{
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
        // TODO: vm.clients = clientModel.data;

        vm.products = [{
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
        // TODO: vm.products = productModel.data;

        vm.newFeatureRequest = {};

        vm.submitRequest = function() {
        	// TODO: requestModel.create(vm.newFeatureRequest).then(...);
        	requestAPI.create(vm.newFeatureRequest)
        		.then(function(data) {
        			console.log(data);
        			if (data && data.success) {
        				console.log('request has been successfully submitted');
        			} else {
        				console.log('there was an error submitting your request');
        			}
        			// keep promise chain going
        			return data;
        		})
        		.catch(function(error) {
        			console.log(error);
        		});
        };
    });
