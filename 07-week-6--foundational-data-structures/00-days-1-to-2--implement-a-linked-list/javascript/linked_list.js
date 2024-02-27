class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  iterate(callback) {
    let currentNode = this.head;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
    return this;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    const printValue = (node) => console.log(node.value);
    this.iterate(printValue);
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let result = null;
    const findValue = (node) => {
      if (node.value === target) {
        result = node;
        return;
      }
    };

    this.iterate(findValue);
    return result;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      let lastNode = null;
      const findLastNode = (currentNode) => {
        if (currentNode.next === null) {
          lastNode = currentNode;
        }
      };
      this.iterate(findLastNode);
      lastNode.next = node;
    }
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    if (this.head === null) {
      return;
    } else {
      const firstNode = this.head;
      this.head = this.head.next;
      return firstNode;
    }
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    let removedNode = null;
    const findLast = (node) => {
      const nodeValue = node.next.next;
      if (!nodeValue) {
        removedNode = node.next;
        node.next = null;
      }
    };
    this.iterate(findLast);
    return removedNode;
  }

  // replace the node at the given index with the given node
  replace(idx, node) {}

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {}

  // remove the node at the given index, and return it
  remove(idx) {}
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  const drinks = ['Coffee', 'Manhattan', 'Brandy Sour'];
  head = new Node(drinks[0], new Node(drinks[1], new Node(drinks[2])));
  list = new LinkedList(head);
  console.log('');
  console.log('list.head.value: ', list.head.value);
  console.log('list.head.next.value: ', list.head.next.value);
  console.log('list.head.next.next: ', list.head.next.next);
  console.log('');
  console.log(
    ".find('Coffee'), Expecting [Coffee Node]: ",
    '\n',
    list.find('Coffee')
  );
  console.log(".find('Tea'), Expecting null: ", list.find('Tea'));
  console.log('');
  console.log('Expecting Whiskey to be added to beginning: ');
  list.addFirst(new Node('Whiskey'));
  list.print();
  console.log('');
  console.log('Expecting Soda to be added to end: ');
  list.addLast(new Node('Soda'));
  list.print();
  console.log('');
  console.log('Expecting Whiskey to be removed: ');
  list.removeFirst();
  list.print();
}

module.exports = {
  Node,
  LinkedList,
};
