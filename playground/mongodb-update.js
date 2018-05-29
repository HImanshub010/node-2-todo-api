// const MongoClient=require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
	if(err){
	    return console.log('Unable to connect to mongodb Server ');
	}
	console.log('Connected to Mongodb Server');
     var db=client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5b0d66b110e549946fada4ed')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });
     db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b0c2ff82d398307fca88138')
    },{
        $set:{
            name:'Himanshu Bhardwaj'
        },
        $inc:{
            age:2
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
	//client.close();
});