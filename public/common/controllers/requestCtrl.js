/*
Controller for the Requests route / page
Main controller to send up the request to the node server
// TODO: turn this into a service to minimize controller use
*/
angular.module('requestApp')
    .controller('requestCtrl', function($scope, requestAPI) {
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

        vm.newFeatureRequest = {};

        vm.submitRequest = function() {
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
