var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if this is the first node to be added to the list
    if (list.tail === null && list.head === null) {
      //invoke Node and assing the resulting node-object to the tail and head
      list.tail = Node(value);
      list.head = list.tail;
      //otherwise
    } else {
    // generate new node and set it to list.tail.next temporarily
      list.tail.next = Node(value);
    // set list.tail to the newly generated node
      list.tail = list.tail.next;
    }

  };

  list.removeHead = function() {
    
    //test if empty
    if (list.head !== null) {
    // store head to be removed 
      var formerHead = list.head;
      list.head = list.head.next;
      return formerHead.value;
    }
  };

  list.contains = function(target) {
    var found = false;

    var search = function(suspect) {

      if (suspect !== null) { 
        if (target === suspect.value) {
          found = true;
          return found;
        } else {
          search(suspect.next);
        }
      }
      return found;
    };
    search(list.head);
    return found;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;


  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */





