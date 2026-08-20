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

for(let i =0; i < cities.length; i++){
    console.log(cities[i]);
}

for(const city of cities){
    console.log(city);
}

	
const	order	=	{	id:	101,	customer:	"Sara	Ahmed",	total:	249.99,	status:	"Shipped"	};
const {customer,total} = order;
console.log(customer); // Sara Ahmed
console.log(total); // 249.99
const {id,customer,...rest} = order;
console.log(id); // 101
console.log(customer); // Sara Ahmed
console.log(rest); // { total: 249.99, status: 'Shipped' }  

function summary({id,customer,total,status}){
    return `Order ${id} for ${customer} is ${status}. Total: $${total}`;
}

console.log(summary(order));