const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yvan:yvan@cluster0-vkamr.mongodb.net/farminvest?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});

const investorSchema = new mongoose.Schema({
firstName : { type :String, required: true},
lastName : { type :String, required: true},
username : { type :String, required: true, unique :true, index:true},
email : { type :String, required: true, unique :true},
password : { type :String, required: true},
accountNumber : { type :String, unique :true},
phoneNumber : { type :String, unique :true},
bankName : String,
followedPackages : [{id : String}],
investedPackages : [{id : String}],
dateRegisterd : Date
});

// Custom functions
investorSchema.statics.findByUsername = function(_username, callback){
    console.log("static method called");
    return this.find({username: _username}, callback);
}

mongoose.connection.once('open',()=>{
    console.log('connection started successfully');
})

module.exports = mongoose.model('Investor',investorSchema);

