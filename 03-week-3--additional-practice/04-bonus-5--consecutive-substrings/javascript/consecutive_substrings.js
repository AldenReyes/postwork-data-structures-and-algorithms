/**
 * Given a string input of at least one character, returns an
 * array containing all consecutive substrings. Substrings are
 * returned in the order they appear. Example usage:
 * Input: 'abc'
 * Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
 * @param {string} string
 * @returns {string[]}
 */
function consecutiveSubstrings(string) {
  const letters = string.split('');
  let substrings = [];

  if (string.length === 1) {
    substrings.push(string);
    return substrings;
  }

  for (let i = 0; i < letters.length; i++) {
    substrings.push(letters[i]);
    for (let j = i + 1; j < letters.length; j++) {
      substrings.push(substrings[substrings.length - 1] + letters[j]);
    }
  }

  return substrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log('=>', consecutiveSubstrings('abc'));

  console.log('');

  console.log("Expecting: ['a']");
  console.log('=>', consecutiveSubstrings('a'));

  console.log('');

  console.log('Expecting: []');
  console.log('=>', consecutiveSubstrings(''));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
