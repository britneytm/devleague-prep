//Function - youGetTaco
// Write a function that takes a single String parameter called action. 
// If the value passed into our function is eat have the function return the String value EAT TACOS.

function youGetTaco(action) {
    if (action === "eat") {
        return "Eat Tacos";
    }
}
console.log(youGetTaco("eat"));


//Write a function that takes two variables of type Number called first and secondrespectively. 
//Return true if the first number is greater than the second.

function isNumberGreaterThan(first, second) {
    if (first > second) {
        return true;
    } else {
        return false;
    }
}
console.log(isNumberGreaterThan(5, 3));

//Write a function that takes in a Boolean value named val 
//and have the function return whether the value is true.

function isTrue(val) {
    if (val === "cat") {
        return true;
    } else {
        return false;
    }
}
console.log(isTrue("cat"));

//Function - isEqual
//Write a function that takes two variables of type String called firstWord and secondWordrespectively. 
//Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.

function isEqual(firstWord, secondWord) {
    if (firstWord === secondWord) {
        return "AWWWWRIGHT";
    } else {
        return 'Y U NO MATCH!';
    }
}
console.log(isEqual("dandy", "dandy"));

//Function - isNotEqual
//Write a function that takes two variables of type String called firstWord and secondWordrespectively. 
//Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.

function isNotEqual(firstWord, secondWord) {
    if ("firstWord" === "secondWord") {
        return "AWWWWRIGHT";
    } else {
        return "Y U NO MATCH!";
    }
}
console.log(isNotEqual("handy", "dandy"));

//Function - doubleEquals
//Write a function that takes two variables of type Boolean called first and secondrespectively. 
//Return true if both values are true otherwise return false.

function doubleEquals(first, second) {
    if (first > 2 && second < 1) {
        return true;
    } else {}
    return false;
}
console.log(doubleEquals(3, 0));

//Function - totalOver30
//Write a function that takes three variables of type Number called first and second and third respectively. 
//Return true if the sum of all values are greater than 30 otherwise return false.

function totalOver30(first, second, third) {
    var sum = first + second + third;
    if (sum > 30) {
        return true;
    } else {
        return false;
    }
}
console.log(totalOver30(1, 27, 5));

//Function - totalUnderWhat
//Write a function that takes four variables of type Number called first and second and third and fourth respectively. 
//turn true if the sum of first, second and third are less than fourth otherwise return false.

function totalUnderWhat(first, second, third, fourth) {
    var sum = first + second + third;
    if (sum > fourth) {
        return true;
    } else {
        return false;
    }
}
console.log(totalUnderWhat(1, 2, 3, 0));

//Function - loopToNumber
//Write a function that takes in a Number value named limit and have the function write a for loop 
//that loops the number of times of limit and console.log each number as the loop executes.

function loopToNumber(limit) {
    for (var i = 0; i < limit; i++) {
        console.log("cohort " + i);
    }
}
loopToNumber(9);

//Function - showEachValue
//Write a function that takes in a Array value named characters that has a sequence of single character 
//String values and have the function write a for loop that loops for each number of elements
// in the Array and console.log each character as the loop executes.

function showEachValue(characters) {
    for (var i = 0; i < characters.length; i++) {
        console.log(characters[i]);
    }
}

showEachValue(["a", "b", "c", "d"]);

//Function - createArrayFromString
//Write a function that takes a single variable of type String called word 
//and write a for loop that creates an Array made up of each character in word except for A. 
//We don't want no stinking A in our Array. 
//Note: You will need to use the Array.push() method to complete this function.

var phrase = "Apples are always awesome.";

function createArrayFromString(word) {
    var letterArray = [];
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt([i]);
        if (currentLetter !== "a" && currentLetter !== "A") {
            letterArray.push(currentLetter);
            console.log(letterArray);
        }
    }
}

createArrayFromString(phrase);