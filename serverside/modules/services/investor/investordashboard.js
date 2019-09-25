const InvestorSchema = require('../../respository/investor');
const PackagesSchema = require('../../respository/package');


let handlers = {}


handlers.getDashboardStats = async function(req, res, next) {

    try {
        //get users id
        //the get invesments in packages where the username is this user's
        const username = req.username;
        let user = await InvestorSchema.find({ username: username })
        user = user[0];
        let userInvestments = user.investedPackages;

        let sum = await PackagesSchema.aggregate([{ $match: { status: "Available" } }, { $group: { _id: null, total: { $sum: "$amount" } } }]);


        let totalUnitsAvailable = sum.length > 0 ? sum[0].total : 0;

        const numberOfInvestments = userInvestments.length;
        let numberOfFarmsFollowed = user.followedPackages.length;

        let mostRecentInvestment = userInvestments.pop();
        if (!mostRecentInvestment) {
            mostRecentInvestment = "None"
        } else {
            mostRecentInvestment = mostRecentInvestment.dateOfInvestment
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

handlers.getInvestments = async function(req, res, next) {
    // interface Investment {
    //     name: string;
    //     units: number;
    //     amount: string;
    //     dateOfInvestment: Date;
    //     contractPeriod: string;
    //     expectedReturn: string;
    //     status: string;
    //   }

    try {
        //get username
        //the get invesments in packages where the username is this user's
        const username = req.username;

        let allinvestments = await InvestorSchema.find({ username: username }, { _id: 0, investedPackages: 1 });
        let allMyInvestments = allinvestments[0].investedPackages;
        let formattedInvestments = []

        if (allinvestments.length) {
            for (let inv of allMyInvestments) {
                investmentPackageId = inv.packageId;
                let package = await PackagesSchema.findById(investmentPackageId);

                let formattedInv = {
                    name: package.name,
                    units: inv.units,
                    amount: inv.amount,
                    dateOfInvestment: inv.dateOfInvestment,
                    contractPeriod: package.contractPeriod + ' days',
                    expectedReturn: package.expectedReturn + '%',
                    status: inv.status
                }
                formattedInvestments.push(formattedInv);
            }
        }

        res.status(200).json({
            status: "Success",
            data: formattedInvestments
        })
    } catch (err) {
        next(Error(err))
    }
}

module.exports = handlers;