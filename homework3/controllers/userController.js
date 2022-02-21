const users = require('../db/users');

class UserController {

    renderUsers({query}, res) {

        if (Object.keys(query).length) {
            const {city, age} = query;
            let usersArr = [...users];

            if (city) {
                usersArr = usersArr.filter(user => user.city === city);
            }

            if (age) {
                usersArr = usersArr.filter(user => user.age === age)
            }

            res.render('users', {users: usersArr});
            return;
        }
        res.render('users', {users});
    }

    getUsersById({params}, res) {
        const user = users.find(user => user.id === +params.userId);
        res.render('userInfo', {user});
    }

}

module.exports = new UserController();