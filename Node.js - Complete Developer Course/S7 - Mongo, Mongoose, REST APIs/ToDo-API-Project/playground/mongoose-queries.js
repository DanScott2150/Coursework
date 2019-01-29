const {mongoose} = require('./../server/db/mongoose'),
      {Todo}     = require('./../server/models/todo'),
      {User}     = require('./../server/models/user'),
      {ObjectID} = require('mongodb');

// const id = "5c4f678497f3344abcf618aa1";
const userID = "5c4dd3d9a7c7564ba8ea1c1f";

if(!ObjectID.isValid(userID)){
  console.log("User ID not valid");
}

// if(!ObjectID.isValid(id)){
//   console.log("ID is not valid!")
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("Id not found");
//   }
//   console.log('TodoById', todo);
// }).catch((e) => console.log(e));

User.findById(userID).then((user) => {
  if(!user){
    return console.log("User not found")
  }
  console.log("UserByID: ", user)
}).catch((e) => console.log(e));
