function logger(log){
	console.log("log me: ", log);
}

//logger({ hello: 'world'});

//logger(module);
function add(a, b){
	console.log("Sum: ", a+b);
}

//module.exports.add = add;

//module.exports.logger = logger;

module.exports = {
	logger: logger,
	addition: add
}