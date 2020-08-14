var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name: {type:String,required:true},
    last_name: {type:String,required:true},
    telephone_number: {type:String,required:true,unique:true},
    address: {type:String,required:true,unique:true},
    ssn_number: {type:String,required:true,unique:true}
});

var userInfo = mongoose.model('userInfo',userSchema, 'userInfo');
module.exports = userInfo;