function recursiveSearch(arr, target) {
  if (arr[arr.length - 1] === target) {
    return true;
  } else if (arr.length > 1) {
    arr.pop();
    return recursiveSearch(arr, target);
  } else {
    return false;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([4], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
