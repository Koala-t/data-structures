var Queue = function() {
 var someInstance = Object.create(queueMethods)
 someInstance.count = 0;
 someInstance.storage = {};
 return someInstance
};

var queueMethods = {};

queueMethods.size = function(){
  return this.count;
}

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count ++;
}

queueMethods.dequeue = function(){
  if(this.count>0){
    this.count--;
  }
  var temp = this.storage [0];
  for(var i=1; i<=this.count; i++){
    this.storage[i-1] = this.storage[i]
  };
  delete this.storage[this.count];
  return temp;
}