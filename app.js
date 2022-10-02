// console.log("Hello world");
// console.log("welcome to class");
//Variables are containers for values

//var let const  are used to declare variables
// var age = 30;
// console.log(age);

// let age = 45;
// console.log(age);
// age = 46;
// console.log(age);

// const year = 2004;
// console.log(year);
//you CAN NOT update the value of a constant variable
// year = 2006;
// console.log(year);

//conventional variable naming system
//camelcasing year of birth- yearOfBirth

// const myAge = 5;
// const yearOfBirth = 2004;
// let date_of_birth = 2004;
// let dateOfBirth = 2005;

// console.log(myAge, yearOfBirth, date_of_birth, dateOfBirth);

//DATA TYPES
//PRIMITIVE- number, string, boolean, null, undefined, bigInt, symbols
// Complex - objects- arrays, objects
//STRINGS - myname "", ''

/*let myFirstName = "Mubarak";
let myLastName = "Dapo";
let carBrand = "Lamborghini";

//console.log(myFirstName, car, myLastName);
//string concatenation

let result = myFirstName + " " + myLastName + " drives a " + carBrand + " car";
//Mubarak Dapo drives a lamborghini car
console.log(result);

let myFriend = "Jude";
let myFriend2 = "Sunmi";

//my friends are Jude and Sunmi

let desc = "My friends are " + myFriend + " and " + myFriend2;

console.log(desc);*/

//String Property- length of

// let password = "123";

// const result = password.length;
// console.log(result);

//string Methods - uppercase, lowercase, replace, postion of chars, slice

// let result = myFriend.toUpperCase();
// console.log(result, myFriend);

// let anotherFriend = "Jude";
// let result2 = anotherFriend.toLowerCase();
// console.log(result2, anotherFriend);

// let result3 = myFriend.replace("Sun", "*");
// console.log(result3, myFriend);

// console.log(myFriend);
//zero based- count 0
// let myFriend = "Sunmisola";
// let myName = "Mazicharles";
//let result = myFriend.indexOf("S"); //0
//let result = myFriend.slice(6, 9);

//substr
// let result = myName.slice(2, 5); //zic
// let result2 = myName.substr(2, 5); //zicha
// let result3 = myName.includes("i");

// console.log(result);
// console.log(result2);
// console.log(result3);

//NUMBERS
// const year = 2005;
// let age2 = 45;

// //BOOLEAN - true or false

// //Math Operators - + - * / % ** - BODMAS, PEMDAS

// let a = 3; //assignment
// let b = 5;
// let result = b % a; // 2

// console.log(result);

//Comparison Operators - > < == equality operator >= <=

//loose equality operator ==
// strict ===
//assignment =

// console.log(x > y); //true
// console.log(y < z); //false
// console.log(z >= x); //false
// console.log(x <= y);
// console.log(x == 55);
// console.log(x == x1); //false-ifeanyi, jude
// console.log(x === x1);

// //shorthand
// let likes = 10;
// likes = likes + 1; //likes++
// likes++;
// likes--;
// //likes = likes - 1
// console.log(likes);
// //DRY- dont repeat yourself

// let scores = 39;
// //scores = scores + 10;
// scores += 10;

// //scores = scores - 5;
// scores -= 5;
// scores++;
// scores--;
// console.log(scores);
// let newNum = 5;
// newNum *= 10;
// newNum /= 2;
// console.log(newNum);

// //OPERATORS- math operators, comparison operators, logical operators - and, or , not
// // and- &&, or - || not- !
// let x = 55;
// let y = 50;
// let z = 40;
// let x1 = "55";
// console.log(x > y && z < x); // true
// console.log(x === x1 && y < z); //false
// console.log(x <= y || y > z); //true
// console.log(x != x1); //
// console.log(x !== x1); //   jude- t

// //and T && T = T T && F= F F && F = F  or
// //JOINING VARIABLES
// const firstName = "Jude";
// const lastName = "Ifeanyi";
// let age = 13;

// // my name is jude ifeanyi and i am 13 years old
// const sentence =
//   "My name is " +
//   firstName +
//   " " +
//   lastName +
//   " and I am " +
//   age +
//   " years old";

