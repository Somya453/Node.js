// function callback(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }
 

// function myCallback() {
//     console.log("I'm callback function.")
// }

// callback("Alice", myCallback);


const fs = require('fs');

fs.readFile('input.txt', "utf-8", function (err, data) { 
    if (err) return console.error(err);
    fs.readFile('input2.txt', "utf-8", function (err, data) {
        if (err) return console.error(err);
        console.log("file1", data);
        console.log("file2", data);
    });
    console.log(data.toString());
})


