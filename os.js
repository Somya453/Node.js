const os = require('os');

console.log(os.type());


// Write file
const fs = require('fs');
fs.writeFile('data.txt', 'Hello', 'NodeJS Sych', 'utf8');

console.log('File written successfully');