// console.log(sentence);
// //TEMPLATE LITERALS - ``, ${}
// const desc = `My name is ${firstName} ${lastName} and i am ${age} years old`;
// console.log(desc);
// let author = "Adam Owen";
// let book = "The Ghost";
// let yearOfPub = 2022;
// // The book the ghost written in the year 2022 was authored by adam owen

// const desc2 = `The book ${book} written in the year ${yearOfPub} was authored by ${author}`;
// console.log(desc2);

//Conditional Statements- if else, switch
//control flow

let password = "pa234";
// if length of the password is >=8 your password is strong
// if (scores > 50) {
//   console.log("You have done well");
// }

// if (password.length >= 8) {
//   console.log("Your password is STRONG");
// } else {
//   console.log("Your Password is WEAK");
// }
// let scores = 40;
// if (scores >= 70) {
//   console.log("A");
// } else if (scores <= 69 && scores >= 50) {
//   console.log("B");
// } else if (scores <= 49 && scores >= 40) {
//   console.log("C");
// } else if (scores <= 39 && scores >= 20) {
//   console.log("D");
// } else {
//   console.log("F");
// }

//Switch statement

// const faculty = "Education";

// switch (faculty) {
//   case "Science":
//     console.log("Prof Jude");
//     break;
//   case "Social Science":
//     console.log("Prof Ifeanyi");
//     break;
//   case "Technology":
//     console.log("Prof Charles");
//     break;
//   case "Admin":
//     console.log("Prof Sunmi");
//     break;
//   default:
//     console.log("Invalid Faculty");
//     break;
// }
//primitive data types- strings, numbeers, booleans- true, false, null, undefined

// let test = null;
// console.log(test);
// test = "DATA";
// console.log(test);

// let test2;
// console.log(test2);

//Type Conversion and Type Coercion
// let num = 35;
// let num2 = "4";
// console.log(num2 + 2); // 42
// typeOf
// console.log(typeof num, typeof num2);
// string to a number // hello '20000000'
//num2 = Number(num2);
// num2 = parseInt(num2);
// let testing = parseInt("hello");
// console.log(testing, typeof testing);
//NaN= not a number

// console.log(typeof num2);

// //number to string

// num = String(num);
// console.log(typeof num);
//ternary operator - read about
//ARRAY and ARRAY METHODS(length, pick a single elment, remove, add, replace, includes, reverse)
//multiple variables, structured, separeted by a comma
// const arr = ["Jude", "Charles", "Ifeanyi", "Sunmi", "Wilson"];
// const arr2 = [true, 54, "random", null, false];
// console.log(arr);
// console.log(arr.length);

// //array
// console.log(arr[2]);

// //ARRAY METHODS
// //ADD to an array push, unshift
// arr.push("Kingsley"); //end of the arr
// //console.log(arr);
// arr.unshift("Mubarak"); //beginning of the array
// //console.log(arr);
// arr.push("Lanre");
// console.log(arr);

//REMOVE - pop, shift
//console.log(arr.pop());
// arr.pop();
// arr.shift();

// console.log(arr);

// let result = arr.concat(arr2);
// // console.log(arr);
// // console.log(result);

let friends = ["mary", "segun", "christine"];
//let newFriend = "wale";

// friends.push(newFriend);
// friends.unshift("seun");
// console.log(friends);

//let res = arr.concat(friends);
//console.log(res);

//includes, replace
// console.log(friends.includes("seun"));
// console.log(friends.includes("anna"));

// friends[0] = "Gbenga";
// friends[2] = "sandra";
// console.log(friends);

// let arrOfNums = [44, 6, 8, 9, 10];
// //More Array methods- slice, splice, reverse, join

// console.log(arr);
// console.log(arr.slice(0, 3)); //doesnot

// console.log(arr.reverse()); //mutate
// console.log(arr);
// let resultOfJoin = arr.join("-");
// console.log(resultOfJoin);
// let convertToarr = resultOfJoin.split("-");
// console.log(convertToarr);
// console.log(arr);
//filter,map, forEach

//LOOPS
//console.log(arr[3]);
//for while, do..while

