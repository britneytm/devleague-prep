//homework help
//Function - greatSummator
//Write a function that takes an Array with any number of type Number 
//and write a for loop to add all numbers in the Array and return the sum.

var arrayNumber = [1, 2, 3, 4, 5];
var newNumber = 0;
function greatSummator(number){
	for (var i=0; i<number.length; i++){
	newNumber += number[i];
	console.log(newNumber);
}
}


//Function - totalUnderWhatFor
//Write a function that takes an Array with any number of type Number 
//and second variable called total. Return true if the sum of all values 
//in the Array are less than total otherwise return false.

function totalUnderWhatFor (numbers){
	var sum = 0;
	for (var i=0; i<numbers.length; i++){
		var ithnumber=numbers[i];
		sum += ithnumber;
		if (sum<total){
			console.log('true');
		}else{
			console.log('false');
		}
		return sum;
	}
}
var total = 14;
var sumNumber = [1, 4, 2, 2];
console.log(totalUnderWhatFor(sumNumber));


//Function - totalUnderWhatFor
//Write a function that takes an Array with any number of type Number 
//and second variable called total. Return true if the sum of all values 
//in the Array are less than total otherwise return false.

var sum = 0;
var array = [1,2,3,4,5];
var totalNum=10;
function totalUnderWhatFor (arr, total){
	for (var i=0; i<array.length; i++){
		sum += arr[i];
		}
		return (sum<total);
}
console.log(totalUnderWhatFor(array, totalNum));

//Function - checkTrueValues
//Write a function that takes an Array with any number of type Boolean values 
//and write a for loop to call our isTrue function with each value as input 
//and return true if all values return true from our isTrue function.

function isTrue (bool){
	return bool === true;
}

var someArr = [true, true, false];

function checkTrueValues (arr){
 var isArrTrue = true;
 for (var i = 0; i < arr.length; i++){
 	if (!isTrue(arr[i])){
 		console.log(isArrTrue);
 		isArrTrue = false;
 	}
 	console.log(isArrTrue);
 }
return isArrTrue;
}

checkTrueValues(someArr);

//Function - checkTrueValues
//Write a function that takes an Array with any number of type Boolean values 
//and write a for loop to call our isTrue function with each value as input 
//and return true if all values return true from our isTrue function.

function isTrue (bool){
	return bool === true;
}
var someArr = [true, false, true];
var someArr2 = [true, true, true];

function checkTrueValues (arr){
 for (var i = 0; i < arr.length; i++){
 	if (!isTrue(arr[i])){
 		return false;
 }
}
return true;
}

console.log(checkTrueValues(someArr));
console.log(checkTrueValues(someArr2));
