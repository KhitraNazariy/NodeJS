const users = require('../db/users');

class LoginController {

    loginRender(req, res) {
        res.render('login');
    }

    createLogin({body}, res) {
        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users');
    }
}

module.exports = new LoginController();