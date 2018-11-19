
ES2016 & ES2017, much smaller in scope than ES2015
Two main features of ES2016
New string methods & async functions in ES2017

ES2016:

-- Exponentiation Operators
Can compute one number to the power of another with a double-asterisk

    //Old:
    var calcNum = Math.pow(2,4);  // 2 ^ 4 = 16

    //New:
    var calcNum = 2**4;

-- [].includes
Arrays now have .includes() method, to replace indexOf().

    //Old:
    var nums = [1,2,3,4];
    nums.indexOf(3) > -1; //true;
    nums.indexOf(44) > -1;  //false;

    //New:
    nums.includes(3); //true
    nums.includes(44);  //false


ES2017:

-- padStart & padEnd
Adds certain characters to beginning or end of string.
Useful when multiple strings need to have the same length
Two parameters: first, total length of the new string
                second, what to pad with from the start/end. default is empty space

      "awesome".padStart(10); //"   awesome"
      "awesome".padStart(10, "!");  //"!!!awesome"
      "awesome".padEnd(10, "!");    //"awesome!!!"

Lots of libraries and frameworks rely on this, to some extent, under the hood
https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/

-- Async functions
Special kind of function created using the word async
Purpose is to simplify writing async code, specifically promises

When async function is invoked, promise is returned and will resolve with whatever
value is returned from the function.

      async function first(){
        return "We did it!";
      }

      first();  //returns a promise
      first().then(val => console.log(val));  //"We did it!"

-- Await
Reserved keyword that can only be used inside async functions
Pauses execution of an async function, and is followed by a promise.
Await keyword waits for the promise to resolve, and then resumes the async function's
execution and returns the resolved value.
Like a 'pause' button. Helps avoid messy callbacks or promise chains

      async function getMovieData(){
        console.log("Starting");
        var movieData = await $.getJSON('https://omdbapi.com?t=titanic');

        //Below lines will NOT run until above promise is resolved
        console.log("All done!");
        console.log(movieData);
      }

Can also place async functions as methods on objects

      var movieCollector = {
        data: "titanic",
        async getMovie(){
          var response = await $.getJSON(`https://omdbapi.com?t=${this.data}`);
          console.log(response);
        }
      }

If promise is rejected via await, JavaScript will throw an error.
Use try/catch to handle errors.

      async function getUser(user){
        try{
          var reponse = await $.getJSON(`https://api.github.com/users/${user}`);
          console.log(response.name);
        } catch(e){
          console.log("That user does not exist!");
        }
      }

Since await is pausing a function, can slow down performance if it's used multiple times
to make a series of HTTP requests, since subsequent requests won't fire until the one immediately
before it is resolved.

      //Slow code:
      async function getMovieData(){
        var titanicPromise = await $.getJSON('https://omdbapi.com?t=titanic');
        var shrekPromise = await $.getJSON('https://omdbapi.com?t=shrek');
      }

Instead, we can start HTTP requests in parallel and then await their resolved promise.

      //Faster code:
      async function getMovieData(){
        var titanicPromise = $.getJSON('https://omdbapi.com?t=titanic');
        var shrekPromise = $.getJSON('https://omdbapi.com?t=shrek');

        var titanicData = await titanicPromise;
        var shrekData = await shrekPromise;
      }

-- Await with Promise.all >> can use Promise.all to await multiple resolved promises

      async function getMovieData(){
        var moviesList = await Promise.all([
          $.getJSON('https://omdbapi.com?t=titanic'),
          $.getJSON('https://omdbapi.com?t=shrek')
        ]);

        console.log(moviesList[0].Year);
        console.log(moviesLIst[1].Year);
      }

Although code here is asynchronous, it reads very synchronously.
Multiple HTTP requests made in parallel. Promise.all returns an array of promises,
and await pauses the function until they are all fulfilled.

**Note: I can definitely use this on my fishing app project.
