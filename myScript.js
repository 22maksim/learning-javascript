"use strict";

const home = ["okey", "maks", "we", "wife", "house", "band"];
home[0] = "daughter";
home[3] = "olga";
home[4] = "alisa";
home[5] = "i am one";
home[6] = "vanja";
let homeLinks = home.length;

let text = "<ul>";
for (let i = 0; i < homeLinks; i++) {
	text += "<li>" + home[i] + "</li>";
}
text += "</ul>";
function myFunction() {
    document.getElementById('name3').innerHTML = text;
}
function myFunction2() {
	alert(5 + 4);
}

const fruits = [];
fruits[fruits.length] = "kiwi";
fruits[fruits.length] = "orange";
fruits[fruits.length] = "lemon";

const vegetables = [];
vegetables[vegetables.length] = "tomato";
vegetables[vegetables.length] = "cucumber";
vegetables[vegetables.length] = "avocado";

const myMenu = vegetables.concat(fruits);

myMenu.sort();


document.getElementById('name2').innerHTML = myMenu;

const nameNum = [];
nameNum[nameNum.length] = "100";
nameNum[nameNum.length] = "30";
nameNum[nameNum.length] = "25";
nameNum[nameNum.length] = "44";

nameNum.sort(function(a, b){return a-b});



document.getElementById('name1').innerHTML = nameNum;

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

const speedMashina = [50, 20, 30, 130, 110, 10, 40, 160, 140, 70];

for (let i = speedMashina.length - 1; i > 0; i--) {
	let j = Math.floor(Math.random() * (i + 1));
	let k = speedMashina[i];
	speedMashina[i] = speedMashina[j];
	speedMashina[j] = k;
}


console.log(speedMashina);

const myHome = [15, 38, 11, 1, 89, 22, 14, 67];
for (let i = myHome.length - 1; i > 0; i--) {
	let j = Math.floor(Math.random() * (i + 1));
	let k = myHome[i];
    myHome[i] = myHome[j];
	myHome[j] = k;
}

console.log(myHome);

const myWork = [45, 98, 11, 54, 32, 49, 85, 14];
for (let i = myWork.length - 1; i > 0; i--) {
	let k = Math.floor(Math.random() * (i + 1));
	let j = myWork[i];
	myWork[i] = myWork[k];
	myWork[k] = j;
}
 console.log(myWork);
 
 const pork = [34, 52, 12, 23, 54, 12, 11, 76];
 for (let i = pork.length - 1; i > 0; i--) {
	 let k = Math.floor(Math.random() * (i + 1));
	 let j = pork[i];
	 pork[i] = pork[k];
	 pork[k] = j;
 }
 
 console.log(pork);
 
 const mySon = [];
 mySon[1] = 'heavi';
 mySon[2] = 'black';
 mySon[0] = 'long';
 
 
 console.log(mySon.sort(function(){return 0.5 - Math.random()}));
 
 const myRome = [];
 myRome[myRome.length] = 'nice';
 myRome[myRome.length] = 'cool';
 myRome[myRome.length] = 'favorite';
 myRome[myRome.length] = 'cat';
 myRome[4] = 'book';
 
 console.log(myRome);
 
 const Maks = {
	 weight: '68',
	 valueWeight: 'kg',
	 height: '186',
	 valueHeight: 'cm',
	 age: 37
};
 document.getElementById('name4').innerHTML = Maks.age;
 
 const myAuto = {speed: 120, speedValue: 'km/h', color: 'gray', weight: 1140, weightVallue: 'kg', 
    volumeEngine: 1400, engineValue: 'sm', autoClass: 'econom'};
	
console.log(myAuto.autoClass);

const myCar = {
	color: 'red',
	weight: '1140',
	speed: '75km/h'
}

const chippolino = [23, 11, 65, 34, 66, 34];
function myArrayMax(arr) {
	return Math.max.apply(null, arr);
}

document.getElementById('name3').innerHTML = myArrayMax(chippolino);

const myNum = [43, 54, 34, 11, 45, 35];
console.log(myNum[2]);

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(2, 38));

function getRandomIntIncInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntIncInclusive(myNum[3], myNum[1]));

//search for the   maximum value

const numberValue = [23, 65, 22, 33, 44, 21, 1, 20, 335, 68, 34, 198, 263];
numberValue.sort(function(a, b){return b - a});
console.log(numberValue[0]);

//search for the   minimum value

