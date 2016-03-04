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
