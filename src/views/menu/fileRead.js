import fs from 'fs'
import path from 'path'
// console.log("🚀 ~ file: fileRead.js:3 ~ path:", path)
console.log("🚀 ~ file: fileRead.js:5 ~ fs.readFile ~ path.resolve:", path.resolve())
fs.readFile(path.resolve()+'/src/views/menu/stringData', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});