function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return arr;
  }
  //Takes the minimum value and swaps it with the first element
  const min = Math.min(...arr);
  const index = arr.indexOf(min);
  [arr[0], arr[index]] = [arr[index], arr[0]];
  //saves the min value and inserts it to the beginning of returned recursive array
  const newArr = arr.shift();
  const result = selectionSortRecursive(arr);
  result.unshift(newArr);
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
