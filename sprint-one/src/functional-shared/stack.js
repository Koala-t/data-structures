var Stack = function() {
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};
  extend(someInstance, Stack.stackMethods);
  return someInstance;
};

Stack.stackMethods = {
  size : function(){return this.count;},

  push : function(value){
    this.storage[this.count] = value;
    this.count ++;
  },

  pop : function(){
    if(this.count !== 0){
      this.count--;
    }
    return this.storage[this.count];
  }
};







var extend = function(to,from){
  for(var key in from){
    to[key] = from[key];
  }
};


// var stack = Stack();