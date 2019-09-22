const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
firstName : { type :String, required: true},
lastName : { type :String, required: true},
username : { type :String, required: true, unique :true},
email : { type :String, required: true, unique :true},
password : { type :String, required: true},
accountNumber : { type :String, unique :true},
bankName : String,
phoneNumber : { type :String, unique :true},
followedPackages : [{id : String}],
investedPackages : [{id : String}],
dateRegisterd : Date

});

mongoose.connection.once('open',()=>{
    console.log('connection started successfully');
})

module.exports = mongoose.model('Investor',investorSchema);
