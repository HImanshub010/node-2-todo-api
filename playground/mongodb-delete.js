// const MongoClient=require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
	if(err){
	    return console.log('Unable to connect to mongodb Server ');
	}
	console.log('Connected to Mongodb Server');
     var db=client.db('TodoApp');
    
    //delete Many->it delete all the items that match the criteria

    // db.collection('Todos').deleteMany({
    // 	text:'Eat Launch'
    // }).then((result)=>{
    // 	console.log(result);
    // }); 

    //delete One-->delete the first item that match the criteria
    // db.collection('Todos').deleteOne({text:'Eat Launch'}).then((result)=>{
    // 	console.log(result);
    // })

    //find one and delete and returns delete many
    //also returns the lastErrorObject returns n i.e not of items deleted
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    	console.log(result);
    })

	//client.close();
});