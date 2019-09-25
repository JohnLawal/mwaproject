const InvestorSchema = require('../../respository/investor');
const PackagesSchema = require('../../respository/package');


let handlers = {}


handlers.getDashboardStats = async function(req, res, next) {

    try {
        //get users id
        //the get invesments in packages where the username is this user's
        const username = 'Tester';
        let user = await InvestorSchema.find({ username: username })
        user = user[0];
        let userInvestments = user.investedPackages;

        let sum = await PackagesSchema.aggregate([{ $match: { status: "Available" } }, { $group: { _id: null, total: { $sum: "$amount" } } }]);

        let totalUnitsAvailable = sum.length > 0 ? sum[0] : 0;

        const numberOfInvestments = userInvestments.length;
        let numberOfFarmsFollowed = user.followedPackages.length;

        let mostRecentInvestment = userInvestments.pop();
        if (!mostRecentInvestment) {
            mostRecentInvestment = "None"
        }

        res.status(200).json({
            status: "Success",
            data: {
                mostRecentInvestment: mostRecentInvestment,
                totalUnitsAvailable: totalUnitsAvailable,
                numberOfInvestments: numberOfInvestments,
                numberOfFarmsFollowed: numberOfFarmsFollowed
            }
        })
    } catch (err) {
        next(Error(err))
    }

}

module.exports = handlers;