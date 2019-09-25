const express = require('express')
const router = express.Router();
const investorService = require('../../modules/services/investor/investor');
const { getDashboardStats, getInvestments } = require('../../modules/services/investor/investordashboard')
const { checkToken } = require('../../middlewares/checktoken');

router.post('/contact',investorService.contact);

router.get('/get', investorService.getAllInvestors);
router.get('/get/:username', investorService.getInvestorByUsername);
router.post('/save', investorService.saveInvestor);
router.patch('/update/:username', investorService.updateInvestor);
router.delete('/delete/:username', investorService.deleteInvestor);
router.post('/login', investorService.login);
//added by John for investor dashboard
router.get('/dashboard', getDashboardStats);
router.get('/investments', getInvestments)


module.exports = router; 