const express = require('express')
const router = express.Router();
const investorService = require('../../modules/services/investor/investor');

router.post('/contact',investorService.contact);
router.get('',investorService.getAllInvestors);
router.get('/:username',investorService.getInvestorByUsername);
router.post('',investorService.saveInvestor);
router.patch('/:username',investorService.updateInvestor);
router.delete('/:username', investorService.deleteInvestor);
router.post('/login',investorService.login);


module.exports = router; 