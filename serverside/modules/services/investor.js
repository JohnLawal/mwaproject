const Investor = require('../respository/investor');

const service = module.exports;

service.getInvestorByUsername = function (req, res, next){
    let username = req.params.username;
    Investor.findByUsername(username, function(err, user){
        if (err) {
            // ERROR Handler
        }
        res.json({complete: true, data: user});
    });
    next();
}

service.getAllInvestors = function (req, res, next){
    Investor.find(function(err, list){
        res.json({complete: true, data: list});
    })
    next();
}

service.createInvestor = function (req, res, next){
    // TODO: validate req.body?
    let newInvestor = new Investor(req.body);
    newInvestor.save(function(err) {
        // ERROR handler
        next(err);
    })
    next();
}

service.updateInvestor = function (req, res, next) {
    // TODO
}

service.deleteInvestor = function (req, res, next) {
    // TODO
}