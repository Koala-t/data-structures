var BinarySearchTree = function(value) {
  var newInstance = Object.create(binaryTreeMethods);
  newInstance.value = value;
  newInstance.left = null;
  newInstance.right = null;

  // console.log(newInstance);

  return newInstance;


};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {

  // declare walkTree function, takes in node
  var walkTree = function(node) {
    
    // if value is less than node's value
    if (value < node.value) {
      // check if node's left property is null
      if (node.left === null) { 
        // then assign node's left property to new binaryTree instance with value of value
        node.left = BinarySearchTree(value);
      } else {
        // else run walkTree on node's left property
        walkTree(node.left);
      }
    
    } else { 
    // else if node's right property is null
      if (node.right === null) {
      // then assign node's right property to new binaryTree instance with value of value
        node.right = BinarySearchTree(value);
      } else {
        // else run walkTree on node's right property
        walkTree(node.right);
      }
    }
  };
  // call walkTree on master node
  walkTree(this);
};

binaryTreeMethods.contains = function(target) {
  //declare a match variable and set it to false
  var match = false;
  //declare a walkTree function, pass it a node
  var walkTree = function(node) {
    //if the target is equal to the node's value
    if (target === node.value) {
      //reassign the match variable
      match = true;
    //otherwise, if target is less than the node's value
    } else if (target < node.value) {
      //if node's left property is not null
      if (node.left !== null) {
        //invoke walkTree and pass it node's left property
        walkTree(node.left);
      }
    //otherwise, if target is greater than the node's value
    } else if (target > node.value) {
      //if node's right property is not null
      if (node.right !== null) {
        //invoke  walkTree and pass it node's right property
        walkTree(node.right);
      }
    }
  };
  //invoke walkTree, passing it the master node
  walkTree(this);
  //return the match variable
  return match;


};

binaryTreeMethods.depthFirstLog = function(cb) {
  // function expression for walkTree, takes in a node
  var walkTree = function(node) {
    // apply callback to node's value
    cb(node.value);
    // check if node's left property is not null
    if (node.left !== null) {
      // invoke walkTree on node's left property
      walkTree(node.left);
    } else {
    // check if node's right property is not null
      if (node.right !== null) {
      // invoke walkTree on node's right property
      walkTree(node.right);
      }
    }
  };
  walkTree(this);  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


//GOALS
//have methods
  //insert, 
    //insert values at correct location in tree
  //contains, 
    
  //depthFirstLog
