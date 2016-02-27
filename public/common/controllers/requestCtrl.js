/*
Controller for the Requests route / page
Main controller to send up the request to the node server
// TODO: turn this into a service to minimize controller use
*/
angular.module('requestApp')
	.controller('requestCtrl', function(){
		var vm = this;

		vm.request = {
			title: 'Request Updates'
		};
	});
