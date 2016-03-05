var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};

  return someInstance;
};
//QUESTION
//why can we not use Object.create(Stack.prototype)
//and Stack.prototype.size = function(){return 0;}
//for the first test?

var stackMethods = {};

stackMethods.size = function(){
  return this.count;
};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function(){
  if(this.count > 0){
    this.count--;
  }

  //this is the only stack function which will remove items from the stack
  var temp = this.storage[this.count];
  delete this.storage[this.count];
  return temp;
};

