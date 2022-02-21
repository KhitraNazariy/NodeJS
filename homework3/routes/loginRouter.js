const {Router} = require('express');

const loginController = require('../controllers/loginController');

const loginRouter = Router();

loginRouter.get('/', loginController.loginRender);

loginRouter.post('/', loginController.createLogin);

module.exports = loginRouter;