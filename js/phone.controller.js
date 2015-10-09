// Create an application module for T9
angular.module( 'T9', [] )

// Create the T9 application's main controller 
.controller( 'PhoneController', [ function() {
  // Save a reference to this in view-model variable
  var vm = this;
  vm.number = '';
}]);