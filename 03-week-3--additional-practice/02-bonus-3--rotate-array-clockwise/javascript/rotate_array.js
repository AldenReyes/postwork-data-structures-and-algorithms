function rotateArray(arr, k) {
  /**Rotates array by k units by removing k units from the input array
   * then concatenating the removed elements with the remaining array.
   **/
  const rotations = k % arr.length;
  const removed = arr.splice(-rotations);
  return removed.concat(arr);
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: [4, 1, 2, 3]');
  console.log('=>', rotateArray([1, 2, 3, 4], 1));

  console.log('');

  console.log('Expecting: [2, 3, 1]');
  console.log('=>', rotateArray([1, 2, 3], 2));

  console.log('');

  console.log('Expecting: [1, 2, 3]');
  console.log('=>', rotateArray([1, 2, 3], 6));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
