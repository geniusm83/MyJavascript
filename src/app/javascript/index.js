//String
var helloWorld = "Hello World";
//Number
var number = 10;
//Boolean
var isBoolean = true;
//undefined
var un_defined = undefined;
//Object
var obj = {
	name: 'object',
	type: 'Object'
};
//function
var func = function(option){
	switch(option){
		case "number":{
			return number;
		}
		case "boolean":{
			return isBoolean;
		}
		default:{
			return helloWorld;
		}
	}
}

var traingle = function(){
	var hash = '';
	for(var col = 0; col < 7; col++){
		for(var row = 0; row <= col; row++){
			hash = hash + "#";
		}
		console.log(hash);
		hash = '';
	}
}

var oneToHundred = function(){
	for (var num = 1; num <= 100; num++){
		if(num % 3 === 0 && num % 5 === 0){
			console.log("FizzBuzz")
		}
		else if(num % 3 === 0){
			console.log("Fizz");
		}else if(num % 5 === 0 && num % 3 !== 0){
			console.log("Buzz");
		}else{
			console.log(num);
		}
	}
}

var closure = function(multiplier){
	return function(number){
		return number * multiplier;
	}
}

var chessBoard = function () {
	for(var row = 0; row < 8; row++){
		for(var col = 0; col < 4; col++){
			document.write('#'+"&nbsp;");
		}
		document.write("</br>");
		if(row%2 === 0)
			document.write("&nbsp;");
	}
}

//document.writeln(func());
//traingle();
//oneToHundred();
//chessBoard();

var getClosureHandle = closure(2);
console.log(getClosureHandle(5));

