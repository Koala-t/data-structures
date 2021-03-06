var Queue = function() {
  var someInstance = {};
  extend(someInstance, queueMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  size: function(){
    return this.count;
  },
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(){
    if(this.count !== 0){this.count--;}
    
    var temp = this.storage[0];
    
    for(var i=1; i<= this.count; i++){
      this.storage[i-1] = this.storage[i];
    }
    
    delete this.storage[this.count];

    return temp;
  }
};



var extend = function(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};
