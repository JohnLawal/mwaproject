const Investor = require('../respository/investor');

const service = module.exports;


/*  Required:
        body: {validInvestorJSON}
*/
service.saveInvestor = function (req, res, next){
    // TODO: validate req.body?
    console.log("....trying to save..");
    console.log(req.body);
    res.end();
}


/*  Required:
        params: [id]
*/
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

/*  Required: NONE
*/
service.getAllInvestors = function (req, res, next){
    Investor.find(function(err, list){
        res.json({complete: true, data: list});
    })
    next();
}

/*  Required:
        params: [id]
        body : {validInvestorJSON}
*/
service.updateInvestor = function (req, res, next) {
    // TODO
}

/*  Required:
        params: [id]
*/
service.deleteInvestor = function (req, res, next) {
    // TODO
}