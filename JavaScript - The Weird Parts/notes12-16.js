S4-50: call() apply() bind()

Function: special type of object.
- contains NAME property, but can be anonymous
- contains CODE property, which is invokable()
- Access to special methods:
  - call()
  - apply()
  - bind()

      var person = {
        firstname: 'John',
        lastname: 'Doe',
        getFullName: function(){
          var fullname = this.firstname + this.lastname;
          return fullname;
        }
      }

      var logName = function(lang1, lang2){
        console.log("logged: " + this.getFullName());
      }

      var logPersonName = logName.bind(person);


By calling bind(person), it returns the logName() function
where 'this' points to the person object, rather than the global object.

bind() -> Creates copy of function, does not invoke it.
call() -> Invokes function
apply() -> Same as call, but accepts arguments as an array.

      logName.call(person, 'en', 'es');
      logName.apply(person, ['en', 'es']);


Function borrowing:

      var person2 = {
        firstname: 'Jane',
        lastname: 'Doe'
      }

      person.getFullName.apply(person2);

Person2 does not have getFullName method, but it's able to 'borrow' the function
from person, and direct 'this' to person2.

Function currying: Creating a copy of a function but with pre-set parameters.
Very useful in mathematical situations.

      function multiply(a, b){
        return a * b;
      }

      var multiplyByTwo = multiply.bind(this, 2);
      multiplyByTwo(4); // 8

Creates a COPY of multiply function, where 'a' is always 2.


S4-51: Functional Programming
Since JavaScript has first-class functions, which are objects. Can
pass/return functions into/from other functions. Can help make code
simpler & cleaner

      function mapForEach(arr, fn){
        var newArr = [];
        for (var i=0; i<arr.length; i++){
          newArr.push(
            fn(arr[i]);
          );
        }
        return newArr;
      }

      var arr1 = [1,2,3];
      var arr2 = mapForEach(arr1, function(item){
        return item * 2;
      });
      var arr3 = mapForEach(arr1, function(item){
        return item > 2;
      });

      var checkPastLimit = function(limiter, item){
        return item > limiter
      }
      var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

      var checkPastLimitSimplified = function(limiter){
        return function(limiter, item){ //this function isn't being executed, only created & returned
          return item > limiter;
        }.bind(this, limiter);
      }
      var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));

S4-52: Functional Programming pt.2

Underscore.js - popular open source library. Great learning opportunity to
read through source code and try to understand/work through it. Underscore.js
website has an "annotated source" link, which breaks out comments from source code

Underscore.js makes strong use of functional programming.
Lodash - similar

---- Section 5: Object Oriented JavaScript & Prototypal Inheritance -----
