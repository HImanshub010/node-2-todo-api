const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
	if(err){
	    return console.log('Unable to connect to mongodb Server ');
	}
	console.log('Connected to Mongodb Server');
     var db=client.db('TodoApp');
	// db.collection('Todos').insertOne({
 //     text:'Something to do',
 //     completed:false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });
	db.collection('Users').insertOne({
       name:'Himanshu',// each object is assigned a unique id by default. we can also set it manually.
       age:25,//obect id set by default has four parts 1.timestamp,2.code of local machine on which it is created     
       location:'Dehradun'//3.process idd 4. is sequential name of the object.
	},(err,result)=>{
		if(err){
			return console.log('Err :',err);
		}

		console.log(result.ops[0]._id.getTimestamp());
	});

	client.close();
});