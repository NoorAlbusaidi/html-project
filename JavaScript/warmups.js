const name = "Noor Alhuda";
let number = 0;

let sum = 5;
let sumTypeBefore = typeof sum; // "number"
let sum = "five";
let sumTypeAfter = typeof sum; // "string"

const equality = 10 == "10"; // true, because the string is converted to a number
const strictEquality = 10 === "10"; // false, because the types are different

const username = "";
if (username) {
    console.log("Username is truthy");
}
else {
    console.log("Username is falsy");
}

const grades = [85, 92, 58, 73, 40];
for (const grade of grades) {
    if (grade < 60) {
        console.log(`Grade ${grade} is failing`);
    }
    else {
        console.log(`Grade ${grade} is passing`);
    }
}

const score = 85;
let grade;

switch (true) {

    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    default:
        grade = "F";
}
console.log(grade); // Output: B

// 1. Function Declaration
function isEvenDeclaration(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 2. Function Expression
const isEvenExpression = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// 3. Arrow Function
const isEvenArrow = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// Calling all three with the same input
console.log(isEvenDeclaration(4)); // true
console.log(isEvenExpression(4));  // true
console.log(isEvenArrow(4));       // true

function greet(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greet());       // Hello, Guest
console.log(greet("Noor")); // Hello, Noor

// 5. Function with a Rest Parameter
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

const person = {
  name: "Noor",

  // Regular function
  getNameRegular: function () {
    return this.name;
  },

  // Arrow function
  getNameArrow: () => {
    return this.name;
  }
};

console.log(person.getNameRegular());
console.log(person.getNameArrow());