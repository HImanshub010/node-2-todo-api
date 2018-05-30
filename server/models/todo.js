var mongoose=require('mongoose');
//creating a model that will specify the items in the model(here Todo).It wil specify ther types and other related properties of items  
var Todo=mongoose.model('Todo',{
	text:{
       type:String,
       trim:true,
       minlength:1,
       required:true
	},
	completed:{
       type:Boolean,
       default:true
	},
	completedAt:{
       type:Number,
       default:null
	}
});

module.exports={Todo};