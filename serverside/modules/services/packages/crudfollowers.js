const PackageSchema = require('../../respository/package')
let handlers = {}

handlers.addFollowerToPackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    let newFollower = req.body;
    PackageSchema.updateOne({ _id: packageId }, { $push: { 'followers': newFollower } }, function(err, update) {
        if (err) return next(Error(err))

        if (update.nModified > 0) {
            res.status(202).json({
                status: 'Success',
                data: 'Follower has been added'
            })
        } else {
            res.status(409).json({
                status: 'Failure',
                data: 'No follower was added'
            })
        }
    });

}

handlers.removeFollowerFromPackageHandler = function(req, res, next) {
    let packageId = req.params.id;
    let followerUsername = req.params.username;
    PackageSchema.updateOne({ _id: packageId }, { $pull: { 'followers': { username: followerUsername } } }, function(err, update) {
        if (err) return next(Error(err))

        if (update.nModified > 0) {
            res.status(202).json({
                status: 'Success',
                data: 'Follower has been removed'
            })
        } else {
            res.status(409).json({
                status: 'Failure',
                data: 'No follower was removed'
            })
        }
    });
}

module.exports = handlers