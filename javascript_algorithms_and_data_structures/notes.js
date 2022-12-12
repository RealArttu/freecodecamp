// Variables: var, let, const
// var = can be easily overwritten, USE LET AND CONST
// let = can be overwritten once defined
// const = can't be changed once defined (read-only)

// Defining and using variables for strs
const FCC = "freeCodeCamp";
let fact = "is cool";
fact = "is awesome!";
console.log(FCC, fact);

// const with math, calculates what is defined as variables
const sum = 10 + 10;
console.log(sum);

const difference = 45 - 33;
console.log(difference);

const product = 8 * 10;
console.log(product);

const qutient = 66 / 33;
console.log(qutient); 

// yhteenlasku
let yhtLas = 87;
// yhtLas = yhtLas + 1; Not needed, can use
yhtLas++;
console.log(yhtLas);

// vahennyslasku
let vahLas = 11;
// vahLas = vahLas - 1; Not needed, can use
vahLas--;
console.log(vahLas);

// Decimals can also be stored in vars
const desiMal = 8.7;
console.log(desiMal);

// Decimals can be calculated
const kertoLas = 2.0 * 2.5;
console.log(kertoLas);

const jakoLas = 4.4 / 2.0;
console.log(jakoLas);

// Remainders can also be calculated with %. Not working with negative numbers. (Jäännös)
const remainder = 11 % 3;
console.log(remainder);

// calculating with +=
let eka = 6;
// not needing eka = eka + 5, instead:
eka += 5;
console.log(eka);

// same with -=
let toka = 6;
toka -= 5;
console.log(toka);

// *=
let kerto = 5;
kerto *= 5;
console.log(kerto);

// /=
let jako = 5;
jako /= 5;
console.log(jako);

// Literal quotes in str
const strQuote = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(strQuote);

// lines in str
const sample = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(sample);

// Connecting two strings with +
const connect = "Hello, " + "World!";
console.log(connect);

// Connecting two strings with +=
let connect2 = "Hi, ";
connect2 += "World!";
console.log(connect2);

// Build string with variables and text
const myName = "Arttu";
const respond ="My name is " + myName + ", and I am well!";
console.log(respond);

// Build a string with +=
const adjective = "Cool!";
let description = "Learning to code is ";
description += adjective;
console.log(description);

// Finding length of str

let nimeniLength = 0;
const nimeni = "Arttu";

nimeniLength = nimeni.length;
console.log(nimeniLength); // Should print 5

// Find firs char in str with bracket notation
let letterOfName = "";
const text = "Mun nimi";

letterOfName = text[0];
console.log(letterOfName); // Should print M

// Get last letter from string
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName); // Should print e

// Get 2nd last letter
const secondLetter = lastName[lastName.length - 2]
console.log(secondLetter);

// arrays
const myArray = ["string", 2, "jotain"]; // 2 values
console.log(myArray);

// array in array
const myArray2 = [["Array1", 1], ["Array2", 2]];
console.log(myArray2);

// access array data
let myData = myArray[0];
console.log(myData);

// modify array data
myArray[0] = "new string";
console.log(myArray);

// Accessing multi-dimensional arrays
// Array
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];

// Printing various values
console.log(arr[3]); // Should print [[10, 11, 12], 13, 14]
console.log(arr[3][0]); // Should print [10, 11, 12]
console.log(arr[3][0][1]); // Should print 11

// Push data into array
arr.push(["Moikka!"]);
console.log(arr);

// Manipulate array with pop(), it removes last element
const popArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const popping = popArray.pop();
console.log(popping + ": Popped result");
console.log(popArray);

// Manipulate array with shift(), it removes first element
const shiftArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const shifting = shiftArray.shift();
console.log(shifting + ": Shifted result");
console.log(shiftArray);

//
