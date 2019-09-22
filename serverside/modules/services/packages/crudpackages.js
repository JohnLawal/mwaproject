const PackageSchema = require('../../respository/package')
let handlers = {}


handlers.viewPackagesHandler = function(req, res, next) {
    PackageSchema.find((err, documents) => {
        if (err) return next(Error(err));

        res.status(200).json(documents)
    })
}

handlers.viewOnePackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    PackageSchema.findById(packageId, (err, document) => {
        if (err) return next(Error(err));
        res.status(200).json(document)
    })
}

handlers.createPackageHandler = function(req, res, next) {
    let newPackage = new PackageSchema(req.body)
    newPackage.save(function(err) {
        if (err) return next(Error(err));
        res.status(201).json({
            status: 'Success',
            data: 'Package has been saved'
        })
    });
}

handlers.updatePackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    let docsModified = PackageSchema.updateOne({ _id: packageId }, req.body)
    if (docsModified > 0) {
        res.status(202).json({
            status: 'Success',
            data: 'Package has been updated'
        })
    } else {
        res.status(409).json({
            status: 'Failure',
            data: 'No package was updated'
        })
    }
}

handlers.deletePackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    Tank.deleteOne({ _id: packageId }, function(err) {
        if (err) return next(Error(err));
        res.status(202).json({
            status: 'Success',
            data: 'Package has been deleted'
        })
    });
}

module.exports = handlers;