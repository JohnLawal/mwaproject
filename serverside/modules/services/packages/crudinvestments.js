const PackageSchema = require('../../respository/package')
const InvestorSchema = require('../../respository/investor')
let handlers = {}

handlers.addInvestmentToPackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    let newInvestment = req.body;
    newInvestment.packageId = packageId;

    PackageSchema.updateOne({ _id: packageId }, { $push: { 'investments': newInvestment } }, function(err, update) {
        if (err) return next(Error(err))

        if (update.nModified > 0) {
            // res.status(202).json({
            //     status: 'Success',
            //     data: 'Investment has been saved'
            // })
            InvestorSchema.updateOne({ username: newInvestment.userName }, { $push: { 'investedPackages': newInvestment } }, function(err, update2) {
                if (err) return next(Error(err))

                if (update2.nModified > 0) {
                    res.status(202).json({
                        status: 'Success',
                        data: 'Investment has been saved'
                    })
                } else {
                    res.status(409).json({
                        status: 'Failure',
                        data: 'No investment was saved'
                    })
                }
            });
        } else {
            res.status(409).json({
                status: 'Failure',
                data: 'No investment was saved'
            })
        }
    });
}

handlers.updateInvestmentStatusInPackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    let investmentId = req.params.investmentid;
    let newInvestmentDetails = req.body;

    PackageSchema.updateOne({ _id: packageId, investments: { $elemMatch: { _id: investmentId } } }, { $set: { 'investments.$.status': newInvestmentDetails.status } }, function(err, update) {
        if (err) return next(Error(err))

        if (update.nModified > 0) {
            res.status(202).json({
                status: 'Success',
                data: 'Investment has been updated'
            })
        } else {
            res.status(409).json({
                status: 'Failure',
                data: 'No investment was updated'
            })
        }
    });
}

module.exports = handlers;