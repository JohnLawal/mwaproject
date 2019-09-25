const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yvan:yvan@cluster0-vkamr.mongodb.net/farminvest?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const investorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountNumber: { type: String, unique: true },
    phoneNumber: { type: String, unique: true },
    bankName: String,
    followedPackages: [{ id: String }],
    investedPackages: [{
        packageId: String,
        units: Number,
        status: String,
        amount: Number,
        payment: {
            transactionRef: String,
            transactionType: String
        },
        dateOfInvestment: Date,
        maturityDate: Date
    }],
    dateRegisterd: Date

});

// Custom Methods
investorSchema.statics.findByUsername = function(_username, callback){
    return this.findOne({username: _username}, callback);
}

investorSchema.methods.findInvestments = function(_username, callback) {
    return this.investedPackages;
}

investorSchema.methods.findFollowed = function(_username, callback) {
    return this.followedPackages;
}

mongoose.connection.once('open', () => {
    console.log('connection started successfully');
})

module.exports = mongoose.model('Investor', investorSchema);