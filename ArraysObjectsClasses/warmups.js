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
const {id,name,...rest} = order;
console.log(id); // 101
console.log(customer); // Sara Ahmed
console.log(rest); // { total: 249.99, status: 'Shipped' }  

function summary({id,customer,total,status}){
    return `Order ${id} for ${customer} is ${status}. Total: $${total}`;
}

console.log(summary(order));

const onlineOrders = [101, 102, 103, 104];

const inStoreOrders = [201, 202, 203, 204];

const allOrdersIds = [...onlineOrders, ...inStoreOrders];
console.log(allOrdersIds); 

const updatedOrders = {...order, status: "Cancelled"};

console.log("Original order:", order);
console.log("Updated order:", updatedOrders);

function sum(...numbers){
    return numbers;
}

console.log(sum(1,2,3,4,5)); //[1,2,3,4,5]

const orders = [
    { id: 101, customer: "Sara Ahmed", total: 249.99, status: "Shipped" },
    { id: 102, customer: "Noor Ali", total: 150.00, status: "Pending" },
    { id: 103, customer: "Omar Khan", total: 320.50, status: "Delivered" },
    { id: 104, customer: "Fatma Ali", total: 99.99, status: "Cancelled" },
    { id: 105, customer: "Ahmed Said", total: 450.00, status: "Shipped" },
    { id: 106, customer: "Layla Hassan", total: 75.50, status: "Pending" },
    { id: 107, customer: "Khalid Noor", total: 180.25, status: "Delivered" },
    { id: 108, customer: "Mariam Ali", total: 210.00, status: "Shipped" }
];

const shippedOrders = orders.reduce((sum,item)=> sum + item.total,0);
console.log("Total of shipped orders:", shippedOrders); // Total of shipped orders: 909.98

const shippedOrdersfiltered = orders.filter(order => order.status === "Shipped");
console.log(shippedOrdersfiltered); // [{ id: 101, customer: "Sara Ahmed", total: 249.99, status: "Shipped

const customerNames = orders.map(order => order.customer);
console.log(customerNames);