var Stack = function() {
  var someInstance = {};
  extend(someInstance, Stack.stackMethods);
  return someInstance;
};

Stack.stackMethods = {};

Stack.stackMethods.size = function(){
  return 0;
};



var extend = function(to,from){
  for(var key in from){
    to[key] = from[key];
  }
};


// var stack = Stack();