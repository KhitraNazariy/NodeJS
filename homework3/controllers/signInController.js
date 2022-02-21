const users = require('../db/users');

class SignInController {
    renderSignIn(req, res) {
        res.render('signIn');
    }

    signIn({body}, res) {
        const {email, password} = body;
        const user = users.find(user => user.email === email && user.password === password);
        res.render('userInfo', {user});
    }
}

module.exports = new SignInController();