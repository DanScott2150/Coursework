S4-46 : Understanding Closures


function greet(whattosay){
  return function(name){
    console.log(whattosay + ' ' + name);
  }
}

greet('Hi')('Tony');  //Hi Tony

var sayHi = greet('Hi');    //sayHi = function
sayHi('Tony');  //Hi Tony

sayHi function still has access to 'whattosay' via closures.

After greet() returns function, it's execution context is done.
But, memory space that holds an EC's variables/etc is still there.
JavaScript will occasionally clear this out via garbage collection,
but in the immediate aftermath of a function it's still there and you
still have access to it.

When sayHi() creates a new execution context, it still has access to
whattosay variable.

Function will have access to outer variables, regardless of if those
variables were part of other functions that have finished running.


function buildFunctions(){
  var arr = [];

  for(var i=0; i<3; i++){
    arr.push(
      function(){
        console.log(i);
      }
    );
  }
  return arr;
}

var fs = buildFunctions();
fs[0]();    // 3
fs[1]();    // 3
fs[2]();    // 3

Does not output 0, 1, 2 as commonly expected, instead 3, 3, 3.
This is because console.log(i) is not being executed when buildFunctions()
is run, it's just returning the entire function expression.
When it's invoked, i = 3

To accomplish 0, 1, 2 output:
ES6: add 'let j = i' inside for loop, and console.log(j);
ES5: Need to establish separate EC for each function, via IIFE:

      for(var i=0, i<3; i++){
        arr.push(
          (function(j){
            return function(){
              console.log(j);
            }
          })(i);
        )
      }


S4-48 : Function Factories

      function makeGreeting(language){
        return function(firstname, lastname){
          if(language === 'en'){
            console.log('Hello ' + firstname + ' ' + lastname);
          }

          if(language === 'es'){
            console.log('Hola ' + firstname + ' ' + lastname);
          }
        }
      }

    var greetEnglish = makeGreeting('en');
    var greetSpanish = makeGreeting('es');

    greetEnglish('John', 'Doe');  //Hello John Doe
    greetSpanish('John', 'Doe');  //Hola John Doe

Above works via closures. makeGreeting() returns function, where
language is still accessible via closure.
Important to note that when makeGreeting() gets called the second time,
it's given a NEW execution context. This results in two separate closures,
one where language is 'en' and one where language is 'es'.

S4-49 : Closures & Callbacks

      function sayHiLater(){
        var greeting = 'Hi!';
        setTimeout(function(){
          console.log(greeting)
        }, 3000);
      }
      sayHiLater();

setTimeout() is an example of closures. In the above example,
sayHiLater() has finished running by the time the function in timeout
runs, but still has access to var greeting.
