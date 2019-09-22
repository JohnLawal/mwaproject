const packageSchema = require('../../respository/package')

let viewPackagesHandler = function(req, res, next) {
    packageSchema.find((err, documents) => {
        if (err) return next(Error(err));

        res.status(200).json(documents)
    })
}

let viewOnePackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    packageSchema.findById(packageId, (err, document) => {
        if (err) return next(Error(err));
        res.status(200).json(document)
    })
}

let createPackageHandler = function(req, res, next) {
    let newPackage = req.body;
}

let updatePackageHandler = function() {}
let deletePackageHandler = function() {}


module.exports = {
    viewPackagesHandler: viewPackagesHandler,
    viewOnePackageHandler: viewOnePackageHandler,
    createPackageHandler: createPackageHandler,
    updatePackageHandler: updatePackageHandler,
    deletePackageHandler: deletePackageHandler
}