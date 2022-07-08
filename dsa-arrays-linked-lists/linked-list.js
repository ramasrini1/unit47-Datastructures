/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null ){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null ){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }
    return cur;
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  print(){
    let curNode = this.head;
    console.log("*******************");
    while( curNode !== null){
      console.log(curNode.val);
      curNode = curNode.next;
    }
    console.log("*******************");
  }
  

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let curr = this._get(idx)
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if ( idx < 0 || idx > this.length ) {
      throw new Error("Invalid index.");
    }
    if ( idx === 0) {
      return this.unshift(val);
    }
    if ( idx === this.length ){
      return this.push(val);
    }

    let newNode = new Node(val);
    let prev = this._get(idx - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length +=1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if ( idx < 0 || idx > this.length -1 ) {
      throw new Error("Invalid index.");
    }

    let curNode = this.head;
    let val;
    
    while( curNode !== null){
      
      // If removing from idx == 0
      if ( idx === 0){
        if ( this.length === 1){
          val = curNode.val;
          this.head = null;
          this.tail = null;
          this.length -= 1;
          return val;
        }
        if (this.length === 2){
          val = curNode.val;
          this.head = curNode.next;
          this.tail = curNode.next;
          this.length -= 1;
          return val;
        }
      }
      let prev = this._get(idx - 1);
      console.log("prev " + prev.val);

      // if you are removing last item in the linked list
      if( idx === this.length - 1){
        val = this.tail.val;
        prev.next = null;
        this.tail = prev;
        this.length -= 1;
        return val;
      }
    
      // If you have reached here, you are removing a middle item
      val = prev.next.val;
      prev.next = prev.next.next;
      this.length -= 1;
      return val;
    }
     
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
    
  }
}

module.exports = LinkedList;

/* TEST CODE */

// let ll = new LinkedList(["apple", "berry", "cherry"]);
// ll.unshift("banana");
// ll.print();
// console.log("pop item")
// console.log("item popped is " + ll.pop());
// ll.print()



