const express = require('express')
const { getAdminInfo, saveAdmin, changePassword, login } = require('../../modules/services/admin')
const { saveMiddleware } = require('../../middlewares/adminMiddleware');
const { checkToken } = require('../../middlewares/checktoken');
const { getDashboardStats } = require('../../modules/services/admindashboard');
const adminRouter = express.Router();


adminRouter.post('/save', checkToken, saveMiddleware, saveAdmin);
adminRouter.get('/get/:username', checkToken, getAdminInfo);
adminRouter.put('/changePass', checkToken, changePassword);
adminRouter.post('/login', login);
adminRouter.get('/dashboard', checkToken, getDashboardStats);


module.exports = adminRouter;