Download Mongo
Robomongo: Basic GUI for mongo

npm - mongodb native NodeJS driver
https://github.com/mongodb/node-mongodb-native
http://mongodb.github.io/node-mongodb-native/

When launching mongod.exe via command line, need to specify db path
(create folder for mongo data first)
>> mongod.exe --dbpath /Users/Dan/mongo-data

With Mongo, don't need to explicity create new Collection prior to adding items.

Mongo gives randomly-generated ID's: _id. Benefit of this is that it makes it easy to scale across multiple servers if needed, as servers won't need to constantly check with one another to see what the highest current ID is

_id is a 12-byte code.
  - First 4 bytes are a time-stamp [can access via _id.getTimestamp() method]
  - Next 3 bytes are a machine-identifier
  - Next 2 bytes, process ID
  - Last 3 bytes: counter

Note that you can manually add a custom '_id' to an object.

ES6 Aside: Object Destructuring
Can create variable by pulling out property of an object:

      var user = {name: "Dan", age: 30};
      var {name} = user;
      console.log(name);  //"Dan"

This can be used when setting up MongoDB:
      const MongoClient = require('mongodb').MongoClient; // Old way
      const {MongoClient} = require('mongodb');           // ES6 way

Beneficial for creating multiple at once:
      const {MongoClient, ObjectID} = require('mongodb');


db.collection('db-name').find()
returns all items in given collection. Can pass parameters into find() method to narrow query results.

Find() returns results as a mongo 'Cursor', need to then pass into .toArray() to convert into array format. This returns a promise, so need to chain on a .then().


For updating items: Look up MongoDB update operators via docs.
$set - lets us set a value of field in a document
$inc - increment operator


-- Mongoose ORM: Object Relational Mapping
NPM library, makes it easy to structure data.
Possible to do everything without mongoose, but it makes life easier.
mongoosejs.com

- Postman
- Body-Parser, library that lets us send JSON to server


Quick review- To get up and running:
  1) Start MongoDB, pointing to folder where data is saved
      Cmd: cd to C:\Program Files\MongoDB\Server\3.2\bin
      Cmd: mongod.exe --dbpath /Users/Dan/mongo-data
      Wait for message: "...waiting for connections on port 27017"

  2) Second command prompt to launch server & app

To set up testing:
  - npm install expect mocha nodemon supertest --save-dev
  - Update package.json:
        "scripts": {
          "test" : "mocha server/**/*.test.js",
          "test-watch": "nodemon --exec \"npm test\""
        }
  - Need to add escape-slash because windows CMD needs double quotes around "npm test"

To start test-watch process:
  npm run test-watch

-- Mongoose Queries & ID validation
In first examples, used Todo.find()
Can pass in no arguments to get all, or can pass in parameters to query.

Mongoose can look up ID's as strings, even though _id is an ObjectID object.

    var id= '5c4f6594092f612970c0cf3e';
    Todo.find({
      _id: id
    });
Returns an array of documents.

Todo.findOne()
Similar to find(), will only return one document, the first one that matches the query.
Returns document object, rather than array.
Also helpful for error handling: if nothing is found, it returns null rather than an empty array []

Todo.findById(id)
Only one argument, not passed as an object

If the id is wrong, but fits mongo convention, will return null rather than throwing error. If id is incorrect and does not fit mongo convention, then will throw error.

Can check if ObjectID is valid mongo ID via ObjectId.isValid() method
