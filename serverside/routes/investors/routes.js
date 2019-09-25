const express = require('express')
const router = express.Router();
const investorService = require('../../modules/services/investor/investor');
const { getDashboardStats, getInvestments } = require('../../modules/services/investor/investordashboard')
const { checkToken } = require('../../middlewares/checktoken');

router.post('/contact',checkToken,investorService.contact);

router.get('/get', investorService.getAllInvestors);
router.get('/get/:username', checkToken,investorService.getInvestorByUsername);
router.post('/save', investorService.saveInvestor);
router.patch('/update/:username',checkToken, investorService.updateInvestor);
router.delete('/delete/:username', investorService.deleteInvestor);
router.post('/login', investorService.login);
//added by John for investor dashboard
router.get('/dashboard',checkToken, getDashboardStats);
router.get('/investments',checkToken, getInvestments)


module.exports = router; 