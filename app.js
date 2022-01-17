console.log("Hello World");
// alert("Hello World");

var number = 5; //This is an inline comment!

/*This is a 
multiline comment */

number = 9;

/*Data types:
undefined, null(nothing), boolean (True or False), string, symbol, number, and object.
*/

var myName = "Ali Darwish"; // Global

myName = 8;

let ourName = "Darwish"; // Only used within the scope

const pi = 3.14; // It cannot ever be modified

// Storing Values with the Assignment Operator

var b = 2;

a = 7;

b = a;

console.log(a);

var a = 5;

var b = 10;

var c = "I am a";

a = a + 1;

b = b + 5;

c = c + "String";

var Study;

stuDy = 10; // Case sensitive.

var studyMeNow;

studyMeNow = 10;

a = a + 12;
a += 12;

b = b - 2;
b -= 2;

// Works for all operators + - * /

// Declare String Variables

var firstName = "Ali";
var lastName = "Darwish";

var myStr = 'I am a "double quoted" string inside "double quotes"';

console.log(myStr);

var firstNameLength = firstName.length;
console.log(firstNameLength);

var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

// Functions and args

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("human", "small", "walked", "slowly"));

// Arrays

var ourArray = ["John", 23];

var multiDimensionalArray = [
  ["Ali", 18],
  ["Karim", 14],
];

console.log(multiDimensionalArray[1]);

var sampleArray = [42, 53, 15];

sampleArray[0] = 2;

console.log(sampleArray[0]);

sampleArray.push(14, 51);

console.log(sampleArray);

sampleArray.pop(); //Removes the last element in the array

console.log(sampleArray);

sampleArray.shift(); // Removes the first element of an array

console.log(sampleArray);

sampleArray.unshift("String"); //Adds an element to the array

console.log(sampleArray);

var myList = [
  ["Cereal", 3],
  ["Milk", 2],
  ["Bananas", 3],
  ["Juice", 2],
  ["Eggs", 12],
];

// Simple Functions

function ReusableFunction() {
  console.log("Hello, World");
}

ReusableFunction();

function addNumbers(numberOne, numberTwo) {
  sum = numberOne + numberTwo;

  return sum;
}

console.log(addNumbers(11, 41));

function similarity(list1, list2) {
  let list3 = [];
  let list1Length = list1.length;
  let list2Length = list2.length;

  for (var i = 0; i < list1Length; i++) {
    index = list1[i];
    for (var x = 0; x < list2Length; x++) {
      index2 = list2[x];
      if (index == index2) {
        list3.push(index);
      }
    }
  }
  return list3;
}

console.log(similarity([1, 2, 3, "Hello"], ["Hello", 2, 3, 4]));

function largestWord(list) {
  let max = 0;
  let sampleLen = 0;
  let listLength = list.length;
  let word = "";

  for (var i = 0; i < listLength; i++) {
    sampleLen = list[i].length;
    if (max < sampleLen) {
      max = sampleLen;
      word = list[i];
    }
  }
  return word;
}

console.log(largestWord(["Hello", "I", "Valentine", "Like", "Apples"]));

function smallestWord(list) {
  let min = 99999;
  let sampleLen = 0;
  let listLength = list.length;
  let word = "";

  for (var i = 0; i < listLength; i++) {
    sampleLen = list[i].length;
    if (min > sampleLen) {
      min = sampleLen;
      word = list[i];
    }
  }
  return word;
}

console.log(smallestWord(["Hello", "I", "Valentine", "Ok", "Hey"]));

var Global = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof Global != "undefined") {
    output += "Globa: " + Global;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function nextInLine(arr, item) {
  arr.push(item);
  arr.shift();
}

var sampleArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(sampleArr));
console.log(nextInLine(sampleArr, 6));
console.log("After: " + JSON.stringify(sampleArr));

//  && (and) || (or)

var codes = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return codes[0];
  } else if (strokes <= par - 2) {
    return codes[1];
  } else if (strokes == par - 1) {
    return codes[2];
  } else if (strokes == par) {
    return codes[3];
  } else if (strokes == par + 1) {
    return codes[4];
  } else if (strokes == par + 2) {
    return codes[5];
  } else if (strokes >= par + 3) {
    return codes[6];
  }
}

console.log(golfScore(5, 4));

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(3));

function caseInDefault(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "alpha";
      break;
    case "b":
      answer = "beta";
      break;
    case "c":
      answer = "gamma";
      break;
    default:
      answer = "Sigma";
      break;
  }
  return answer;
}

console.log(caseInDefault("h"));

function multipleCases(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Hello";
      break;
    case 4:
    case 5:
    case 6:
      answer = "world";
      break;
  }
  return answer;
}

console.log(multipleCases(2));

function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 5));

// Objects

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["Everything!"],
};

var MyDog = {
  name: "Clifford",
  legs: 16,
  tails: 0.3,
  friends: ["Emo"],
};

var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue, shirtValue);

var sampleObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = sampleObj["an entree"];
var drinkValue = sampleObj["the drink"];

console.log(entreeValue, drinkValue);

var sampObj = {
  12: "Hello",
  16: "Montana",
};

var playerNumber = 16;
var player = sampObj[playerNumber];

console.log(player);
