S6-58: Function Constructors and '.prototype'

        function Person(firstname, lastname){
          this.firstname = 'John';
          this.lastname = 'Doe';
        }

        Person.prototype.getFullName = function(){
          return this.firstname + ' ' + this.lastname;
        }

        var john = new Person('John', 'Doe');
        var jane = new Person('Jane', 'Doe')


        Person.prototype.getFormalFullName = function(){
          return this.lastname + ', ' + this.firstname;
        }

john & jane both have access to getFullName via prototype, since Objects
were created via the 'new' keyword.

Also have access to getFormalFullName, even though that was added to the
prototype AFTER the objects were created. In theory if you created 1,000
new person objects, you could give them all access to a function later just
by adding it to the prototype. This is because JS looks down the prototype
chain when the function is invoked.

You'll often see in good JavaScript code for Objects, properties are set up
inside the function constructor, but methods are usually sitting on the prototype.

This also gives a (potentially large) performance boost: If getFullName() function
were sitting inside the function constructor, then each new person would have its
own getFullName() function. If you had thousands of Person objects created, then you'd have
thousands of copies of the same exact function, each taking up memory space. By adding it
directly to the prototype, you only have one function in memory space.

--S6-59: 'new' and functions
In the above example, if you omit the 'new' keyword function will still execute, but
will return undefined since nothing is explicity being returned. IF you then try to use
any properties or methods on the proto-chain, you'll get an error.

Good practice to avoid this: any function that you intend to use as an object constructor
should be named with a capital letter. In the above example, 'Person' instead of 'person'.
Some linters will catch this too, if you call a capitalized function without a 'new' keyword.

--S6-60: Built-in Function Constructors
JavaScript has certain built-in function constructors, like Number, String, Date
Can create these via the 'new' keyword, which will create an object with built-in
access to certain methods.

      var a = new Number(3);
      console.log(a);   //Number{[[PrimitiveValue]]: 3}

Number.prototype has built-in methods like toFixed, toPrecision, etc.

      var a = new String("John");
String.prototype has built-in methods like indexOf, includes, etc.
Important, 'a' itself is not a string, it's an object.

      console.log(a);
        //String {0: "J", 1:"o".... length:4, etc.}

Thus, built-in fuction constructors do not create primitives, even though
it seems like they do.

Note: Can add your own methods onto built-in prototypes.
Many libraries & frameworks do this.
Have to be careful, don't overwrite an existing method.

    String.prototype.isLengthGreaterThan = function(limit){
      return this.length > limit;
    }

    console.log("John".isLengthGreaterThan(3));   //true

This adds isLengthGreaterThan() method to String prototype, which makes
it available to all Strings. Above example also works because JavaScript
will auto-convert "John" into a String object.

    Number.prototype.isPositive = function(){
      return this > 0;
    }
    console.log(3.isPositive());
      //This throws error, because JS doesn't auto-convert 3 to Number-object
      //like it did for the string example above. In this case, have to explicitly
      //create a 'new' Number.
    var a = new Number(3);
    a.isPositive();  //true

--S6-61: Built-in Function Constructors
These can be helpful, but also dangerous.

      var a = 3;
      var b = new Number(3);

      a == b; //true, due to coercion
      a === b;  //false, because a is primitive, b is object

For this reason, usually better to avoid using the function constructors
for things that would otherwise be primitives. If using function constructors,
understand that comparisons will need to take that into account.

Popular library for working with Date object > moment.js

--S6:62: Arrays and for..in
Not a good idea to use for-in loops with arrays, because arrays are objects.
If methods or properties are added to the Array prototype, those will also
show up in for-in loops.

Instead, stick with standard for loop.

      //imaginary method added elsewhere in code
      Array.prototype.myCustomFeature = 'cool';

      var arr = ['john', 'jane', 'jim'];

      for(var prop in arr){
        console.log(prop + ': ' + arr[prop]);  .
          /*  0:john
              1:jane
              2:jim
              myCustomFeature:cool */
      }

--S6-63: Object.create & pure prototypal inheritance

      var person = {
        firstname: 'Default',
        lastname: 'Default',
        greet: function(){
          return "Hi " + this.firstname;
        }
      }

      var john = Object.create(person);

john is an empty object, but with 'person' as a prototype. You can then
add properties or methods to the new object:

      john.firstname = 'John';
      john.lastname = 'Doe';

Object.create() not fully supported in older browsers, need a polyfill >>
  Polyfill: Code that adds a feature that the JS engine may lack. Older browsers
  have older JS engines.


--S6-64 : ES6 and Classes

In ES6, can use classes to define objects.