//for(initializer, condition, increment){}
//infinite loops
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }
const arr = ["Jude", "Charles", "Ifeanyi", "Sunmi", "Wilson"];
// for (let index = 0; index < 5; index++) {
//   console.log(index);
// }
//sunmi is my best friend //ifenyi is my enemy // jude is my friend

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === "Sunmi") {
//     console.log(`${arr[i]} is my best friend`);
//   } else if (arr[i] === "Ifeanyi") {
//     console.log(`${arr[i]} is my enemy`);
//   } else {
//     console.log(`${arr[i]} is my friend`);
//   }
// }

// for (i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]} is one of my friends`);
// }
let likes = 10;
likes += 5;

// let arrOfNums = [2, 4, 6, 3, 10]; //25
// //arrOfNums[2];
// //loop of this arr, add
// let sum = 0;
// for (i = 0; i < arrOfNums.length; i++) {
//   sum += arrOfNums[i];
//   // console.log(sum);
// }
//console.log(sum);

// let pop = [200, 300, 10, 450, 900, 250];
// let totalPop = 0;
// for (y = 0; y < pop.length; y++) {
//   totalPop += pop[y];
// }
// console.log(totalPop);

let saving = 10000;
let transaction = [-2000, 5000, -50];

transaction.push(-7000);
transaction.push(10000);
transaction.pop();
let credit = 0;
let debit = 0;

for (i = 0; i < transaction.length; i++) {
  if (transaction[i] > 0) {
    credit += transaction[1];
  } else {
    debit += transaction[i];
  }

  saving += transaction[i];
}
// console.log(`your total credit for the month is #${credit}`);
// console.log(`your total debit for the month is #${debit}`);
// console.log(`Your savings account remains ${saving}`);

//WHILE LOOP
//for(initializer, condition, increment){}

// let index = 0;
// while (index < 8) {
//   console.log(index);
//   index++;
// }

//VERSION CONTROL
//github.com signup

//Ternary operator
// if (false) {
//   console.log("this");
// } else {
//   console.log("That");
// }
//condition ? firstAction: the other option

// let yay = 15;
// let nah = 12;
// if (yay > nah) {
//   console.log("the Yay have it");
// } else {
//   console.log("The Nah have it");
// }

// yay > nah ? console.log("THE YAY HAVE IT") : console.log("THE NAH HAVE IT");
// let hasACar = false;
// //mary has a car // mary does not have a car
// console.log(`Mary ${hasACar ? "Has a car" : "Does not have a car"} `);

//Do... while loop
// let x = 0;
// while (x <= 5) {
//   console.log(`the Current value of X is ${x}`);
//   x++;
// }

// let y = 5;
// do {
//   console.log("The current value of y is: ", y);
//   y++;
// } while (y < 5);

//Scopes(local and global variables)
// const data = ["Toyota", "Bentley", "Audi"];
// let num = 45; //global
// console.log(num);
// num = 55;

// if (true) {
//   let num2 = 65; //local
//   console.log(num2);
// }
// console.log(num2);
// console.log(num);
//global - acessible in every part of the code
//local - available in its specofic block of code

//Functions
//km to meters
//function delaration
//function name (){}
// function greetings(name) {
//   console.log(`Hello ${name}`);
// }
// //parameters/ arguments
// //invoke or call
// greetings("Sunmi");

// myLogger("Dapo", 78);
// myLogger("Wilson", 12);

// function myLogger(myName, age) {
//   console.log(`My name is ${myName} and I am ${age} years old`);
// }

// //positiveOrNeg  pos > 0; < 0 neg === 0
// posOrNeg(45);
// posOrNeg(-12);
// posOrNeg(0);

// function posOrNeg(num) {
//   if (num > 0) {
//     console.log(`${num} is a POSITIVE Number`);
//   } else if (num < 0) {
//     console.log(`${num} is a NEGATIVE number`);
//   } else {
//     console.log("This is ZERO");
//   }
// }

//oddOrEven
//+ - / * ** %
// function oddOrEven(value) {
//   if (value % 2 === 0) {
//     console.log(`${value} is an EVEN Number`);
//   } else {
//     console.log(`${value} is an ODD Number`);
//   }
// }

// oddOrEven(84);
// oddOrEven(37);
//function name(){}

//function expression
//syntax, hoisting
// const speaking = function(){}

// const speaking = function () {
//   console.log("i am talking");
// };
// speaking();

// const oddOrEven = function (value) {
//   if (value % 2 > 0) {
//     console.log("This is an odd number");
//   } else {
//     console.log("This is an even number");
//   }
// };

// oddOrEven(84);
// oddOrEven(37);

// const postAmsg = function (msg) {
//   console.log(`This is your message: ${msg}`);
// };
// postAmsg("Im sorry, i would not be available");
// postAmsg("take care of yourself");

//arrow functions
//const name = () => {}

// const result = (num, value) => {
//   console.log("This is an arrow function", num, value);
// };
// result(76, "wilson");
// //()=>{}
// //
// const welcome = (username) => {
//   console.log(`Welcome ${username} `);
// };

// let username = prompt("Enter Your Username: ");

// welcome("Jude");
// welcome("Sandra");
//type conversion Number, parseInt
// const number1 = Number(prompt("Enter your first number: "));
// const number2 = Number(prompt("Enter your second number: "));

// const add = (x, y) => {
//   alert(`The division of your two numbers is  ${x / y}`);
// };
// add(number1, number2);

//Math Objects

//constant
// console.log(Math.PI);

//Math.Methods

// console.log(Math.SQRT2);
//nearest integer
// console.log(Math.round(-6.6)); //-7
// console.log(Math.round(-6.3)); //-6
// console.log(Math.round(-0.5)); //-1 0

// console.log(Math.ceil(4.5)); //
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(0.5));
// console.log(Math.ceil(1.2));

