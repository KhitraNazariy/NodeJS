// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться. Також вийде callback hell

const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname, 'text.txt'), 'SOME DATA', (err) => {
    if (err) {
        console.log(err);
    }
    fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        fs.mkdir(path.join(__dirname, 'files'), (err) => {
            if (err) {
                console.log(err);
            }
            fs.writeFile(path.join(__dirname, 'files', 'text2.txt'), data, (err) => {
                if (err) {
                    console.log(err);
                }
                fs.unlink(path.join(__dirname, 'text.txt'), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
        })
    })
})