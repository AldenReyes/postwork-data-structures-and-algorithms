function findShortestString(arr) {
  let stringLength = arr[0].length;
  let stringIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentLength = arr[i].length;
    if (stringLength > currentLength) {
      stringIndex = i;
      break;
    }
  }
  return arr[stringIndex];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
