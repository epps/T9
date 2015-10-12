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
      // number variable builds with each successive click event
      number += $event.target.innerText[0];
      // digitsToLetterCombinations is called with each click event, i.e. as number grows
      $scope.letterCombos = LetterCombinations.digitsToLetterCombinations( number );

      console.log("The letter combinations for " + number + " are: " + $scope.letterCombos );
    };
  }
]);