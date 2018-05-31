const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');

var id='6b0e1076446fdd086c7f210b';
// if(!ObjectID.isValid(id)){
// 	console.log('ID not Valid');
// }
// //here even though id is a string but as it is assigned to _id therfore it is converted into the object of ObjectId
// Todo.find({
// 	_id:id
// }).then((todos)=>{
//   console.log('todos',todos);
// });

// Todo.findOne({
// 	_id:id
// }).then((todo)=>{
//   console.log('todo',todo);
// });

Todo.findById(id).then((todo)=>{
	if(!todo){//occurs when the objectId is valid but no user is found with this id
		return console.log('Id not found');
	}
  console.log(JSON.stringify(todo,undefined, 2));
}).catch((e)=> console.log(e)); 