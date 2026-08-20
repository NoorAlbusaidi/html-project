const cities = ["Muscat","Dubai","London","Tokyo","Paris","New York"];
cities.push("Berlin");
console.log(cities);
cities.unshift("Madrid");
console.log(cities);
cities.pop();
console.log(cities);
cities.shift();
console.log(cities);

console.log(cities.length); // 6
// Add a duplicate city
cities.push("Muscat"); // at the end

console.log(cities.length); // 7

console.log(cities);