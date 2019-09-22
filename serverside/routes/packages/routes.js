const express = require('express')
const router = express.Router();

const { viewPackagesHandler, viewOnePackageHandler, createPackageHandler, updatePackageHandler, deletePackageHandler } = require('../../modules/services/packages/crudpackages')

const { addFollowerToPackage, removeFollowerFromPackage } = require('../../modules/services/packages/crudfollowers');

const { addInvestmentToPackage, updateInvestmentInPackage } = require('../../modules/services/packages/crudinvestments')

//VIEW PACKAGES
router.get('', viewPackagesHandler);

//VIEW DETAILS FOR A PACKAGE
router.get('/:id', viewOnePackageHandler);

//CREATE PACKAGE
router.post('', createPackageHandler)

//UPDATE PACKAGE
router.put('/:id', updatePackageHandler)

//DELETE PACKAGE
router.delete('/:id', deletePackageHandler)

//ADD FOLLOWER TO PACKAGE
router.post('/followers', addFollowerToPackage)

//REMOVE FOLLOWER FROM PACKAGE
router.delete('/followers/:id', removeFollowerFromPackage)

//ADD INVESTMENT TO PACKAGE
router.post('/investments', addInvestmentToPackage)

//UPDATE INVESTMENT IN PACKAGE
router.put('/investments/:id', updateInvestmentInPackage)


module.exports = router;