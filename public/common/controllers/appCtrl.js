/*
Application wide controller 
(Parent Controller)
*/
angular.module('requestApp')
	.controller('appCtrl', function(){
		var vm = this;

		vm.title = 'Feature Request App';
	});
