function distinctPairSum(arr, k) {
  /**Returns all distinct pairs of consecutive numbers that
   * add up to `k` given an array `arr`. A pair is distinct
   * if no other pair contains the same number.
   */
  let pairs = [];
  let values = new Set();
  for (let i = 0; i < arr.length - 1; i++) {
    /**Checks if pair equals target and if pair values
     * are not found in set `values`.
     */
    if (
      arr[i] + arr[i + 1] === k &&
      !(values.has(arr[i]) || values.has(arr[i + 1]))
    ) {
      pairs.push([arr[i], arr[i + 1]]);
      values.add(arr[i]);
      values.add(arr[i + 1]);
    }
  }
  return pairs;
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: [[1, 1], [2, 0]]');
  console.log('=>', distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log('');

  console.log('Expecting: [[2, 8]]');
  console.log('=>', distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log('');

  console.log('Expecting: [[3, 2], [0, 5]]');
  console.log('=>', distinctPairSum([1, 3, 2, 0, 5, 2, 3], 5));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
