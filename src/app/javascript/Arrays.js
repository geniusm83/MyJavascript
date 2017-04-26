var arr = [10, 20, 30, 40, 20];

//Looping through arrays
var arr_func1 = function(){
	for (var i = 0; i<arr.length; i++) {
		document.write(arr[i] + " " );
	}
}

//adding element at the end of an array
var arr_func2 = function(){
	arr.push(50);
	arr_func1();
}

//removing element from the top of an array
var arr_func3 = function(){
	arr.pop();
	arr_func1();
}

//adding an element at the front of an array
var arr_func4 = function(){
	arr.unshift(60);
	arr_func1();
}

//removing an element from the front of an array
var arr_func5 = function(){
	arr.shift();
	arr_func1();
}

//finding first occurence an element in an array
var arr_func6 = function (num) {
	document.write(arr.indexOf(num));
}

//finding last occurence an element in an array
var arr_func7 = function (num) {
	document.write(arr.lastIndexOf(num));
}

//getting the subset from an array
var arr_func8 = function (startIndex, endIndex) {
	document.write(arr.slice(startIndex, endIndex));
}

//concatenating arrays
var arr_func9 = function(){
	var temp= [50, 60];
	arr = arr.concat(temp);
	arr_func1();
}
// arr_func2();
// arr_func3();
// arr_func4();
// arr_func5();
// arr_func6(20);
// arr_func7(20);
// arr_func8(2,4);
// arr_func8(3);
arr_func9();
