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

