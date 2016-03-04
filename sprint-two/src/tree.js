var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create master node of new tree and push to children array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //assign a placeholder variable to false
  var match = false;
  // define recursive function to search tree 
  var searchTree = function(node) {
    // Terminal case
    // if children array empty, then return placeholder
    if (this.children === []) {
      return match;
    } else {
    // Iterate through children of node we're inspecting
      for (var i = 0; i < node.children.length; i++) {
        //Base case
        // if target matches child node value
        if (target === node.children[i]) {
          // reassign placeholder to true and return
          match = true;
          return match;
        } else {
          // Recursive case  
          // call recursive function, passing in child node
          searchTree(node.children[i]);
        }
      }
    }
  };
  //invoke the recursive function using master node
  searchTree(this);
};

// extend function
var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
