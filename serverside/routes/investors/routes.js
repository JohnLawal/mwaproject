const express = require('express')
const router = express.Router();
const investorService = require('../../modules/services/investor');

router.get('',investorService.getAllInvestors);
router.get('/:username',investorService.getInvestorByUsername);
router.post('',investorService.saveInvestor);




module.exports = router;