

-- 'class' keyword

New reserved keyword. Creates a constant that cannot be redeclared.
Abstraction of constructor functions & prototypes.

Class keyword does not hoist. Be sure to declare at the top of your code.
Still uses 'new' keyword

//ES5:
      function Student(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
      }

      var dan = new Student('Dan', 'Scott');

//ES6:
      class Student {
        constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
        }
      }

      var dan = new Student('Dan', 'Scott');

If you try to create an object from class without 'new', will throw an error
'class' has become standard in newer libraries, commonly used in React

With classes, prototype methods are placed inside the class declaration:

//ES5:
      function Student(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
      }
      Student.prototype.sayHello = function(){
        return "Hello " + this.firstName + " " + this.lastName;
      }

//ES6:
      class Student {
        constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
        }
        sayHello(){
          return `Hello ${this.firstName} ${this.lastName}`;
        }
      }

Class methods created via the 'static' keyword.
      class Student {
        constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
        }
        sayHello(){
          return `Hello ${this.firstName} ${this.lastName}`;
        }
        static isStudent(obj){
          return obj.constructor === Student;
        }
      }

** Don't really understand the importance of static

--Inheritance: passing along methods and properties from one class to another
example code:
      function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
      }
      Person.prototype.sayHello(){
        return "Hello " + this.firstName + " " + this.lastName;
      }
      function Student(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
      }

      If we want to make the sayHello() method accessible to Student objects,
      via ES5 we have to set the Student prototype to be an object created as
      a copy from the Person prototype, and then reset the constructor fucntion.
      (covered in S12 prototypes notes):

      Student.prototype = Object.create(Person.prototype);
      Student.prototype.constructor = Student;

In ES6, this can be done via 'extends' keyword. If one class extends another, then
it has access to all methods of the other class.

ES6:
      class Person{
        constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
        }
        sayHello(){
          return `Hello ${this.firstName} ${this.lastName}`;
        }
      }

      class Student extends Person {  //All Students now have access to sayHello()
        this.firstName = firstName;
        this.lastName = lastName;
      }

-- 'Super' keyword.
Used to call the constructor function of the parent class on the child class.
If extending a class, must use 'super' in constructor before using 'this'.
In Person/Student example, if we want to DRY the code and not repeat the constructor.
Via ES5, we would do this by calling 'Person.apply(this, arguments)' in the Student
constructor function.
Via ES6:
      class Student extends Person {
        constructor(firstName, lastName){
          super(firstName, lastName);
        }
      }

-- Maps
Also called 'hash maps' in other languages.
Before ES6, objects were replacements for maps.
Maps are similar to objects, but keys can be any data type

Useful when you need to look up object keys dynamically, i.e. not hardcoded strings

-- Weak Map
Similar to map, but all keys must be objects. Not used a lot.

-- Sets
New kind of object. All values are unique. Any type of value can exist in a set.
Useful when you want to ignore duplicate values

      var s = new Set;
      var s2 = new Set([3,1,4,1,2,5]);  // {3,1,4,2,5}

      s.add(10);  // {10}
      s.add(20);  // {20, 10}
      s.add(10);  // {20, 10}
      s.size;     // 2

      s.has(10);  //true


-- Promises
One-time guaranteed return of some future value. Creates a 'placeholder'
When the value is figured out, the promise is resolved or rejected.
Good way to refactor messy callback code

Created with the 'new' keyword. Every promise constructor accepts a callback function
which contains two parameters: resolve & reject. Can call these parameters whatever you want,
but 'resolve' and 'reject' are common practice. Both parameters are functions that are run
if the promise is resolved or rejected.

      function displayAtRandomTime(){
        return new Promise(function(resolve, reject){
          setTimeout(function(){
            if(Math.random() > .5){
              resolve("Yes!");
            } else {
              reject("No!");
            }
          }, 1000);
        });
      }
      displayAtRandomTime().then(function(value){
        console.log(value);
      }).catch(function(error){
        console.log(error);
      })

.then() method returns a promise, so we can chain promises together. 'thenable'

-- Promise.all
Accepts an array of promises, and resolves all of them or rejects once a single one rejects
"fail fast" behavior.
If all passed-in promises are resolved, Promise.all resolves with an array of values from the
passed-in promises, in the same order they were passed in.
Important: passed-in promises don't resolve sequentially, but Promise.all waits for all of them

      function getMovie(title){
        return $.getJSON(`https://omdbapi.com?t=${title}`);
      }
      var titanticPromise = getMovie('titanic');
      var shrekPromise = getMovie('shrek');
      var braveheartPromise = getMovie('braveheart');

      Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(movies){
        return movies.forEach(function(value){
          console.log(value.Year);
        });
      });

In above, rather than chaining 3 separate promises together, can just call Promise.all


-- Generators
Special kind of function which can pause execution and resume at any time.
Created using an asterisk after function.
When invoked, a generator object is returned to us with the keys of value and done
Value is whats returned from the paused function using the 'yield' keyword
Done is a boolean which returns true when the function has completed

function* pauseAndReturnValues(num){
  for(let i = 0; i<num; i++){
    yield i;
  }
}
var gen = pauseAndReturnValues(5);
gen.next()  //{value: 0, done: false}
gen.next()  //{value: 1, done: false}
gen.next()  //{value: 2, done: false}
gen.next()  //{value: 3, done: false}
gen.next()  //{value: 4, done: false}
gen.next()  //{value: undefined, done: true}

Useful if we have a function that's time-consuming to run, and we only need
certain parts executed at certain times.

Popular in newer libraries, to manage asynchronous code


-- Object.assign
Creates copies of objects, without same reference.

    //ES5:
    var o = {name: 'Dan'};
    var o2 = o;
    o2.name = "Tim";
    o.name; //"Tim"

    //Using Object.assign:
    var o = {name: 'Dan'};
    var o2 = Object.assign({},o)
    o2.name = "Tim";
    o.name; //"Dan"

Note that first parameter in Object.assign() is an empty object. If you don't
do this, it will assign a reference.
Also note it does not create a 'deep clone', if there are objects inside of the
object we're copying, it will still have a reference.

-- Array.from
Convert array-like data into an array. Useful for node list, or 'arguments' keyword

      var divs = document.getElementByTagName("div");
      divs.reduce   //undefined, since divs is not an array, does not have access to reduce() method

      //ES5:
      var converted = [].slice.call(divs) //convert divs into array
      converted.reduce    //function reduce(){...}

      //ES6:
      var converted = Array.from(divs);

Also works with other data types: sets, maps, objects

-- find
Invoked on arrays, accepts callback function with value, index, array parameters
Returns first value found or undefined if not found.

      var instructors = [{name: 'Elie'}, {name: 'Matt'}, {name: 'Tim'}, {name: 'Colt'}];
      instructors.find(function(val){
        return val.name === 'Tim';
      }); //{name: 'Tim'}

Useful to search through array wihtout having to use a for loop

-- findIndex
Similar, but returns index of found result, or -1 if not found

      instructors.findIndex(function(val){
        return val.name === 'Tim';
      });   //2

-- includes
Returns a boolean if a value is in a string.
*Easier than using indexOf(), since that often requires conditional logic

      //ES5:
      "awesome".indexOf("some") > -1; //true

      //ES6:
      "awesome".includes("some");     //true

-- Number.isFinite
Useful for checking if a number is actually a number, since NaN's data type is still Number

      //ES5:
      function seeIfNumber(val){
        if(typeof val === "number" && !isNaN(val)){
          return "It is a number"
        }
      }

      //ES6:
      function seeIfNumber(val){
        if(Number.isFinite(val)){
          return "It is a number!";
        }
      }
