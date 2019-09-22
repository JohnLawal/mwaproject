const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
name : { type :String, required: true},
amount :  {type : Number},
contractPeriod : Number,
expectedReturn : Number,
availableUnits : Number,
description : String,
status : String,
profileImage : String,
coverImage : String,
followers :[{username : String}],
investers : [
    {userName : String,
     units :Number,
     status : String,
     amount : Number,
     payment :{
         transactionRef : String,
         type : String
     },
     dateOfInvestiment : Date,
     maturityDate : Date
    }
]
});


//test connection on atlas cloud ==> to be removed later
mongoose.connection.once('open',()=>{
    console.log('connection started successfully');
})

module.exports = mongoose.model('Package',packageSchema);
