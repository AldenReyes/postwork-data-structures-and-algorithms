/**
 * Converts a string roman numeral into its number equivalent.
 * Determines numeral by comparing the values of adjacent characters
 * Example: VI = 6 vs IV = 4
 */
function romanNumeral(string) {
  const romanChars = string.split('');
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < romanChars.length; i++) {
    const current = romanObj[romanChars[i]];
    const next = romanObj[romanChars[i + 1]];
    if (next !== undefined && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 1');
  console.log(romanNumeral('I'));

  console.log('');

  console.log('Expecting: 9');
  console.log(romanNumeral('IX'));

  console.log('');

  console.log('Expecting: 402');
  console.log(romanNumeral('CDII'));

  console.log('');

  console.log('Expecting: 3799');
  console.log(romanNumeral('MMMDCCXCIX'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
