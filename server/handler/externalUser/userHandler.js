var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");
var UserSchema = require('../../schema/userSchema.js');
var output;


exports.userInfo = function userInfo(myObj, callback) {
    myObj["ssn_number"] = CryptoJS.AES.encrypt(myObj.ssn_number.toString(), 'ram@gmail.com 1');
    var _UserSchema = new UserSchema(myObj);
    _UserSchema.save(function (err, result) {
        if (err) {
            output = { response_code: err.code, error: true, message: err.message};
        }
        else {
            output = { message: "Record Added", response_code: 200, error: false};
        }
        return callback(null, output);  
    });
}

exports.userList = function userList(myObj, callback) {
    UserSchema.find({}, function (err, result) {
        if (err) {
            output = { response_code: err.code, error: true, message: err.message };
        }
        else {
            output = { response_code: 200, error: false, result: result };
        }
        return callback(null, output);
    });

}