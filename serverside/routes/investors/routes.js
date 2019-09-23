const express = require('express')
const router = express.Router();
const investorService = require('../../modules/services/investor');

router.get('',investorService.getAllInvestors);
router.get('/:username',investorService.getInvestorByUsername);
router.post('',investorService.saveInvestor);
router.patch('/:username',investorService.updateInvestor);
router.delete('/:username', investorService.deleteInvestor);

module.exports = router;