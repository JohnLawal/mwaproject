const express = require('express')
const router = express.Router();

const { viewPackagesHandler, viewOnePackageHandler, createPackageHandler, updatePackageHandler, deletePackageHandler } = require('../../modules/services/packages/crudpackages')

const { addFollowerToPackage, removeFollowerFromPackage } = require('../../modules/services/packages/crudfollowers');

const { addInvestmentToPackage, updateInvestmentInPackage } = require('../../modules/services/packages/crudinvestments')

//VIEW PACKAGES
router.get('/packages', viewPackagesHandler);

//VIEW DETAILS FOR A PACKAGE
router.get('/packages/:id', viewOnePackageHandler);

//CREATE PACKAGE
router.post('/packages', createPackageHandler)

//UPDATE PACKAGE
router.put('/packages/:id', updatePackageHandler)

//DELETE PACKAGE
router.delete('/packages/:id', deletePackageHandler)

//ADD FOLLOWER TO PACKAGE
router.post('/packages/followers', addFollowerToPackage)

//REMOVE FOLLOWER FROM PACKAGE
router.delete('/packages/followers/:id', removeFollowerFromPackage)

//ADD INVESTMENT TO PACKAGE
router.post('/packages/investments', addInvestmentToPackage)

//UPDATE INVESTMENT IN PACKAGE
router.put('/packages/investments/:id', updateInvestmentInPackage)


module.exports = router;