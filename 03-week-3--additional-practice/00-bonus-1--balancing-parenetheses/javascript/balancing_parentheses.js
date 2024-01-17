/**
 *For every character of string, if character === '(', add to open.
 *If character === ')', subtract from open as long as open is > 0, else
 *add to missing. Return sum of open and missing.
 */
function balancingParentheses(string) {
  let open = 0;
  let missing = 0;
  for (const char of string) {
    if (char === '(') {
      open++;
      continue;
    } else if (char === ')') {
      if (open > 0) {
        open--;
      } else {
        missing++;
      }
    }
  }
  return open + missing;
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 0');
  console.log(balancingParentheses('(()())'));

  console.log('');

  console.log('Expecting: 2');
  console.log(balancingParentheses('()))'));

  console.log('');

  console.log('Expecting: 1');
  console.log(balancingParentheses(')'));

  console.log('');

  console.log('Expecting: 2');
  console.log(balancingParentheses(')('));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
