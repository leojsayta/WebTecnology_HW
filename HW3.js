//A queue is a list structure that allows insertions only at the end and retrievals only from the front. 
//The following operations are to be implemented:
//
//-isEmpty: true if there are no items in the queue, false otherwise
//-size: returns the number of items in the queue
//-front: returns (but does not remove) the front item of the queue
//-enqueue: adds an item to the rear of the queue
//-dequeue: removes and returns the front item from the queue

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});

var Queue = function (origQ) {
    this.arr = origQ && (origQ instanceof Queue) ? origQ.arr.slice(0) : [];
};

//--Non-object-oriented JavaScript:
var Queue_NonOO = function (origQ) {}.inherits(Queue);

var isEmpty = function (qu) {
    return !(qu.arr.length > 0);
};
var size = function (qu) {
    return qu.arr.length;
};
var front = function (qu) {
    return isEmpty(qu) ? null : qu.arr[0];
};
var enqueue = function (qu, item) {
    qu.arr.push(item);
    return null;
};
var dequeue = function (qu) {
    return qu.arr.shift();
};

//--Standard JavaScript object-oriented:
var Queue_OO = function (origQ) {

    /*
     var that = this;
     return {
     'isEmpty': function () {
     return !(that.arr.length > 0);
     },
     'size': function () {
     return that.arr.length;
     },
     'front': function () {
     return this.isEmpty() ? null : that.arr[0];
     },
     'enqueue': function (item) {
     that.arr.push(item);
     return null;
     },
     'dequeue': function () {
     return that.arr.shift();
     }
     };
     */
    
    this.isEmpty = function () {
        return !(this.arr.length > 0);
    };
    this.size = function () {
        return this.arr.length;
    };
    this.front = function () {
        return this.isEmpty() ? null : this.arr[0];
    };
    this.enqueue = function (item) {
        this.arr.push(item);
        return null;
    };
    this.dequeue = function () {
        return this.arr.shift();
    };

}.inherits(Queue);


//--Functional JavaScript:
var Queue_Func = function (arr) {

    /*
    var that = this;
     
     return function (msg) {
     if (msg === 'isEmpty')
     return !(that.arr.length > 0);
     if (msg === 'size')
     return that.arr.length;
     if (msg === 'front')
     return !(that.arr.length > 0) ? null : that.arr[0];
     if (msg === 'enqueue')
     return function (item) {
     that.arr.push(item);
     return null;
     };
     if (msg === 'dequeue')
     return that.arr.shift();
    */

    return function (msg) {
        if (msg === 'isEmpty')
            return !(arr.length > 0);
        if (msg === 'size')
            return arr.length;
        if (msg === 'front')
            return !(arr.length > 0) ? null : arr[0];
        if (msg === 'enqueue')
            return function (item) {
                arr.push(item);
                return null;
            };
        if (msg === 'dequeue')
            return arr.shift();
    };

};  //.inherits(Queue);

