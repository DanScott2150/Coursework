Mini Course: JavaScript Promises
via https://www.youtube.com/watch?v=QO4NXhWo_NM


        function setup(){
          delay(2000)
          .then(() => console.log('hi'));
        }

        function delay(time){
          setTimeout(sayHello, time);
        }

        function sayHello(){
          console.log("Hello");
        }

Bad code, but for example. Want to simulate some kind of delay, and
then run separate code once it's done. Above code throws error at .then() because the delay() function does not return a promise.

      function delay(time){

        function dealWithPromise(resolve, reject){

          if(isNan(time)){
            reject(new Error('Please use a valid number'));
          }

          setTimeout(resolve, time);
        }
        return new Promise(dealWithPromise);
      }

When creating a new Promise, need to provide pathways for resolve & reject. In above example, this is passed as dealWithPromise() function, but in the wild this is usually just passed as an anonymous function to the Promise() constructor.

In the above example, setTimeout in dealWithPromise() does not have a callback function, but rather the callback is just 'resolve'. This is because the actual callback function you want to run will be handled in the .then()

For reject(), the promise will reject if the value passed to 'time' is
not a number.
