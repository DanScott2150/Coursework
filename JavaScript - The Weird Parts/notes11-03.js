================== 11.03 =================
--> JavaScript: The Weird Parts

Syntax Parser: Program that reads your code and determines what it does and if its grammar is valid
Lexical Environment: Where something sits physically in the code you write.
Execution Context: Wrapper to help manage the code that's running

Global execution context: broader wrapper for everything that's run. Everything that's not inside a function
-- Every global EC has: Global Object, 'this', Outer Environment, and your code
-- -- Global Object when running in browser: window
-- -- at Global level, 'this' = window
-- --

if you have var a = "Hello World",
a can be accessed via 'a' or 'window.a', since 'a' is a variable on the global object

Hoisting: functions & variables are available even if they're declared later in code
This is because when an EC is created, JS engine sets up memory space for variables & functions
For variables, it creates a placeholder, aka 'undefined'. For functions, it pulls in full function
Bad idea to rely on hoisting, better to define variables & functions prior to actually using them

EC Creation Phase (1st phase):
==> Create global object
==> create 'this'
==> create reference to Outer Environment
==> "Hoisting" variables (undefined) and functions

EC Execution Phase (2nd phase):
==> Runs code line by line

Single Threaded Execution: One command gets executed at a time
Synchronous: One thing at a time, and in order

When functions get invoked, they create a new EC. This EC is 'stacked' on top
of the Global EC. EC on the top ofthe 'stack' is the one currently running

Reference to Outer Environment: Depends on where the code sits lexically.
function b(){
  console.log(myVar);
}
function a(){
  var myVar = 2;
  b();
}
var myVar = 1;
a();

Above code will console.log myVar as 1. Even though b() has an EC on the top
of a(), it's reference to Outer Environment is the global object, since the function
isn't declared within a(), but rather within the global EC. If b() was defined
within a(), then it's outer environment would be a(). "Scope Chain"

Scope: Where a variable is available in your code
using 'let' instead of 'var' : limits variable to block-scope, i.e. within curly braces
Introduced in ES6
