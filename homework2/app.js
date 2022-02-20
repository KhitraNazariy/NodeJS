// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і
// редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж

// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city

// 3. /user/:id сторінка з інфою про одного юзера

// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

// - додайте ендпоінт signIn який буде приймати email і password і якщо все вірно то редірект на сторінку цього

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));

const users = [];
let error = '';

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', ({ query }, res) => {
    if (Object.keys(query).length) {
        const {city, age} = query;
        let usersArr = [...users];
        if (query.city) {
            usersArr = usersArr.filter(user => user.city === city);
        }
        if (query.age) {
            usersArr = usersArr.filter(user => user.age === age)
        }
        res.render('users', { users: usersArr });
        return;
    }
    res.render('users', { users });
});

app.get('/error', (req, res) => {
    res.render('error', { error });
});

app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        res.redirect('/error');
        error = `Юзер з емейлом: ${body.email} вже існує`;
        return;
    }
    users.push({ ...body, id: users.length ? users[users.length - 1].id + 1 : 1 });
    res.redirect('/users');
});

app.get('/users/:userId', ({ params }, res) => {
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = `Не існує юзера з ID ${params.id}`;
        res.redirect('/error');
        return;
    }
    res.render('userInfo', { user });
});

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', ({ body }, res) => {
    const {email, password} = body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        error = 'Ви ввели невірний пароль або емейл';
        res.redirect('/error');
        return;
    }
    res.render('userInfo', { user });
});



app.use((req, res) => {
    res.render('notFound');
});

app.listen(5000, () => {
    console.log('Server has started');
});