//Number 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Part a
var first = ages[0];
var last = ages[ages.length - 1];

function subtraction(first, last) {
	let subtractFinal = first - last;
	return subtractFinal;
}
console.log(subtraction(first, last));

//Part b
ages.push(30);
console.log(ages);
console.log(subtraction(first, last));

//Part c
let sumAges = 0;
for (let i = 0; i < ages.length; i++) {
	sumAges += ages[i];
}
console.log(sumAges / ages.length);

//Number 2
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Part a
let newNames = names.map(function (element) {
	return element.length;
});
console.log(newNames);

let sumNames = newNames.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue / names.length;
});
console.log(sumNames);

//Part b
let joinNames = names.join(", ");
console.log(joinNames);

//Number 3 is done
let lastElement = names[names.length - 1];
console.log(lastElement);

//Number 4 is done
let firstElement = names[0];
console.log(firstElement);

// Number 5 is done
let nameLengths = names.map(function (element) {
	return element.length;
});
console.log(nameLengths);

// Number 6 is done
let sumOfElements = nameLengths.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
});
console.log(sumOfElements);

// Number 7 is done
function combine(word, n) {
	return word.repeat(n);
}
console.log(combine("Hello", 5));

// Number 8 is done
function fullName(firstName, lastName) {
	return firstName + " " + lastName;
}
console.log(fullName("Janel", "Flores"));

// Number 9 is done
let numArray = [20, 40, 60, 80, 100];
let sumArray = numArray.reduce(function (accumulator, currentValue) {
	if (accumulator + currentValue >= 100) {
		return true;
	} else {
		return false;
	}
});
console.log(sumArray);

//Number 10 is done
let numbers = [10, 20, 30, 40, 50];
function returnAvg(numbers) {
	let total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total / numbers.length;
}
console.log(returnAvg(numbers));

//Number 11
let num1 = [10, 20, 30, 40, 50];
let num2 = [2, 4, 6, 8, 10];

let avgArray1 = num1.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue / num1.length;
});
console.log(avgArray1);

let avgArray2 = num2.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue / num2.length;
});
console.log(avgArray2);

function num3(avgArray1, avgArray2) {
	if (avgArray1 > avgArray2) {
		return true;
	} else {
		return false;
	}
}
console.log(num3(avgArray1, avgArray2));

// Number 12 is done
function willBuyDrink(isHotOutside, moneyInPocket) {
	if (isHotOutside == true && moneyInPocket >= 10.5) {
		return true;
	} else {
		return false;
	}
}
console.log(willBuyDrink(true, 11));

//Number 13 is done
function hydrated(numOfGlasses) {
	if (numOfGlasses > 8) {
		return "You are hydrated";
	} else {
		return "You need more water";
	}
}
console.log(hydrated(6));
/* I created this function as a way to track water intake throughout the day. */
