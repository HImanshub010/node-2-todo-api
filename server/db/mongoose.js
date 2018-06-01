var mongoose=require('mongoose');
//this hepl us to tell it that we need to use built in library instead of 3rd party Promise module
mongoose.Promise=global.Promise

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TodoApp');

module.exports={mongoose};
