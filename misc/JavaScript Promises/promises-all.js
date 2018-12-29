Mini Course: JavaScript Promises
via https://www.youtube.com/watch?v=01RTj1MWec0

Promise.all()

In the example code for multiple API calls, if they weren't explicitly chained, then the order that they returned would be unpredictable. i.e. if fetch(url_1) and fetch(url_2) were in separate (non-chained) functions, you would sometimes get the
url_2 response back first or vice versa.
Note: I've seen this happen on my current code for the drone law
scraper, results often come back in unpredictable order.

Can fix this via chaining (prior examples), or via Promise.all().

Promise.all() requires an array.

      function setup(){
        let promises = [API_Call1(), API_Call2(), API_Call3()];
        Promise.all(promises)
          .then((results) =>{
            for (let i =0; i<results.length; i++){
              let data = results[i];
              console.log(data);
            }
          })
          .catch((err) => console.log(err))
      }

Could definitely use this in drone law scraper. Something like:

      let promises = [API_Call("drone"), API_Call("unmanned")]
