function fibonacci(num) {
  let next = 1;
  let prev = 0;
  let value = 0;
  while (num - 1 >= 0) {
    value = next;
    next = next + prev;
    prev = value;
    num--;
  }
  return value;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
