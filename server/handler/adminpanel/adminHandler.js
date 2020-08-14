
let jwt = require('jsonwebtoken');
let config = require('../../config.js');
var adminSchema = require('../../schema/adminSchema.js');
var output;

exports.adminlogin = function adminlogin(myObj, callback){
    adminSchema.find({email:myObj.email,password:myObj.password}, function(err,result){
        if(result.length <= 0){
            output = {responseCode : 400, error:true, errorMessage:"Invalid Email or password"};
        }
        else {
            let token = jwt.sign({ email: myObj.email }, config.secret, { expiresIn: '720h' });
            output = { responseCode: 200, error: false, result: result,token:token};
        }
        return callback(null, output)
    })
}