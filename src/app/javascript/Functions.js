var arr = [1,2,3,4],
    total = 0,
    sum = 0;

//functions as value
function sumOfArray(arr, action){
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    action(arr[i]);
  }
  return total;
}

//Higher order functions - Functions as values defined as anonymous functions
sumOfArray(arr, function(num){
  sum += num;
});
document.write(sum);

//forEach method of an array Object
arr.forEach(function(num){
  total += num;
});
document.write(total);

//filter method of an array Object
arr.filter(function(num){
  if(num>2){
    document.write(num);
  }
});
