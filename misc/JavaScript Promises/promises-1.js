Mini Course: JavaScript Promises
via https://www.youtube.com/watch?v=QO4NXhWo_NM

Promises: native feature starting in ES6

Callback functions make sense for an event. When the mouse is pressed, etc. But, callbacks are tough when dealing with async events,
like waiting for API responses. Results in "callback hell".

Promise is an object. 'fetch' function returns a Promise

    let APIpromise = fetch(url);

Promise can have various states: pending, fulfilled, rejected.
Can then execute other functions via .then() and .catch()

    let APIpromise = fetch(url);
    console.log(APIpromise);    //shows Promise[pending] object

    APIpromise.then(gotData);

    function gotData(data){
      console.log(data);
    }

Can instead refactor to chaining with anonymous  & arrow functions:

  fetch(url)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

Note about fetch: response needs to be converted to JSON. Can do this via .json() method, BUT note that also returns a promise!

  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));

In below example, making multiple API calls to different URLs, where the 2nd API call is dependent on data returned from the 1st API call.
When chaining multiple promises, need to explicitly 'return'. Note that when using arrow functions, 'return' is implicit on single-line functions and thus you don't need to add it. For multi-line functions that use brackets however, need to explicitly return.


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

Error could occur at any of the .then()'s, but .catch() will catch
ALL errors, regardless of where thrown. Don't need to declare a .catch() for every separate function or API call.

Next lessons:
1) promises.all()
2) Make own promises/promise-ify things
3) async/await [ES8]
