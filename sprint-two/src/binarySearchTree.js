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

};

binaryTreeMethods.depthFirstLog = function(cb) {

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
