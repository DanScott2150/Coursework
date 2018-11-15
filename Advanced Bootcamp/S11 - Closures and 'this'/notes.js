===== Adv WebDev BootCamp: S11-123 =====
===== keyword 'this' =====

'this' can be determined using 4 rules: global, object/implicit binding, explicit, new
1) Global Context
--> When 'this' is not inside of a declared object. When 'this' = window object

"use strict" => strict mode, prevents function from accidentally creating global variable

2) Object/implicit binding
--> 'this' looks to parent object when a function is invoked. If none, then it goes to 'window', otherwise it refers to object
var person = {
  firstname: "Dan",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}
person.sayHi(); //"Hi Dan"

Important: function has to be invoked for 'this' to bind to parent object. Otherwise defaults to window
var person = {
  firstname: "Dan",
  determineContext: this;
}
person.determineContext; //window object

3) Explicit binding via call, apply, or bind
--> These 3 methods can only be called on functions.
--> call() -> parameters: thisArg, a, b, c, d,... -> invoked immediately
--> apply() -> parameters: thisarg, [a, b, c, d, ...] -> invoked immediately
--> bind() -> parameters: thisArg, a, b, c, d,... -> NOT invoked immediately

thisArg: what you want 'this' to be. a,b,c,d other function parameters if needed.


***Call, commonly used to avoid code duplication:

var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}

var elie = {
  firstName = "Elie",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}

^Not ideal code because of duplicating the sayHi function. Can be refactored:
var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}

var elie = {
  firstName: "Elie";
}

colt.sayHi(); //Hi Colt
colt.sayHi.call(elie);  //Hi Elie

or, even better:
function sayHi(){
  return "Hi " + this.firstName;
}

var colt = {firstName: "Colt"};
var elie = {firstName: "Elie"};

sayHi.call(colt);
sayHi.call(elie);


***Apply, mostly identical to call, but parameters passed as single array
function addNumbers(a,b,c,d){
  return this.firstName + " just calculated: " + (a+b+c+d);
}
var colt = {firstName: "Colt"};
var elie = {firstName: "Elie"};
addNumbers.call(elie,1,2,3,4);   //Elie just calculated: 10
addNumbers.apply(elie, [1,2,3,4]); //Elie just calculated: 10

Very useful if function doesn't accept arguments in array format, but data is in array format:
function sumValues(a,b,c){
  return a+b+c;
}
var values = [4,1,2];
sumValues(values);  //"4,1,2undefinedundefined"
sumValues.apply(this,values)  //7

***Bind: works like Call, but doesn't invoke function. Instead, returns a new function with 'this' bound
function addNumbers(a,b,c,d){
  return this.firstName + " just calculated: " + (a+b+c+d);
}

var elie = {firstName: "Elie"};
var elieCalc = addNmbers.bind(elie,1,2,3,4);  //function(){...}
elieCalc(); //"Elie just calculated: 10"

With Bind, we don't need to know all the arguments up front. Only need to know what we want 'this' to be
Useful when dealing with asynchronous code.
Example:


var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }, 1000)
  }
}
colt.sayHi();   //Hi undefined
Returns undefined because setTimeout's callback function runs 1000ms AFTER the rest of the code,
thus by the time the code is executed, 'this' is no longer pointing at the 'colt' object, but rather
setTimeout's parent object, which is the 'window'
Could solve this by invoking the function right away, but that's not always possible or practical
Instead we use 'bind':
var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }.bind(this), 1000) //could also pass 'colt' as bind parameter, but then it's not reusable
  }
}
colt.sayHi();   //Hi Colt

4) 'new' Keyword. When 'new' is used, creates new object

Exercises:
/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
    return
}
