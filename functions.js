//Functions (https://gist.github.com/jaywon/f7d2fdfd85f70ea3d243)

//Declare Two Variables
var a = 1;
var b = 5;
var c = 2;
var firstName = "Britney";
var lastName = "T-M";

function add (a, b) {
	return a + b;
}
var sum = add (a, b);


function subtract (a, b) {
	return a - b; 
}
var difference = subtract (a, b);


function multiply (a , b) {
	return a * b;
}
var product = multiply (a, b);


function checkDifference (difference) {
	return 'My football team lost '+difference+' stored this week.';
}


function checkSum (sum) {
	console.log('I CAN ADDZ '+sum+' NUMBERS');
}
checkSum(sum);


function checkProduct (product, difference) {
	return product * difference;
}
console.log(checkProduct (product, difference));


function addThenSubtract(a, b, c) {
	var aplusb = add (a , b);
	return subtract (aplusb, c);
}
console.log(addThenSubtract (a, b, c));


function addThenMultiply(a, b, c) {
	var aplusb = add (a, b);
	return multiply (aplusb, c);
}
var howMany = addThenMultiply (a, b, c);


function createFullName(firstName, lastName) {
	return firstName+" "+lastName;
}
var myFullName = createFullName (firstName, lastName);
console.log (myFullName);


function verifyDrinkingAge(age){
	return age>=21;
}
var canDrinkBeer = verifyDrinkingAge (25);
console.log(canDrinkBeer);


function throwParty(oldEnough){
	if (oldEnough){
		console.log('This party will have an open bar!');
	}else {
		console.log('This party will have tons of cake!');
	}
}
throwParty(canDrinkBeer);


function eatFood (food){
	return firstName+" "+lastName+" "+"loves to eat"+" "+food+".";
}
var favefood = eatFood ("ginger");
console.log(favefood);



