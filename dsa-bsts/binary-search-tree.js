class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    let curr = this.root;
    if( this.root === null ){
      this.root = newNode;
      return this;
    } 
    while ( curr ){
      if (curr.val > val){
        //Insert left
        if ( curr.left === null){
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else if ( curr.val < val ){
        //Insert right
        if ( curr.right === null){
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current=this.root) {
    
    if( this.root === null ){
      this.root = new Node(val)
      return this;
    } 
    
    if (current.val > val){
      //Insert left
      if ( current.left === null){
        current.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.left )
      }
    } else if ( current.val < val ){
      //Insert right
      if ( current.right === null){
        current.right = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.right )
      }
    }


  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curr = this.root;
    let found = false;
    
    if( this.root === null ){
      throw new Error("Passed a null root.");
    } 

    while ( curr && !found ){

      if ( curr.val > val ){
        // Search left tree
        curr = curr.left
      } else if ( curr.val < val ){
        // Search right tree
        curr = curr.right;
      } else {
        //found 
        found = true;
      }
    }
    if ( ! found ) { return undefined }
    return curr;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    if (this.root === null) return undefined;

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let node = this.root;
    let data = []
    function traverse(node) {
      data.push(node.val);
      if ( node.left ) { traverse(node.left)}
      if ( node.right ) { traverse(node.right) };
    }
    traverse(node);
    return data;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let node = this.root;
    let data = []
    function traverse(node) {
      if ( node.left ) { traverse(node.left)}
      data.push(node.val);
      if ( node.right ) { traverse(node.right) };
    }
    traverse(node);
    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let node = this.root;
    let data = []
    function traverse(node) {
      if ( node.left ) { traverse(node.left)}
      if ( node.right ) { traverse(node.right) };
      data.push(node.val);
    }
    traverse(node);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let results = [];
    if (!this.root) { return results; }
    let queue = [this.root];
    
    while( queue.length){
      let node = queue.shift();
      results.push(node.val)
      if ( node.left){
        queue.push(node.left);
      }
      if ( node.right){
        queue.push(node.right);
      }
    }
    return results;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

// Test the functions
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insertRecursively(15);
// binarySearchTree.insertRecursively(20);
// binarySearchTree.insertRecursively(10);
// binarySearchTree.insertRecursively(12);

// //let bst = binarySearchTree.insert(15);
  
// console.log(binarySearchTree.bfs());
      
module.exports = BinarySearchTree;
