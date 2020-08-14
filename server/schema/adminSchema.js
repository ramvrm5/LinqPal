var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    email: {type:String,required:true},
    password: {type:String,required:true}
});

var adminLogin = mongoose.model('adminLogin',adminSchema, 'adminLogin');
module.exports = adminLogin;