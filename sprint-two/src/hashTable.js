

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log(this);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if index is null, then
    // bucket assigned to empty array
    // push tuple to the bucket
    // use set method to create bucket at storage index
  // if index not null, thn
    // declare bucket variable and assign to element at storage index


  // declare a bucket variable and assign it to the element at storage[index] or an empty array
  var bucket = this._storage.get(index) || [];
  // declare a tuple variable and assign it to [k,v]
  var tuple = [k, v];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // if the key is found in the bucket
    if (bucket[i][0] === k) {
      // reassign that tuple's second index to v
      // var oldValue = bucket[i][1];
      bucket[i][1] = v;
      // return oldValue;
    }
  }
    
    //push tuple into the bucket
    bucket.push(tuple);

    // set bucket
    this._storage.set(index, bucket);
    return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket variable and assign it to element at storage[index] or an empty array
  var bucket = this._storage.get(index) || [];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // if key is found in the bucket
    if (bucket[i][0] === k) {
      // return second index in the tuple
      return bucket[i][1];
    }
  }
  // return undefined (to indicate iteration has completed)
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //declare a bucket variable and assign it to the current value of storage[index] or an empty array
  var bucket = this._storage.get(index) || [];
  //iterate through the bucket array
  for (var i = 0; i < bucket.length; i++) { 
    //declare a tuple variable and assign it to the value of the bucket element were currently iterating through
    var tuple = bucket[i];
    //if the first element in the tuple array equals the input
    if (tuple[0] === k) {
      //use splice to remove the tuple array from the bucket
      bucket.splice(i, 1);
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


