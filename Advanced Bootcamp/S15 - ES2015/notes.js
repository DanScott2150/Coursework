ES2015 / ES6


-- let & const

const - variables that can't be changed. Trying to redeclare will throw an error
*exception is that if const is an array or object, those can still be modified.
  but primitive values cannot.

let - 'block scope' variables.
Keywords that create block scope: if(), for(), while(), do(), try()
If trying to access let outside of scope, will throw error
Hoisting: var declarations hoisted to the top of their scope.
          let declarations hoist as well, but we cannot access the value.
            Stored in a 'TDZ' Temporal Dead Zone.

Some dev's replace all var with let. Maybe not always necessary

-- Template Strings
backticks and ${} notation. Already familiar with this

Works with multi-line strings:
"Hello
World
!"  //does not work

`Hello
World
!!` //does work

-- Arrow functions
//ES5
var add = function(a,b){
  return a+b;
}

//ES6
var add = (a,b) => {
  return a+b;
}

Can omit 'retun' and {} if function all on one line.
i.e. var add = (a,b) => a + b;

[1,2,3].map(function(value){
  return value * 2;
}); //[2,4,6]

[1,2,3].map(value => value * 2);  //[2,4,6]

More complicated example:
//function to take array, double all #'s, then return #'s divisible by 3
function doubleAndFilter(arr){
  return arr.map(function(value){
    return value * 2;
  }).filter(function(value){
    return value % 3 === 0;
  })
};
doubleAndFilter([5,10,15,20]);  //[30]

//ES6 version:
var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);
doubleAndFilter([5,10,15,20]);  //[30]

Arrow functions not exactly the same as regular fucntions.
Arrow functions do NOT get their own keyword 'this'
Value of the keyword 'this' is whatever it would be immediately outside of function

var instructor = {
  firstName: "Elie",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hello " + this.firstName);
    }, 1000);
  }
}

Returns Hello undefined, since 'this' points at window when SetTimeout executes.
Solve this originally by binding 'this' to setTimeout function

var instructor = {
  firstName: "Elie",
  sayHi: function(){
    setTimeout(() => {
      console.log("Hello " + this.firstName);
    }, 1000);
  }
}

Returns "Hello Elie" due to arrow function. Because 'this' gets assined to its
enclosing context, which in this case is the instructor object. If we did the entire
sayHi() method as an arrow function, then 'this' would not refer to instructor object anymore.

Arrow functions also do not get their own 'arguments' keyword. Keyword can be accessed
in an arrow function if it's within another function, but then it will only access the outer
functions arguments.

**Need to re-visit this. Don't entirely understand

Should never use arrow functions as methods on objects, since we will always get the
wrong version of 'this'. ES6 has better alternatives that will be covered soon

-- Default Parameters

    function add(a,b){
      return a+b
    }
    add()   //NaN, since parameters not passed

Setting default parameters via conditional logic in old JS:
    function add(a,b){
      if(a === undefined){
        a = 2;
      }
      if (b === undefined){
        b = 3;
      }
      return a+b
    }

Very cumbersome, especially with lots of parameters or more complicated parameters
Instead, with ES6, can set default parameters within function declaration:
      function add(a=2, b=3){
        return a+b
      }
      add()   //5, since no parameters passed it uses default parameters

Default parameters can be anything. Numbers, booleans, arrays, etc.

-- For...of
Loop for iterating over values in an array

      var arr = [1,2,3,4];

      for(let val of arr){
        console.log(val);
      }

      //1 2 3 4

Can't access an index of array, like normal loop.
Can only be used on data structures witch Symbol.iterator method implmented
(?? **research this more?)
Can't use on objects.

-- 'Rest' operator

Collects the remaining arguments to a function and returns them in an array
Use via three dots (...) in function declaration
      function printRest(a,b,...c){
        console.log(a);
        console.log(b);
        console.log(c);
      }
      printRest(1,2,3,4,5);
      //1
      //2
      //[3,4,5]

Useful when you need to access the 'arguments' keyword as an array. 'arguments' returns
an array-like object, but not an array.
Rest operator always returns an array

//ES5
function sumArguments(){
  var total = 0;
  for(var i=0; i<arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

Above works since arguments isn't an array, but still has a .length property
If we needed to actually convert arguments into an array, more complicated:

function sumArguments(){
  var argumentsArray = [].slice.call(arguments);
  return argumentsArray.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
  })
}


Instead, we can accomplish via ES6:

var sumArguments = (...args) => args.reduce((acc, next) => acc + next);

(?! **need to spend more time on this)

-- Spread

When three dots (...) used outside of function declaration, they're called a 'spread' operator
Takes array, spreads each value out as comma-separated value
Useful for converting array into comma-separated values

//ES5
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var combined = arr1.concat(arr2).concat(arr3);

//ES6:
var combined = [...arr1, ...arr2, ...arr3];

Another example:
var arr = [1,2,3,4,5];
Math.max(arr);  //NaN, since Math can't evaluate array

ES5:
Math.max.apply(this, arr);  //5, since apply converts array to string

ES6:
Math.max(...arr); //5

-- Object Shorthand Notation:
If key and value have same name, don't need to type it out twice.

      var firstName: "Dan";
      var lastName: "Scott";

      //ES5:
      var person = {
        firstName: firstName,
        lastName: lastName
      };

      //ES6:
      var person = {
        firstName,
        lastName
      }

Can add object methods without 'function' declaration
(also remember, don't use arrow functions on object methods because 'this')

      //ES5:
      var instructor = {
        sayHello: function(){
          return "Hello!";
        }
      }

      //ES6:
      var instructor = {
        sayHello(){
          return "Hello!";
        }
      }

-- Computed Property Names


-- Destructuring
Extracting values from data stored in objects & arrays

        var instructor = {
          firstName: "Elie",
          lastName: "Schoppik"
        }

        //ES5:
        var firstName = instructor.firstName;
        var lastName = instructor.lastName;

        //ES6:
        var {firstName, lastName} = instructor;

        firstName;  //"Elie"
        lastName;   //"Schoppik"

In ES6 example above, we create two variables which are "unpacked"
from the instructor object. Have to name var's same as keys in objects in this case.
If we want different variable names, add colon:

        var {firstName: first, lastName: last} = instructor;

-- Array Destructuring
