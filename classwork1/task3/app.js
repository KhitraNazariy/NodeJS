// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити,
// але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

const path = require('path');
const fs = require('fs');

function readDir() {
    fs.readdir(path.join(__dirname, 'files'), (err, data) => {
        if (err) {
            console.log(err);
        }
        data.map(item => {
            if (item.includes('.txt')) {
                fs.truncate(path.join(__dirname, 'files', item), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            } else {
                fs.rename(path.join(__dirname, 'files', item), (path.join(__dirname, 'files', `new_${item}`)), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        })
    })
}
readDir();