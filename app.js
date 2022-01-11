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
