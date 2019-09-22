const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://yvan:yvan@cluster0-vkamr.mongodb.net/farminvest?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});
const adminSchema = new mongoose.Schema({
firstName : { type :String, required: true},
lastName : { type :String, required: true},
username : { type :String, required: true, unique :true},
email : { type :String, required: true, unique :true},
password : { type :String, required: true},
dateRegisterd : Date
});
  
mongoose.connection.once('open',()=>{
    console.log('connection started successfully');
})

module.exports = mongoose.model('Admin',adminSchema);
