const myMod = require('./logger');
//const myMod = require('./add');

const logFn = myMod.logger;

logFn('logger 1223123123');

const AddFn = myMod.addition;

AddFn(10, 30);


const fs = require('fs');

//console.log('file system');

const f = fs.readFileSync('./logger.txt', 'utf8');
console.log('file: ', f);

const fAsync = fs.readFile('./logger.txt', 'utf8', function(err, file){
	console.log('fAsync: file', file);
});

//listen server from port 4000 display file data in browser
