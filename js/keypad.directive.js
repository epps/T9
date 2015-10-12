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

.controller( 'KeyPadController', [
  '$scope',
  'LetterCombinations',
  function( $scope, LetterCombinations ) {
    var number = '';
    $scope.letterCombos;

    $scope.pressKey = function ( $event ) {
      if ( $event.target.innerText[0] === '1' ) { return; }
      number += $event.target.innerText[0];
      $scope.letterCombos = LetterCombinations.digitsToLetterCombinations( number );
      console.log( $scope.letterCombos );
    };
  }
]);