Download Mongo
Robomongo: Basic GUI for mongo

npm - mongodb native NodeJS driver
https://github.com/mongodb/node-mongodb-native
http://mongodb.github.io/node-mongodb-native/


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
