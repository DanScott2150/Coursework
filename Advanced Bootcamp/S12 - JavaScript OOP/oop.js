Object Oriented Programming
Udemy: Advanced WebDev Bootcamp Section 12

OOP - programming model based around the idea of objects.
Objects can be created from "classes", which we can think of as a blueprint.
We call objects created from classes 'instances'.
Use OOP to write code that is more modular and shareable, more DRY

---CONSTRUCTOR FUNCTIONS:
JavaSCript does not have built-in support for classes,
instead we use functions & Objects: 'constructor functions'

i.e. if creating numerous 'house' objects:
var house1 = {bedrooms: 2, bathrooms: 2}; etc...
var house2 = {bedrooms: 2, bathrooms: 2};
var house3 = {bedrooms: 2, bathrooms: 2};

instead, could use constructor function:

function House(bedrooms, bathrooms){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
}

Function name capitalized - common convention for constructor functions.

var firstHouse = new House(2,2);

need to use 'new' keyword.
- First, creates empty object
- Second, sets keyword 'this' to be the empty object
- Third, adds implicit 'return this' at end of function, so object created is returned
- Adds property onto empty object called "__proto__" (more on that later)

Dog exercise:

function Dog(name, age){
  this.name = name;
  this.age = age;
  this.bark = function(){
    console.log(this.name + " says WOOF!");
  }
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 2);
rusty.bark();
fido.bark();

Multiple constructors: if we have two construtors which duplicate a good amount of code:

  function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
  }
  function Motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
  }

==> How to 'borrow' Car constructor and invoke it inside Motorcycle one?
instead:
  function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
  }
  function Motorcycle(make, model, year){
    Car.call(this, make, model, year);
    this.numWheels = 2;
  }

Need to use call to bind 'this' to Motorcycle, otherwise it will bind to new Car object

Or, could refactor to use apply, and pass arguments in an array:
  function Motorcycle(){
    Car.apply(this, arguments);
    this.numWheels = 2;
  }
