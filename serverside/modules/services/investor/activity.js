const Investor = require('../../respository/investor');
const service = module.exports;

/* Required: 
        params: [username]
*/
service.getAllInvestments = async function(req, res, next) {
    try {
        let username = req.params.username;
        let user = await Investor.findByUsername(username);
        let investments = user.getInvestments();
        res.json({complete:true, data:investments});
    } catch (err) {
        res.json({complete:true, data:err});
    }
}

/* Required: 
        params: [username]
*/
service.getAllFollowedInvestments = async function(req, res, next) {
    try {
        let username = req.params.username;
        let user = await Investor.findByUsername(username);
        let investments = user.getFollow();
        res.json({complete:true, data:investments});
    } catch (err) {
        res.json({complete:true, data:err});
    }
}
