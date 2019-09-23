const express = require('express')
const {getAdminInfo, saveAdmin,changePassword,login} = require('../../modules/services/admin')
const {saveMiddleware,checkToken} = require('../../middlewares/adminMiddleware');
const {checkToken} = require('../../middlewares/checktoken');
const adminRouter = express.Router();


adminRouter.post('/save',checkToken,saveMiddleware,saveAdmin);
adminRouter.get('/:username',checkToken,getAdminInfo);
adminRouter.put('/changePass',checkToken,changePassword);
adminRouter.post('/login',login);

module.exports = adminRouter;