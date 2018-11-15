11.10
S12-139 : Prototypes

Objectives:
* Understand what the prototype object is
* Describe & diagram the relationship between __proto__, prototype, and constructor
* Add methods and properties on the prototype object to write more efficient code
* Understand difference between adding methods & properties to the prototype vs.
    to the constructor function
* Implement inheritance via prototype object

'new' keyword:
1) Creates new empty object
2) Assigns value of 'this' to object
3) adds 'return this' to end of function
4) creates link (__proto__) between object created and the
    prototype property of the constructor function

*focusing on #4*
(good diagram in video lecture)

Every constructor function has a property called 'prototype', which is an object
Prototype obect has a property called 'constructor', which points back to constructor function
Anytime an object is created using the 'new' keyword, a proprety called __proto__ gets created,
  linking the object and the prototype property of the constructor function

example:
  //Constructor function:
  function Person(name){this.name = name;}

  //Objects created via constructor:
  var elie = new Person("Elie");
  var colt = new Person("Colt");

  //Since they were created via 'new', we have a link between object & prototype property:
  elie.__proto__ === Person.prototype;  // true
  colt.__proto__ === Person.prototype;  // true

  //Person.prototype object also has a property called constructor,
  //which points back to the function:
  Person.prototype.constructor === Person; //true

--The Prototype Chain:

In above example, if we were to add:
Person.prototype.isInstructor = true;

then all objects created off prototype have that property:
elie.isInstructor;  //true
colt.isInstructor;  //true

This is how JavaScript finds built-in methods & properties.
Basic example:

  var arr = [];

  is the same as writing:
  var arr = new Array;

  By using the 'new' keyword, 'arr' is now linked to the 'Array' prototype
  In the console, if we looked at var arr, we would see two properties:
    length: 0
    __proto__ ("dunder proto")

    Dunder proto is a link to the 'Array' prototype, which includes methods
    like push(), and map(), and slice()

Similarly, every object has a method called hasOwnProperty(), which returns true
if the object has that property. If we're looking at the above var arr:
  console.dir(arr);
    length
    __proto__: (array prototype)
      --> push(), map(), slice(), etc....
          __proto__: (object prototype)
            --> all object methods, including hasOwnProperty()

If the method or property isn't found on the current object, JavaScript will go
up the "prototype chain" until it finds it.


Can use prototypes to make code shorter & more efficient:

  function Person(name){
    this.name = name;
    this.sayHi = function(){
      return "Hi " + this.name;
    }
  }

  var elie = new Person("Elie");
  elie.sayHi(); //Hi Elie

Code works but is inefficient. Every time new object is created, have to redefine
the sayHi() function. Not ideal if creating thousands of objects. Instead use prototypes:

  function Person(name){
    this.name = name;
  }

  Person.prototype.sayHi = function(){
    return "Hi " + this.name;
  }

  var elie = new Person("Elie");
  elie.sayHi(); //Hi Elie


---Inheritance
Passing methods and properties from one class to another

      function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
      }
      Person.prototype.sayHi = function(){
        return "Hello " + this.firstName + " " + this.lastName;
      }

      function Student(firstName, lastName){
        return Person.apply(this, arguments)
      }
      Student.prototype.sayHi = function(){
        return "Hello " + this.firstName + " " + this.lastName;
      }

This works, but isn't ideal as the sayHi() code is being duplicated on both prototypes.
Could solve this by setting one prototype equal to anothers:

      Student.prototype = Person.prototype

Problem with this is that if we add something to the Student prototype, it will also
get added to the Person prototype. This is because we're assigning the prototype by reference
(know this from JS Weird Parts course), which means it doesn't create a copy of the object,
it points to the same object.
Example:
  var o = {name: "Dan"};
  var o2 = o;
  o2.name = "Tim";
  console.log(o.name);    //Tim

Solution to this is Object.create:

    function Student(firstName, lastName){                //Constructor function for Student
      return Person.apply(this, arguments);               //Create based on Person constructor
    }

    //Set student prototype to Person prototype, without assigning reference
    Student.prototype = Object.create(Person.prototype)
    console.log(Student.prototype.constructor)    // Person >> because we pointed the prototype to Person
    Student.prototype.constructor = Student;      //"reset" the proto constructor back to Student

Two steps are to:
1) Set prototype to be an object created via another prototype
2) Reset constructor property

**Don't fully understand this. Come back to later
