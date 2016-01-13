//Declare a variable named presidents which contains the first 5 presidents' last names: Washington, Adams, Jefferson, Madison, Monroe.
//Now write a FOR loop which iterates through this Array.
//Within the FOR loop, use console.log to:
//Log the value of i. Use a message like Value of i is: and append the value of i to this String
//Log what is at index i in the array. Use a message like Value at Index is: and append the value stored within the Array at that index.
//console.log is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use console.log to inspect and debug your code.

var presidents = ['Washington', 'Adams', 'Jefferson', 'Adams', 'Madison', 'Monroe'];

function printContent(i) {
	console.log('Value of i is: ' + i);
	console.log('Value of Index is: ' + Presidents[i]);
}

function printPresidents(){
	for (var i = 0; i > presidents.length; i++); {
		//printContent(presidents, i);
		printContent(i);
	}
}

printPresidents();


//The String of Numbers
//Declare a variable named stringOfNumbers and set it's value to '' (an empty String).
//Then write a FOR loop that appends a Number value to that string starting from 10 all the way up to and including 20.
//After the FOR loop, use console.log to inspect your variable. In the end your String should look like this 1011121314151617181920 
//bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called appendToString and still achieve the same result?

function appendToString(stringToAppendTo, stringToAppend) {
	return stringToAppendTo + stringToAppend;
}

function createStringOfNumbers() {
	var stringOfNumbers = " ";

for (var i = 10; i <=20; ++i) {
	stringOfNumbers = appendToStrong(stringOfNumbers, i);
}
	return stringOfNumbers;
}

var myStringOfNumbers = createStringOfNumbers(10, 21);
console.log(myStringOfNumbers);

var a = 4;
console.log ('a', b);

var b = a++;

//console.log ('a after first', a);
//console.log ('b', b);

var c = ++a;
//console.log ('a after ssecond', a);
//console.log ('c', c);

a += 1;


console.log('a after second', a);
console.log ('c', c);
console.log ('number 3...');

//Even Numbers
var evenNumberArray = [];
for (var j = 0; j < 99; j +=2) {
	//if(j % 2 === 0) {
	evenNumberArray.push(j);
	//}
}

console.log (evenNumberArray);

//Odd Numbers

var oddNumberArray = [];
for (var j = 1; j < 98; j++) {
	if(j % 2 === 0) {
	oddNumberArray.push(j);
	//}
}

//Accessing only the odd indexes of an Array - 'Not Even Brah'
//Someone forgot to fill out this array! Oh noes...

//Declare a new variable named oopsArray set it's value to be: [ 'turn' , , 'down' , , 'for' , , 'what' ]
//using a FOR loop, add the string 'nope' to every odd index.

//Example result should look like:

//`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
//console.log (evenNumberArray);

var oopsArray = ['turn',' ', 'down',' ','for',' ','what'];

console.log('oopsArray', oopsArray.length, oopsArray);

for (var k = 0; k < oopsArray.length; k++);
	console.log(k, oopsArray[k]);
	if (k % 2 === 1) {
	//if(!oopsArray[k]) {
		oopsArray[k] = 'nope';
	}
}

console.log('oopsArray', oopsArray.length, oopsArray);

