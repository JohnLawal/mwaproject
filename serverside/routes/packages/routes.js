const express = require('express')
const router = express.Router();

const { viewPackagesHandler, viewOnePackageHandler, createPackageHandler, updatePackageHandler, deletePackageHandler } = require('../../modules/services/packages/crudpackages')

const { addFollowerToPackageHandler, removeFollowerFromPackageHandler } = require('../../modules/services/packages/crudfollowers');

const { addInvestmentToPackageHandler, updateInvestmentStatusInPackageHandler } = require('../../modules/services/packages/crudinvestments')

//VIEW PACKAGES
router.get('/', viewPackagesHandler);

//VIEW DETAILS FOR A PACKAGE
router.get('/:id', viewOnePackageHandler);

//CREATE PACKAGE
router.post('', createPackageHandler)

//UPDATE PACKAGE
router.put('/:id', updatePackageHandler)

//DELETE PACKAGE
router.delete('/:id', deletePackageHandler)

//ADD FOLLOWER TO PACKAGE
router.post('/:id/followers', addFollowerToPackageHandler)

//REMOVE FOLLOWER FROM PACKAGE
router.delete('/:id/followers/:username', removeFollowerFromPackageHandler)

//ADD INVESTMENT TO PACKAGE
router.post('/:id/investments', addInvestmentToPackageHandler)

//UPDATE INVESTMENT STATUS IN PACKAGE
router.put('/:id/investments/:investmentid', updateInvestmentStatusInPackageHandler)


module.exports = router;