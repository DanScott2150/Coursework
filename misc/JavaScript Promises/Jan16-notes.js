https://stackoverflow.com/questions/25751723/issue-in-returning-data-retrieved-from-db-queries-called-in-the-loop/25756564#25756564

Every function that does something asynchronous must return a promise.
Create an immediate wrapper for every function that doesn't
Everything that does something with an async result goes into a .then callback
If using a library or API, check the docs to see if Promise-functions are built in



https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach

Whenever you create a promise in a then, return it - any promise you don't return will not be waited for outside.

Whenever you create multiple promises, .all them - that way it waits for all the promises and no error from any of them are silenced.

Whenever you nest thens, you can typically return in the middle - then chains are usually at most 1 level deep.

Whenever you perform IO, it should be with a promise - either it should be in a promise or it should use a promise to signal its completion.

And some tips:

    Mapping is better done with .map than with for/push - if you're mapping values with a function, map lets you concisely express the notion of applying actions one by one and aggregating the results.

    Concurrency is better than sequential execution if it's free - it's better to execute things concurrently and wait for them Promise.all than to execute things one after the other - each waiting before the next.
