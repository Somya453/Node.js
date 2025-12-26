const fs = require('fs');

// Asynchronous read
fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error reading:', err);
    }
    console.log('File content:', data);
})


// Synchronous read
const data = fs.readFileSync('text.txt', 'utf8');
console.log('Read File Content:', data);



// Write file
fs.writeFile('data.txt', 'Hello', (err) => {
    if (err) {
        console.log('Error writing file:', err);
    }
    console.log('File written successfully!')
})


// append file
fs.appendFile('data.txt', '\nAppended Text', (err) => { 
    if (err) {
        console.log('Error Deleted Succefully!')
    }
    console.log('File Appended Successfully!');
})