// console.log(Math.floor(4.5));
// console.log(Math.floor(4.7));
// console.log(Math.floor(0.5));
// console.log(Math.floor(1.2));

//Math.random
//gen 0 - 1
//0.5 * 10
// console.log(Math.trunc(Math.random() * 5 + 1));

//Math.trunc
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(0.5));
// console.log(Math.trunc(13.67));
// console.log(Math.trunc(4.905));

//math.sign
// console.log(Math.sign(-4));
// console.log(Math.sign(0));
// console.log(Math.sign(4));

//Return keyword
//func dec, func exp, arrow function

// function knowYourAge(yearOfBirth) {
//   console.log(2022 - yearOfBirth);
// }
// //return
// const knowYourAge2 = function (year) {
//   return 2022 - year;
// };

// knowYourAge(1990);
// knowYourAge(1960);

// knowYourAge2(1990); //32

//62

// console.log(knowYourAge2(1960) + 100);
// console.log(knowYourAge2(2000) / 2);

const a1 = 10;
const a2 = 16;
const a3 = 32;

const b1 = 15;
const b2 = 30;
const b3 = 9;

const calcAvg = (x, y, z) => {
  return (x + y + z) / 3;
};

// const teamA = calcAvg(a1, a2, a3);
// const teamB = calcAvg(b1, b2, b3);
// console.log(teamA, teamB);

// if (teamA > teamB) {
//   console.log("team A wins");
// } else if (teamB > teamA) {
//   console.log("Team B wins");
// } else {
//   console.log("It is a draw");
// }

//More array methods - (map, forEach, filter, find)

// workers.forEach(function (worker) {
//   console.log(worker);
// });

// workers.map((w) => {
//   console.log(`${w} is an employee of the firm!!!`);
// });

const items = [20, 25, 65, 4, 76];
//()=>{}
// items.forEach((num) => {
//   console.log(num + 100);
// });

// const filteredWorkers = workers.filter((worker) => {
//   return worker.length > 4;
// });
// console.log(filteredWorkers);

// let transactions = [2000, -1500, 10000, -50, -4000, 3000];

// yourWithdrawals = transactions.filter((debit) => {
//   return debit < 0;
// });

// yourDeposit = transactions.filter((credit) => {
//   return credit > 0;
// });

// console.log(yourWithdrawals);
// let totalDebit = 0;
// yourWithdrawals.map((d) => {
//   return (totalDebit += d);
// });

// let totalCredit = 0;
// yourDeposit.map((c) => {
//   return (totalCredit += c);
// });

// console.log(totalCredit, totalDebit);

// const greaterThan4 = workers.filter((worker) => {
//   return worker.length >= 4;
// });

