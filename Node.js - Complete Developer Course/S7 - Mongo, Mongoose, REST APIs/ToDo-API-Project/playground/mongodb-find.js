const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log("Connected to MongoDB Server");

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c4cae8ccf7b995eed936516')
  // }).toArray().then((docs) => {
  //
  //   console.log("Todos: ");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos: ", err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch todos: ", err);
  // });

  db.collection('Users').find({name: "Dan"}).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log("Unable to find user: ", err);
  });


  // db.close();
});
