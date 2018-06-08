var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');

var{mongoose}=require('./db/mongoose');
var{Todo}=require('./models/todo');
var{User}=require('./models/user');

var app=express();
var port=process.env.PORT||3000;//Used to set port by process environment.

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	var todo=new Todo({
		text:req.body.text
	});
	todo.save().then((doc)=>{
      res.send(doc);
	},(e)=>{
        res.status(400).send(e); 
	});
});


app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
      res.send({todos})
	},(e)=>{
       res.status(400).send(e);
	});
});
//get/todos/123
app.get('/todos/:id',(req,res)=>{
	var id=req.params.id;
     if(!ObjectID.isValid(id)){
     	return res.status(404).send();
     }
 
    Todo.findById(id).then((todo)=>{
	  if(!todo){//occurs when the objectId is valid but no user is found with this id
		return res.status(400).send();
	}
      res.send({todo});//{todo }is similar to {todo:todo}
	}).catch((e)=>{
		res.status(400).send();
	});
});


app.delete('/todos/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectID.isValid(id)){
     	return res.status(404).send("not valid id");
     }
 
    Todo.findByIdAndRemove(id).then((todo)=>{
	  if(!todo){//occurs when the objectId is valid but no user is found with this id
		return res.status(400).send("valid but no record");
	}
      res.send({todo});//{todo }is similar to {todo:todo}
	}).catch((e)=>{
		res.status(400).send("some error ocurred");
	});
})
app.listen(port,()=>{
  console.log(`Started on port on ${port}`);
});

//Used to configure route Post being one of them	
//C create a resource using post HTTP method and send it as a body 
//R 
//