// console.log(greaterThan4);

// //sort
// console.log(workers.sort());

//find

// const findWorker = workers.find((worker) => {
//   return worker === "Y";
// });
// console.log(findWorker);

// console.log(workers.indexOf("Bob"));

//destructuring ARRAYS
const workers = ["Bob", "Jerry", "Deji", "Dapo", "Johndoe", "Janedoe", "Ade"];

//Structured data
//console.log(workers);
// console.log(workers[3]);
// console.log(workers[4]);

// const [, , x, , w] = workers;
// console.log(x, w);

//spread and rest operator ...
const countries = ["Nigeria", "Togo", "Ghana", "Pakistan", "Iran"];
// brazil, India, Iraq, Afghanistan
//console.log(...countries);
let developingCountries = [
  ...countries,
  "Brazil",
  "India",
  "Iraq",
  "Afghanistan",
];
//console.log(developingCountries);

let countries2 = ["UK", "USA", "France", "Russia"];
const [first, ...others] = countries2;
//console.log(first, others);
//right side = spread operator

const allCountries = [
  "Germany",
  ...countries2,
  "UAE",
  "Spain",
  ...developingCountries,
  "Zambia",
  "Mozambique",
];
//console.log(allCountries);
//const person = ['John', 'doe', 45, 'Developer', false, true, true]

//Objects key : value pairs
//object literals
//const name = { key : value, key: val}
//unstructured
console.log(workers[0]);
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  occupation: "Developer",
  hasACar: false,
  hasAHouse: true,
  married: true,
  projects: [
    { title: "Musicapp", year: 2013 },
    { title: "Streaming App", year: 2016 },
  ],
  workingHours: {
    Monday: {
      open: "10AM",
      close: "4Pm",
    },
    Tuesday: {
      open: "8AM",
      close: "2Pm",
    },
  },
};

const {
  workingHours: {
    Monday: { close, open },
  },
} = person;
//console.log(close, open);
//console.log(person.workingHours.Monday.open);
//console.log(person);
//picking values from obj
//dot notation
// console.log(person.firstName);
// console.log(person.age);
// console.log(person.occupation);
// //bracket notation
// console.log(person["lastName"]);
// console.log(person["hasACar"]);
//adding key: value

person.gender = "Male";
person.company = "Facebook";
//console.log(person);

//object methods - functions that perform
// function declaration, this
const person2 = {
  name: "Jane Doe",
  gender: "Female",
  hasACar: true,
  company: "Meta",
  previousJobs: ["Instagram", "Piggyvest", "Accessbank"],
  description: function () {
    console.log(
      `My name is ${this.name} and I currently work at ${this.company}`
    );
    // console.log(this);
  },
  pastJob: function () {
    this.previousJobs.forEach((job) => {
      console.log(`I have previously worked at ${job}`);
    });
  },
};

// person2.description();
// person2.pastJob();

const users = [
  { id: 1, name: "John", gender: "Male" },
  { id: 2, name: "Jane", gender: "Female" },
];

const [, y] = users;
//console.log(y);
// const result = users.map((user) => {
//   return `
//   <div>
//     <h1> ${user.name} </h1>
//     <p> ${user.gender} </p>
//   </div>
//   `;
// });
//console.log(this);
//console.log(result);

//description- my name is jane doe and i currently work at Meta

//THIS keyword
//deleting properties
//delete person2.gender;
//console.log(person2);
//Object destructuring
const { name, gender, company } = person2;

//console.log(name, gender, company);

const map = {
  UK: {
    England: {
      London: {},
    },
  },
  Nigeria: {
    Abuja: {
      Garki: "Garki",
      Maitama: "Maitama",
    },
    Lagos: {
      Mainland: [
        { location: "Surulere", lat: 151.09, long: 300 },
        { location: "Yaba", lat: 200.56, long: 400.56 },
      ],
      island: [
        { location: "VI", lat: 151.09, long: 300 },
        { location: "Lekki", lat: 200.56, long: 400.56 },
      ],
    },
  },
};

const {
  Nigeria: {
    Lagos: { island },
  },
} = map;

const res = island.map((item) => {
  console.log(item.location, item.lat, item.long);
});

//github
//Version Control
//Register on github
//install Git
