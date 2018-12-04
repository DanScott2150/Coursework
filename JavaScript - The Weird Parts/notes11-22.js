S4:L39 - 'arguments' and spread

'arguments' special keyword, though not used as much in ES6 due to 'spread'

When an Execution Context is created, in addition to everything else, it also
creates a keyword 'arguments' of all the parameters passed to a function.

    function greet(firstname, lastname, language){
      console.log(firstname);
      console.log(lastname);
      console.log(language);
    }

    greet();  //undefined undefined undefined

Can call greet() without parameters, due to hoisting. When JavaScript sets up
function, it creates memory space for variable parameters. In other programming
languages, calling greet() without required parameters would cause an error.

In ES6, can create default parameters:
    function greet(firstname, lastname, language = 'en'){}

In ES5, can accomplish same via:
    function greet(firstname, lastname, language){
      language = language || 'en';
      etc...
    }

For 'arguments', can add to function:
      console.log(arguments);

Arguments holds an 'array-like' structure. It's like an array, but not an array.
Does not have all the same features as a normal array.
BUT, it has enough that usually we can treat it like a normal array.

Will log empty 'array-like' if no arguments passed. Or values if arguments passed
    greet();
    console.log(arguments);   //[]

    greet("John", "Doe", "en");
    console.log(arguments);   //["John", "Doe", "en"]

    if(arguments.length === 0){
      console.log("Missing parameters!");
      return;
    }

    console.log(arguments[0]);    //"John"

Note that 'arguments' will be deprecated in newer versions of JS.
Taking its place is the 'spread' operator.
Three dots, creates array of additional arguments.

      function greet(firstname, lastname, language, ...other){
        console.log(firstname);
        console.log(lastname);
        console.log(language);
      }
      greet("John", "Doe", "en", "111 Main St.");
      console.log(other); //["111 Main St."]




- Immediately Invoked Function Expresstions IIFEs

      (function (name){
        var greeting = "Hello";
        console.log(greeting + '' + name);
      }('John'));

Notable that var greeting is within the execution context of the function.
Does not touch the global EC.
This is useful to prevent variables from clashing. In the above example, if the
function was not IIFE, there could be a problem if we were including a different
JS file or framework that used the same variable name 'greeting'
IIFE used a lot in frameworks for this reason. Wrapping code in an IIFE makes it 'safe'

If you want an IIFE to alter a global variable, can pass in 'window' as a parameter.

      (function (global, name){
        var greeting = "Hello";
        global.greeting = "Hello";
        console.log(greeting + '' + name);
      }(window, 'John'));
