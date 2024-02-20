const fs = require('fs');
const path = require('path');

//Create a folder 
// fs.mkdir(path.join(__dirname, '/text'), {}, err => {
//     if(err) throw err
//     console.log('file loading...')
// })

// Create a written folder 
fs.writeFile(path.join(__dirname, '/text', 'hello.txt'), 'Hello World!', err => {
    if(err) throw err
    console.log('file written...');
})