

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
