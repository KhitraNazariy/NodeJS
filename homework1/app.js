// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.


// const onlineUsers = [
//     {name: 'Andrii', age: 22, city: 'Lviv'},
//     {name: 'Kostia', age: 25, city: 'Rivne'}
// ];
//
// for (let i = 0; i < onlineUsers.length; i++) {
//     const user = onlineUsers[i]
//     for (const key in user) {
//         fs.writeFile(
//             path.join(__dirname, 'main', 'online', 'online.txt'),
//             `${key}: ${user[key]}\n`,
//             {flag: 'a'},
//             (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             }
//         )
//     }
// }

// const inPersonUsers = [
//     {name: 'Orest', age: 22, city: 'Lviv'},
//     {name: 'Vasia', age: 25, city: 'Rivne'}
// ]
//
// for (let i = 0; i < inPersonUsers.length; i++) {
//     const user = inPersonUsers[i]
//     for (const key in user) {
//         fs.writeFile(
//             path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
//             `${key}: ${user[key]}\n`,
//             {flag: 'a'},
//             (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             }
//         )
//     }
// }

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

function changeData() {
    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'utf8', (err, dataInPerson) => {
        if (err) {
            console.log(err);
        }
        fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'utf8', (err, dataOnline) => {
            if (err) {
                console.log(err);
            }
            fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), dataOnline, {flag: 'w'},(err) => {
                if (err) {
                    console.log(err);
                }
                fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), dataInPerson, {flag: 'w'}, (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
        })
    })
}

changeData()