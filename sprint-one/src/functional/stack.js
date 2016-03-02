var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var item = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    item++;
  };

  someInstance.pop = function() {
    if(!(item===0)){
      item--;
    }
  };

  someInstance.size = function() {
    return item;
  };

  return someInstance;
};
