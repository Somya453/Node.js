// Promise-then, catch

// const fs = require('fs/promises');
const fs = require('fs').promises;

fs.writeFile('data.txt', 'Promises in Node.js')
    .then(() => {
        console.log('File created successfully');
    })

    .catch((err) => { 
        console.log('Error writing file:', err);
    });

fs.readFile('data.txt', 'utf8')
    .then((data) => { 
        console.log('File read successfully:', data);
    })
    .catch((err) => {
        console.log('Error reading file:', err);
    });


// append file
fs.appendFile('data.txt', '\nAppended using Promises')
    .then(() => {
        console.log('File appended successfully');
    })
    .catch((err) => {
        console.log('Error appending file:', err);
    })


// delete file
fs.unlink('data.txt')
    .then(() => { 
        console.log('File deleted successfully');
    })
    .catch((err) => {
        console.log('Error deleting file:', err);
    });


// Async-Await
async function writeFile() { 
    try {
        await fs.writeFile('data.txt', 'Async-Await in Node.js');
        console.log('File created successfully using Async-Await');
    } catch (err) {
        console.log('Error writing file:', err);
    }
}
writeFile();


// read file
async function readFile() {
    try {
        const data = await fs.readFile('data.txt', 'utf8');
        console.log('File read successfully using Async-Await:', data);
    } catch (err) {
        console.log('Error reading file:', err);
    }
}
readFile();



// append file
async function appendFile() {
    try {
        await fs.appendFile('data.txt', '\nAppended using Async-Await');
        console.log('File appended successfully using Async-Await');
    }
    catch (err) {
        console.log('Error appending file:', err);
    }
}
appendFile();


// delete file
async function deleteFile() {
    try {
        await fs.unlink('data.txt');
        console.log('File deleted successfully using Async-Await');
    } catch (err) {
        console.log('Error deleting file:', err);
    }
}
deleteFile();