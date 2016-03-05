

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log(this);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare a bucket variable and assign it to the element at storage[index] or an empty array
  var bucket = this._storage[index] || [];
  // declare a tuple variable and assign it to [k,v]
  var tuple = [k, v];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // if the key is found in the bucket
    if (bucket[i][0] === k) {
      // reassign that tuple's second index to v
      bucket[i][1] = v;
    } else {
      // else, push tuple into the bucket
      bucket.push(tuple);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


