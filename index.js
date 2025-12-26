const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6];

const chunked = _.chunk(numbers, 2);
console.log(chunked);

const obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4 };
const clonedObj = _.cloneDeep(obj);
console.log(clonedObj);


// global variables
console.log(__dirname);
console.log(__filename);

// process object
console.log(process.cwd());
console.log(process.pid);
console.log(process.platform);
console.log(process.version);
console.log(process.exit());