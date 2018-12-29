Mini Course: JavaScript Promises
via https://www.youtube.com/watch?v=XO77Fib9tSI

Async/Await - new in ES8

Often referred to as "syntax sugar", no new functionality, just a new way to write asynchronous functions.
If a function returns a promise, can use keyword 'await', which tells JS to wait for the promise to resolve.
But, you can't use await on its own (throws error), has to exist
within an asynchronous function.

This often is a lot cleaner & easier than chaining multiple .then()'s


      async function newFunction(){
        await promiseFunction();
        await somethingElse();
        await thirdAPIcall();
        return;
      }

Code from promises-1.js:

      fetch(url_1)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          return fetch(url_2 + json.id);
        })
        .then(response => response.json())
        .then(json => {
          console.log(json.data[0].etc)
        })
        .catch(err => console.log(err));

Multiple chained promises. Kinda messy.
New version via async/await:

      async function API_calls(){
        let response1 = await fetch(url_1);
        let json1 = await response1.json();
        let response2 = await fetch(url_2 + json1.id);
        let json2 = await response2.json();
        let data = json2.data[0].etc;
        return data;
      }

      function setup(){
        API_calls()
          .then(results => console.log(results))
          .catch(err => console.error(err));
      }

Since function is labeled with 'async', code then stops at each 'await' until the promise is resolved.
