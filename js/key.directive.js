angular.module( 'T9' )
// Create an attribute directive for individual keys
.directive( 'key', [ function() {
  return {
    restrict: 'A',
    scope: false,
    link: function( $scope, element, attributes ) {
      // Registers click event on keys; click handler pulls text from elements and builds up number property on parent scope
      element.on( 'click', function clickHandler( event ) {
        $scope.phone.number += element.text()[0];
        console.log("Click", $scope.phone.number);
      });
    }
  };
}]);