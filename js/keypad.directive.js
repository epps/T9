angular.module( 'T9' )

.directive( 'keyPad', [ function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '../templates/keypad.html',
    replace: true,
    controller: 'KeyPadController'
  };
}])

.controller( 'KeyPadController', [ '$scope', function( $scope ) {
  $scope.number = '';

  $scope.pressKey = function ( $event ) {
    console.log( $event.target.innerText[0] );
    $scope.number += $event.target.innerText[0];
  };

}]);