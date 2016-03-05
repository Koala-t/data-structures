

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log(this);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // check if bucket exists at that index
    
  // if bucket does not exist, create bucket array
  // if (this._storage.get(index) === undefined) {
  //   // push in key, value tuple
  //   var bucket = [[k, v]];
  //   // add bucket as value in storage
  //   this._storage.set(index, bucket);
  // } else {
  //   // if bucket does exist, loop thru bucket to check for key
  //   for(i=0, i<bucket.length, i++){
  //     // if key exists, overwrite value
  //     if(bucket[i][0]===k){bucket[i][1]=v}
  //     // otherwise, add tuple to end of array
  //     else bucket.push([k,v]);
  //   }
  // }

  
  this._storage.set(index, [k, v]);
  //console.log(this._storage.get(index));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


