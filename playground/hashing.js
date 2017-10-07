const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

 var password = '123abc!';

 bcrypt.genSalt(10,(err,salt) => {
   bcrypt.hash(password,salt,(err,hash) => {
     console.log(hash);
   })
 })

 var hash = '$2a$10$W/BazQPrcN.A14mH9cOpse3I5MHLJJa.LGEXGivkgH/GWxPo10W4O';

 bcrypt.compare('123abc!',hash,(err,res) => {
   console.log(res);
 })




var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');

console.log(token);

var decoded = jwt.verify(token,'123abc');

console.log(decoded);




// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
