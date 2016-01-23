//OBJECTS
// Record of structured data; index of key-value pairs (aka Map). 
var myObject = {
    keyOfNumber: 3,
    keyOfBoolean: true,
    'key-of-string': 'str',
    keyOfObject: {
        key5: 'nested'
    },
    keyofArray: [0, 1]
};

console.log(myObject.keyOfNumber);
console.log(myObject['key-of-string']);

console.log(myObject['key-of-string']);


//METHOD DECLARATION
//You can...
var myObject = {
    myMethod: function(x) {
        //do something
        console.log(x);
    }
};

myObject.myMethod('hi');

//...wrap it in function
var myObject = {};
myObject.myMethod = function(x) {
    //do something with x...
    console.log(x);
};

myObject.myMethod('hi');

//...assign it directly
var myObject = {};
myObject.myMethod = function(x) {
    //do something with x...
    console.log(x);
};

myObject.myMethod('hi');

//...define variables for it
function myLog(x) {
    console.log(x);
}

var myObject = {
    myMethod: myLog
};

myObject.myMethod('hi');


//OBJECTS AS MAP
//Build as you go:

var myMap = {};

function addToMap(map, key, value) {
    map[key] = value; //NOT map.key!!!
}
var myKey = 'some string';
var myValue = 27;

addToMap(myMap, myKey, myValue);
console.log(myMap);

//MAP ITERATION EXAMPLE: ENVIRONMENT VARIABLES

//EXERCISES
//Plain object and adding properties

var plainBox = {
	color: 'Purple',
	size: 12,
	contents: []
};
console.log(plainBox);

var stockCar = {
	model: 'Ford',
	year: 2008,
	automaticTransition: false,
	driver: null,
	passengers: []
};

var plainPerson = {};

function buildPerson(person, nameString, age){
	person = {};
	person.name = nameString; //go access plain person object; since there's no "name" keyed object, add it to object
	person.age = age;
	return person;
}

console.log(buildPerson(plainPerson, 'Britney', 5));

var arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrders(orders) {
	for (var i = 0; i <orders.length; i++) {
	var order = orders[i];
	console.log('======');
	console.log('id:', order.id);
	console.log('purchase date:', order.date);
	console.log('purchase total:', order.total);

	}
}

printProcessedOrders(arrayOfObjects); 

var newVariable = {
	a:5,
	b:2,
	result:{}
};

var comboCreature = {
	a: 'Cat',
	b: 'Dog',
	result:{}
};

function additionWithAnObject (firstObject) {
	var aPlusB = firstObject.a + firstObject.b;
	firstObject.result = aPlusB;
}

additionWithAnObject (newVariable);
console.log(newVariable);

additionWithAnObject (comboCreature);
console.log(comboCreature);


function printSumFunction (variableObject) {
	var message = variableObject.a +" + "+ variableObject.b+' = '+variableObject.result;
	console.log(message);
	variableObject.output = message;
	return variableObject;
}

var display = printSumFunction(comboCreature);
console.log(display); //functional programming: immutability (where values don't ever change)		

console.log(comboCreature);

//FINAL BOSS
var passengerList = [ 'jon', 'jason' ];

var passengerAges = [ 19, 12 ];

function buildPerson(person, name, age) {
	person.name = name;
	person.age = age; 
	return person;
}

function weRidin(car, names, ages) {

	car.passengers = car.passengers || []; //make sure it exists, or set it as an empty array

	for (var i = 0; i < names.length; i++) {
		var passenger = buildPerson (
			// {}, create object from scratch and pass it in; taht becomes my value
			names([i]),
			ages([i])
		);
		car.passengers.push(passenger);
	}
	return car;
}

function displayPassengers(car) {
	for(var i = 0; i < car.passengers.length; i++){
		var passenger = car.passengers[i];
		console.log(passenger.name + ', age ' + passengers.age + ', is riding dirty!');
	}
}
var myCar = {
	model: 'Chevy',
	year: 2010,
	passengers: []
};

weRidin(myCar, passengerList, passengerAges);

displayPassengers(myCar);























