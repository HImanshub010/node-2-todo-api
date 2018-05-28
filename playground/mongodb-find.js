// const MongoClient=require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
	if(err){
	    return console.log('Unable to connect to mongodb Server ');
	}
	console.log('Connected to Mongodb Server');
     var db=client.db('TodoApp');


	//find return a curser to all the object in Todos collection and to Array which is promise return all the elements in array form
	// db.collection('Todos').find({
	// 	//inside find we have to query all abject having compleated as false.
	// 	//completed:false
	// 	_id:new ObjectID("5b0c2c5b8b3fd412643254a2")
	// }).toArray().then((docs)=>{
 //       console.log('Todos');
 //       console.log(JSON.stringify(docs,undefined,2)); 
	// },(err)=>{
 //      console.log('Unable to fetch todos',err);
	// });


	db.collection('Todos').find().count().then((count)=>{
       console.log('Todos count:',count); 
	},(err)=>{
      console.log('Unable to fetch todos',err);
	});
	//client.close();
});