(function () {
    "use strict";
    
     console.log("----Non-object-oriented JavaScript----");
     var qNonOO = new Queue_NonOO();
     
     console.log("isEmpty(qNonOO) === " + isEmpty(qNonOO));
     console.log("size(qNonOO) === " + size(qNonOO));
     console.log("front(qNonOO) === " + front(qNonOO));
     console.log("dequeue(qNonOO) === " + dequeue(qNonOO));
     
     enqueue(qNonOO, "item-one");
     console.log("enqueue(qNonOO, item-one)");
     enqueue(qNonOO, "item-two");
     console.log("enqueue(qNonOO, item-two)");
     enqueue(qNonOO, "item-three");
     console.log("enqueue(qNonOO, item-three)");
     
     console.log("isEmpty(qNonOO) === " + isEmpty(qNonOO));
     console.log("size(qNonOO) === " + size(qNonOO));
     console.log("front(qNonOO) === " + front(qNonOO));
     
     var item_one = dequeue(qNonOO);
     console.log("dequeue(qNonOO) === " + item_one);
     
     console.log("isEmpty(qNonOO) === " + isEmpty(qNonOO));
     console.log("size(qNonOO) === " + size(qNonOO));
     console.log("front(qNonOO) === " + front(qNonOO));
     
     var item_two = dequeue(qNonOO);
     console.log("dequeue(qNonOO) === " + item_two);
     
     console.log("isEmpty(qNonOO) === " + isEmpty(qNonOO));
     console.log("size(qNonOO) === " + size(qNonOO));
     console.log("front(qNonOO) === " + front(qNonOO));
     
     enqueue(qNonOO, "item-four");
     console.log("enqueue(qNonOO, item-four)");
     
     console.log("isEmpty(qNonOO) === " + isEmpty(qNonOO));
     console.log("size(qNonOO) === " + size(qNonOO));
     console.log("front(qNonOO) === " + front(qNonOO));
     
     var item_three = dequeue(qNonOO);
     console.log("dequeue(qNonOO) === " + item_three);
     
     console.log("isEmpty(qNonOO) === " + isEmpty(qNonOO));
     console.log("size === " + size(qNonOO));
     console.log("front(qNonOO) === " + front(qNonOO));
     
     var item_four = dequeue(qNonOO);
     console.log("dequeue(qNonOO) === " + item_four);
     
     console.log("isEmpty(qNonOO) === " + isEmpty(qNonOO));
     console.log("size(qNonOO) === " + size(qNonOO));
     console.log("front(qNonOO) === " + front(qNonOO));
     
     
     console.log("----Standard JavaScript object-oriented----");
     var qOO = new Queue_OO();
     
     console.log("qOO.isEmpty === " + qOO.isEmpty());
     console.log("qOO.size === " + qOO.size());
     console.log("qOO.front === " + qOO.front());
     console.log("qOO.dequeue() === " + qOO.dequeue());
     
     qOO.enqueue("item-one");
     console.log("qOO.enqueue(item-one)");
     qOO.enqueue("item-two");
     console.log("qOO.enqueue(item-two)");
     qOO.enqueue("item-three");
     console.log("qOO.enqueue(item-three)");
     
     console.log("qOO.isEmpty === " + qOO.isEmpty());
     console.log("qOO.size === " + qOO.size());
     console.log("qOO.front === " + qOO.front());
     
     var item_one = qOO.dequeue();
     console.log("qOO.dequeue() === " + item_one);
     
     console.log("qOO.isEmpty === " + qOO.isEmpty());
     console.log("qOO.size === " + qOO.size());
     console.log("qOO.front === " + qOO.front());
     
     var item_two = qOO.dequeue();
     console.log("qOO.dequeue() === " + item_two);
     
     console.log("qOO.isEmpty === " + qOO.isEmpty());
     console.log("qOO.size === " + qOO.size());
     console.log("qOO.front === " + qOO.front());
     
     qOO.enqueue("item-four");
     console.log("qOO.enqueue(item-four)");
     
     console.log("qOO.isEmpty === " + qOO.isEmpty());
     console.log("qOO.size === " + qOO.size());
     console.log("qOO.front === " + qOO.front());
     
     var item_three = qOO.dequeue();
     console.log("qOO.dequeue() === " + item_three);
     
     console.log("qOO.isEmpty === " + qOO.isEmpty());
     console.log("qOO.size === " + qOO.size());
     console.log("qOO.front === " + qOO.front());
     
     var item_four = qOO.dequeue();
     console.log("qOO.dequeue() === " + item_four);
     
     console.log("qOO.isEmpty === " + qOO.isEmpty());
     console.log("qOO.size === " + qOO.size());
     console.log("qOO.front === " + qOO.front());
     
     console.log("----Functional JavaScript----");
     var qFunc = new Queue_Func([]);
     
     console.log("qFunc('isEmpty') === " + qFunc('isEmpty'));
     console.log("qFunc('size') === " + qFunc('size'));
     console.log("qFunc('front') === " + qFunc('front'));
     console.log("qFunc('dequeue') === " + qFunc('dequeue'));
     
     qFunc('enqueue')("item-one");
     console.log("qFunc('enqueue')(item-one)");
     qFunc('enqueue')("item-two");
     console.log("qFunc('enqueue')(item-two)");
     qFunc('enqueue')("item-three");
     console.log("qFunc('enqueue')(item-three)");
     
     console.log("qFunc('isEmpty') === " + qFunc('isEmpty'));
     console.log("qFunc('size') === " + qFunc('size'));
     console.log("qFunc('front') === " + qFunc('front'));
     
     var item_one = qFunc('dequeue');
     console.log("qFunc('dequeue') === " + item_one);
     
     console.log("qFunc('isEmpty') === " + qFunc('isEmpty'));
     console.log("qFunc('size') === " + qFunc('size'));
     console.log("qFunc('front') === " + qFunc('front'));
     
     var item_two = qFunc('dequeue');
     console.log("qFunc('dequeue') === " + item_two);
     
     console.log("qFunc('isEmpty') === " + qFunc('isEmpty'));
     console.log("qFunc('size') === " + qFunc('size'));
     console.log("qFunc('front') === " + qFunc('front'));
     
     qFunc('enqueue')("item-four");
     console.log("qFunc('enqueue')(item-four)");
     
     console.log("qFunc('isEmpty') === " + qFunc('isEmpty'));
     console.log("qFunc('size') === " + qFunc('size'));
     console.log("qFunc('front') === " + qFunc('front'));
     
     var item_three = qFunc('dequeue');
     console.log("qFunc('dequeue') === " + item_three);
     
     console.log("qFunc('isEmpty') === " + qFunc('isEmpty'));
     console.log("qFunc('size') === " + qFunc('size'));
     console.log("qFunc('front') === " + qFunc('front'));
     
     var item_four = qFunc('dequeue');
     console.log("qFunc('dequeue') === " + item_four);
     
     console.log("qFunc('isEmpty') === " + qFunc('isEmpty'));
     console.log("qFunc('size') === " + qFunc('size'));
     console.log("qFunc('front') === " + qFunc('front'));
     
/*
    var testQ1 = new Queue_OO();
    var testQ2 = new Queue_OO();

    Queue_OO.prototype.testFun = function () {
        return "I'm in testFun!";
    };

    console.log(testQ1.testFun());
    console.log(testQ2.testFun());
    
    console.log(testQ1.prototype);
    console.log(Queue_OO.prototype);
    console.log(Queue.prototype);
    console.log(Queue.prototype.prototype);
    console.log(Function.prototype.prototype);
    console.log(Object.prototype);
    console.log(Array.toString());
    console.log((function () {
        return this;
    }()));

    var b = 1;
    
    var add = (function () {
        var counter = 0;
        return function () {
            return counter += b;
        }
    })();

    console.log(add());
    console.log(add());
    console.log(add());
    
    b = 3;
    
    console.log(add());
    console.log(add());
    console.log(add());
 */

}());


