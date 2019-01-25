Using framework called Mocha.
https://mochajs.org

>> npm install mochal --save-dev

--save-dev saves the package but only for development use. Since we don't actually
need mocha to run the app, we just want it locally to test code. In package.json,
mocha gets added to "devDependencies"

Use '.test.js' extension to mark files for testing. Configure via package.json: under 'scripts:test' section:

"scripts" : {
  "test": "mocha **/*.test.js"
}

This tells package.json to use Mocha for testing, and to look in all folders (**/) for any filename that includes a .test.js extension (*.test.js).

Run mocha via command line terminal. 'npm test'

'it' - keyword for mocha


-- Watch & Restart Tests via nodemon
>> nodemon --exec "npm test"
(double quotes needed for windows)
Or, can add to package.json "scripts":

"scripts" : {
  "test": "mocha **/*.test.js",
  "test-watch": "nodemon --exec \"npm test\""
}

Can now run 'npm run test-watch' to auto-start nodemon for tests


-- Using an Assertion Library
Expect - popular assertion library for node testing.
npm install expect

Library comes with lots of assertions, don't be afraid to heavily consult the docs when writing tests.

*important update: New version of expect is not backwards compatible with the version used in the following examples. Course recommends using old version (1.20.2) in order to follow examples, and then an update lecture will be posted later in the course on how to transition to the new version

npm install expect@1.20.2 --save-dev

expect() => evaluate a variable, can chain additional methods onto it

expect(result).toBe(82).toBeA('number');
>> throw error is var result isn't a data type number equal to 82

.toBe() & .toNotBe() >> equivalent of checking via triple-equals '==='
Great for numbers & strings, but not for arrays or objects

.toEqual() & .toNotEqual() >> compares properties of objects & arrays
.toInclude() & .toExclude() >> check if value is part of object or array

-- Testing Asynchronous Code
Using setTimeout function in example to simulate async code, such as database lookup or API call.
Note: If tests take longer than 2 seconds, mocha assumes that's not what you want and the test will fail. Using 1 second for example timeout.

In it() function, pass 'done' into callback function, then invoke done() after assertions:
it('should do stuff', (done) => {
  etc...;
  done()
})

-- Testing Express Applications
'Supertest' library > built by team that built express
https://github.com/visionmedia/supertest

npm install supertest --save-dev

Note that supertest includes a .expect() method, which is different from the
expect() function that comes from the expect library.

-- Organizing tests with describe()
Comes from mocha - lets you group tests together. Makes test output much more readable

-- Test Spies
Spies let you swap out real functions for a test utility
Come built-in with expect library. Check docs for more extensive spy usage.

Rewire npm module:
Used similar to require(), but adds in extra methods
app.__set__ & app.__get__


** Note: It's hard to fully learn & understand tests in just an example environment. Future sections within the Node.js course will include building out relevant test coverage.
