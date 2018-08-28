const{SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');





// var data={
// 	id:10
// };
// var token=jwt.sign(data,'abc123');

// console.log(`tken is : ${token}`); 

// var decoded=jwt.verify(token,'abc123');

// console.log('Decoded tken is   ',decoded);







// var message='Helllo I am 12';
// var hash=SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hashed Message : ${hash}`);


// var data={
// 	id:4
// }

// var token={
// 	data:data,
// 	hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// // token.data.id=5;
// // token.hash=SHA256(JSON.stringify(token.data.id)+'somesecret').toString(); 	


// var resultRes= SHA256(JSON.stringify(token.data)+'somesecret').toString()

// if(token.hash===resultRes){
// 	console.log('Data not Modified');
// }else{
// 	console.log('Data Modified do not trust');
// }