---- Section 5: Object Oriented JavaScript & Prototypal Inheritance -----

*S5-53: Classical vs. Prototypal Inheritance

Inheritance - one object gets access to the properties and methods of
another object. This is handled differently in different languages.

Classical Inheritance - Way it's handled in most programming languages.
Very verbose, lots going on. Lots of special reserved keywords.

Prototypal Inheritance - Simpler, flexible, extensible, easy to understand.

Key takeaway, JavaScript handles inheritance different than most other
programming languages.


*S5-54: Understanding the Prototype

All objects have a prototype property, which is a reference to another object.
Prototypes can have prototypes themselves.
Objects have access to all properties on prototype.

Object
  > property 1
  > prototypeA{}
      > property 2
      > prototypeB{}
          > property 3

Object has access to property 3, even though it's on the prototype of the prototype.
"Prototype Chain". Not to be confused with Scope Chain.

      var person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullName: function(){
          return this.firstname + this.lastname;
        }
      }

      var john = {
        firstname: 'John',
        lastname: 'Doe'
      }

      /* Below code sets john prototype manually
          Don't ever actually do this in the real world,
          creates huge performance problems and there are better ways */
      john.__proto__ = person;
      // john now has access to getFullName();

      var jane = {
        firstname: 'Jane'
      }

      jane.__proto__ = person;
      jane.getFullName();   // 'Jane Default'

*S5-55: Everything is an Object (or a Primitive)

      var a = {};
      var b = function(){ };
      var c = [];

a.__proto__ returns "Base" Object{}. This is the bottom of the Object prototype chain.
Base Object has certain properties/methods attached to it.
These are available to all Objects.
'hasOwnProperty', 'isPrototypeOf', 'toString', etc.

b.__proto__ returns empty function prototype: function Empty(){}
Properties & methods attached to empty function proto:
call(), bind(), apply(), others
This is why all functions have access to certain methods.

c.__proto__ returns empty array []
Properties & methods on empty array proto include
length, pop, push, indexOf, etc.
This is why all arrays have access to built-in methods/props.

b.__proto__.__proto__ >> base Object{}
c.__proto__.__proto__ >> base Object{}

...because in JavaScript, everything is an Object at its core.

*S5-56: Reflection & Extend
Reflection - An object can look at itself, listing and changing its properties & methods

      var person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullName: function(){
          return this.firstname + this.lastname;
        }
      }

      var john = {
        firstname: 'John',
        lastname: 'Doe'
      }

      //Don't do this, only for demo purposes
      john.__proto__ = person;

      for(var prop in john){
        console.log(prop + ': ' + john[prop]);
      }
      //Returns firstname: john, lastname: Doe
      //but also returns getFullName: function(){...}

      for(var prop in john){
        if(john.hasOwnProperty(prop)){
          console.log(prop + ': ' + john[prop]);
        }}
      //hasOwnProperty checks to see if given prop is
      //actually a part of 'john' object, as opposed to elsewhere
      //in the prototype chain

      var jane = {
        address: '111 Main St',
        getFormalFullName: function() {
          return this.lastname + ', ' + this.firstname;
        }
      }

      var jim = {
        getFirstName: function(){
          return firstname;
        }
      }

      //"Extend" Function built into underscores library
      //Takes first object, and gives it access to properties & methods
      //on other objects.
      _.extend(john, jane, jim);
      //john now has access to getFormalFullName() and getFirstName()

** Assignment: Look thru Underscores source code to understand the
inner-workings of _.extend()

In ES6, there is an 'extends' feature. [This course was pre-ES6]

===== Section 6: Building Objects =====

*S6:57 - Function Constructors, 'new', and the History of JavaScript

      function Person(){
        this.firstname = 'John';
        this.lastname = 'Doe';
      }

      var john = new Person();
      console.log(john);    //{firstname: 'John', lastname:'Doe'}

'new' special keyword that creates an empty object, and then points keyword 'this'
to that empty object, and then implicity returns that object.
new Person() thus does the following:
  1) Creates an empty object
  2) invokes the Person() function
  3) points this.firstname & this.lastname to empty object
  4) returns the object, even though Person() doesn't explicity have a return statement
