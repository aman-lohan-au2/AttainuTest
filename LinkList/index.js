function LinkedList () {
  this.head = null;
}

LinkedList.prototype.hasLoop = function () {
  var p1, p2;
  p1 = this.head;
  p2 = this.head;

  while (p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 == p2) {
      return true;
    }
  }
  return false;
};

var L1 = new LinkedList();
var testData = [1,2,3,4,5,6];
testData.forEach(el => L1.insertNodeAtTail(el));

L1.head.next.next.next.next.next.next = L1.head.next.next;
console.log(L1.hasLoop()); 

L1.head.next.next.next.next.next.next = null;
console.log(L1.hasLoop()); 