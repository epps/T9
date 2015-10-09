angular.module( 'T9' )
// Create a factory to hold the business logic of the T9 app
.factory( 'LetterCombinations', [ function() {
  // Create a dictionary objects that maps digits to the letters associated with them
  var digitsToLetters = {
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  function digitsToLetterCombinations( digitString ) {
    var words = [];

    // generateWordCombinations is a recursive subroutine that uses backtracking to generate
    // unique combinations of letters from an array of digits
    var generateWordCombinations = function ( word, digits ) {
      // base case: a word has been generated when there aren't any more digits to operate on
      if ( digits.length === 0 ) {
        words.push( word );
        return;
      }

      // save a reference to the current digit
      var currentDigit = digits[0];
      // create a new array of the remaining digits
      var remainingDigits = digits.slice(1);
      // create an array of the letters associated with the current digits
      var letters = digitsToLetters[currentDigit].split('');
      // iterate over array of letters, recursing on each new building combinations
      letters.forEach( function( letter ) {
        generateWordCombinations( word + letter, remainingDigits );
      });
    };

    // initial call to recursive subroutine
    generateWordCombinations( '', digitString );
    // return generated word combinations
    return words;
  }

  // expose the factory method 
  return {
    digitsToLetterCombinations: digitsToLetterCombinations
  };

}]);