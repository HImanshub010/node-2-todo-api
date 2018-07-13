var mongoose=require('mongoose');
var validator=require('validator');
var jwt=require('jsonwebtoken');
const _=require('lodash');
const bcrypt=require('bcryptjs');

var UserSchema=new mongoose.Schema({
	email:{
		type:String,
		required:true,
		trime:true,
		minlength:1,
		unique:true,
		validate:{
			validator:(value)=>{
				return validator.isEmail(value);
			}
		},
		message:'{VALUE} is not a valid email '
	},
	password:{
		type:String,
		required:true,
		minlength:6
	},
	tokens:[{
		access:{
			type:String,
			required:true
		},
		token:{
			type:String,
			required:true
		}
	}]
});

UserSchema.methods.toJSON=function(){//methods object indicate it as instance method rather than model method
	var user=this;
	var userObject=user.toObject();

	return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken=function(){
	var user=this;
	var access='auth';
	var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();

	user.tokens.push({access,token});
	return user.save().then(()=>{
		return token
	});
};

UserSchema.statics.findByToken=function(token){
	var User=this;
	var decoded;
	try{
		decoded=jwt.verify(token,'abc123');
    }catch(e){
    	// return new Promise((resolve,reject)=>{
        //     	reject();
    	// }); next line is does the same functionality as  above two line.  
    	return Promise.reject();
    }
    return User.findOne({
    	"_id":decoded._id,
    	"tokens.token":token,
    	"tokens.access":"auth"
    })
};

//using mongoose middleware.before saving any user we need to hash the password provided.
//use this before any save event
UserSchema.pre('save',function(next){
	var user=this;
	if(user.isModified('password')){
		bcrypt.genSalt(10,(err,salt)=>{
			bcrypt.hash(user.password,salt,(err,hash)=>{
				user.password=hash;
				next();
			});
		});
	}else{
		next();
	}
});

var User=mongoose.model('User',UserSchema);
module.exports={User};