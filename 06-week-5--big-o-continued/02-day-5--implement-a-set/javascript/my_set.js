class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (
      !(
        typeof iterable === 'string' ||
        Array.isArray(iterable) ||
        iterable === undefined
      )
    ) {
      throw new Error('Input must be formatted as a string or array');
    }

    this.data = {};

    if (iterable) {
      for (const element of iterable) {
        this.data[element] = true;
      }
    }
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    if (!this.data[item]) {
      this.data[item] = true;
    }
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.data[item]) {
      return delete this.data[item];
    }
    return false;
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return !!this.data[item];
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data);
  }
}

if (require.main === module) {
  // add your own tests in here
  let newSet = new MySet();
  console.log('');
  console.log(newSet.add('New Item'));
  console.log('Expecting true: ', newSet.has('New Item'));
  console.log('Expecting false: ', newSet.has(23));
  console.log('Expecting 1: ', newSet.size());
  console.log('Expecting true: ', newSet.delete('New Item'));
}

module.exports = MySet;
