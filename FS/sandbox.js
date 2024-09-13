// console.log(1);
// console.log('ciao');

let age = 25;
let year = 2019;

console.log(age, year);

age = 30;

console.log(age);

const points = 100;
// points = 99;  not permitted to change a const
console.log(points);

// var score = 75;   old way
// console.log(score);


// STRINGS

console.log('hello, world');

let email = 'prova@gmail.com';
console.log(email);

let firstName = 'Davide';
let lastName = 'Petenzi';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

console.log(fullName[0]);

console.log(fullName.length);

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

let resultB = email.lastIndexOf('a');
console.log(resultB);

let resultC = email.slice(0,5);
console.log(resultC);

let resultD = email.substring(0,5);
console.log(resultD);

let resultE = email.replace('a', 'o');
console.log(resultE);


// NUMBERS

let radius = 10;
const pi = 3.14;

let area = pi * radius**2;
console.log('Area = ' + area);

// console.log(radius, pi);
console.log(4/0);

// ORDER of CALCULATIONS - B I D M A S 
// Brackets, Indexes(potenze), Division, Multiplication, Addition, Subtraction

let likes = 10;

likes = likes + 1;
// =
likes = likes++;
// =
likes += 1;

// NaN - Not a Number
console.log(5 / 'hello');

// Template strings
let templateString = `Area = ${area}`;
console.log(templateString);

// Html template
let html = `
    <h2>${area}</h2>
    <h1>${area}</h1>
`;

console.log(html);


let group = ['tom', 'paul', 'dave'];
let united = group.join('-');
let conc = group.concat(['will', 'lil'])

// group.push('ken');   add ken at the and of Array
// group.pop();         remove the last element of array

console.log(united, conc);

// Null / undefined
let boo;
boo = null;
console.log(boo, boo + 3, `boo is ${boo}`);

// Booleans
console.log(true, false, 'true', 'false');

let newEmail = 'paul@shark.com';
let inc = newEmail.includes('@');
console.log(inc);

let uno = 24;
console.log(uno > 25);
console.log(uno == 24);
console.log(uno === '24');

// Type conversion
let score = '100';
score = Number(score); // string to number
score = String(score); // number to string
score = Boolean('0');  // string to boolean
console.log(typeof score); // type of variable

