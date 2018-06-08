const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');


//removes all the docs
// Todo.remove({}).then((docs)=>{
//   console.log(docs);
// });



// //find the first items that matches the query and remove it
Todo.findOneAndRemove({_id:"5b0e1076446fdd086c7f210b"}).then((docs)=>{
   console.log(docs);
});

//find element by id and remove it
// Todo.findByIdAndRemove({"5b0e1076446fdd086c7f210b"}).then((docs)=>{
//    console.log(docs)
// });