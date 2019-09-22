const express = require('express')
const router = express.Router();


router.post('/investor', signUpHandler);
router.post('/signin', signInHandler);
router.post('/forgotpassword', forgotPasswordHandler);
router.post('/updatepassword', updatePasswordHandler);
router.get('/packages', viewPackagesHandler);
router.get('/packages/:id', viewOnePackageHandler);


module.exports = router;