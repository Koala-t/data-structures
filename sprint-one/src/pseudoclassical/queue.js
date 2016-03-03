var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function (){
  if(this.count>0){
    this.count--;
  }
  var temp = this.storage[0];
  //iterate through the queue starting on the second element
  for (i=1; i<=this.count; i++){
    this.storage[i-1] = this.storage[i];
  }
  delete this.storage[this.count];
  return temp;
}