const numberStock = [34, 67, 11, 89, 10, 5, 567, 382, 75, 98, 14, 2, 587, 99];
numberStock.sort(function(a, b){return a - b});
console.log(numberStock[0]);

//Math.max

const myStock = [56, 66, 32, 4, 34, 89, 55];
console.log(myMin(myStock));

function myArrayMax(arr) {
	return Math.max.apply(null, arr);
}

//Math.min

function myArrayMin(arr) {
	return Math.min.apply(null, arr);
}

//My Min/Max JS Methods

function myMax(arr) {
	let len = arr.length;
	let max = -Infinity;
	while (len--) {
		if (arr[len] > max) {
			max = arr[len];
		}
	}
	return max;
}

function myMin(arr) {
	let len = arr.length;
	let min = Infinity;
	while (len--) {
		if (arr[len] < min) {
		min = arr[len];
		}
	}
	return min;
}

//arr.sort()

const myCars = [
  {type:"volvo", year:2018},
	{type:"mercedes", year:2020},
	{type:"fiat", year:2008}
];

myFucar();

myCars.sort(function(a, b){return a.year - b.year});
myFucar();

function myFucar() {
	document.getElementById('name5').innerHTML =
	myCars[0].type + " " + myCars[0].year + "<br>" +
	myCars[1].type + " " + myCars[1].year + "<br>" +
	myCars[2].type + " " + myCars[2].year;
}

//arr.sort()

const myCars2 = [
  {type:"volvo", year:2018},
	{type:"mercedes", year:2022},
	{type:"fiat", year:2008}
];

myAtos();

function myFunctionCars() {
	myCars2.sort(function(a, b){
	let x = a.type.toLowerCase();
	let y = b.type.toLowerCase();
	if (x < y) {return -1;}
	if (x > y) {return 1;}
	return 0;
    });
	myAtos();
}

function myAtos() {
	document.getElementById('name6').innerHTML =
	myCars2[0].type + " " + myCars2[0].year + "<br>" +
	myCars2[1].type + " " + myCars2[1].year + "<br>" +
	myCars2[2].type + " " + myCars2[2].year;
}

//arr.sort()


const myPhone = [
	{iphone: '11', price: 50},
	{iphone: '13', price: 110},
	{iphone: '12', price: 70},
	{iphone: '15', price: 220},
	{iphone: '14', price: 150}
];

phoneFunction();

function funPhonePrice() {
  myPhone.sort(function(a, b){
    let x = a.iphone.toLowerCase();
	  let y = b.iphone.toLowerCase();
	  if (x < y) {return -1;}
	  if (x > y) {return 1;}
	  return 0;
	});
	phoneFunction();
}

function phoneFunction() {
  document.getElementById('name7').innerHTML =
	myPhone[0].iphone + " price: " + myPhone[0].price + "<br>" +
	myPhone[1].iphone + " price: " + myPhone[1].price + "<br>" +
	myPhone[2].iphone + " price: " + myPhone[2].price + "<br>" +
	myPhone[3].iphone + " price: " + myPhone[3].price + "<br>" +
	myPhone[4].iphone + " price: " + myPhone[4].price
}

//arr.map()

const myNumbers = [33, 46, 98, 11, 115, 15];
const myNumbers2 = myNumbers.map(myFunctionNumbers);

document.getElementById('name8').innerHTML = myNumbers2;

function myFunctionNumbers(value) {
	return value * 2;
}

// arr.filter()

const myYear = [1985, 2015, 2022, 2030, 2058, 2011, 2156, 2001, 1991];
const sortYears = myYear.filter(filterYears);
const sortYears2 = myYear.filter(filterYears2);

document.getElementById('name9').innerHTML = sortYears;
document.getElementById('name10').innerHTML = sortYears2;

function filterYears(value) {
	return value < 2023;
}

function filterYears2(value){
	return value > 2021;
}

//arr.reduce()

const myMany = [135, 65, 87, 33, 14, 18, 3];
let manyReduce = myMany.reduce(functionMyMany);
let manyReduce2 = myMany.reduce(functionMyMany2, 100);

document.getElementById('name11').innerHTML = manyReduce;
document.getElementById('name12').innerHTML = manyReduce2;

function functionMyMany(total, value) {
	return total + value;
}

function functionMyMany2(total, value) {
	return total - value;
}

//another variant arr.reduce()

const arrCif = [1, 2, 3, 4, 5];

const initialValue = 0;
const sumWithInitial = arrCif.reduce(
	(accumulator, currentValue) => accumulator + currentValue, initialValue
);