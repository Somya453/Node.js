const fs = require('fs');


// Write file
fs.writeFile("data.txt", "Hello", "NodeJS Async", (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } 
    console.log('File written successfully');

});

// Read file
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error reading:', err);
    }
    console.log('Text append successfully!');
});
 

