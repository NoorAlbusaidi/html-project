const orders = [
    {
        id: 1,
        customer: "Ahmed",
        status: "Pending",
        date: "2026-08-01",
        items: [
            { product: "Laptop", price: 500, quantity: 1 },
            { product: "Mouse", price: 15, quantity: 2 }
        ]
    },
    {
        id: 2,
        customer: "Sara",
        status: "Shipped",
        date: "2026-08-02",
        items: [
            { product: "Keyboard", price: 30, quantity: 1 }
        ]
    },
    {
        id: 3,
        customer: "Ali",
        status: "Cancelled",
        date: "2026-08-03",
        items: [
            { product: "Monitor", price: 200, quantity: 1 },
            { product: "HDMI Cable", price: 10, quantity: 2 }
        ]
    },
    {
        id: 4,
        customer: "Fatma",
        status: "Pending",
        date: "2026-08-04",
        items: [
            { product: "Headphones", price: 50, quantity: 1 }
        ]
    },
    {
        id: 5,
        customer: "Khalid",
        status: "Shipped",
        date: "2026-08-05",
        items: [
            { product: "Phone", price: 300, quantity: 1 },
            { product: "Phone Case", price: 20, quantity: 1 }
        ]
    },
    {
        id: 6,
        customer: "Mariam",
        status: "Pending",
        date: "2026-08-06",
        items: [
            { product: "Tablet", price: 250, quantity: 1 }
        ]
    },
    {
        id: 7,
        customer: "Hassan",
        status: "Cancelled",
        date: "2026-08-07",
        items: [
            { product: "Smart Watch", price: 100, quantity: 1 }
        ]
    },
    {
        id: 8,
        customer: "Noor",
        status: "Shipped",
        date: "2026-08-08",
        items: [
            { product: "Speaker", price: 75, quantity: 2 }
        ]
    },
    {
        id: 9,
        customer: "Salim",
        status: "Pending",
        date: "2026-08-09",
        items: [
            { product: "Webcam", price: 60, quantity: 1 }
        ]
    },
    {
        id: 10,
        customer: "Aisha",
        status: "Shipped",
        date: "2026-08-10",
        items: [
            { product: "Printer", price: 150, quantity: 1 },
            { product: "Paper", price: 8, quantity: 3 }
        ]
    },
    {
        id: 11,
        customer: "Omar",
        status: "Cancelled",
        date: "2026-08-11",
        items: [
            { product: "USB Drive", price: 25, quantity: 2 }
        ]
    },
    {
        id: 12,
        customer: "Huda",
        status: "Pending",
        date: "2026-08-12",
        items: [
            { product: "Laptop Stand", price: 40, quantity: 1 }
        ]
    },
    {
        id: 13,
        customer: "Yusuf",
        status: "Shipped",
        date: "2026-08-13",
        items: [
            { product: "Router", price: 80, quantity: 1 }
        ]
    },
    {
        id: 14,
        customer: "Layla",
        status: "Pending",
        date: "2026-08-14",
        items: [
            { product: "Microphone", price: 90, quantity: 1 },
            { product: "Cable", price: 12, quantity: 2 }
        ]
    },
    {
        id: 15,
        customer: "Said",
        status: "Shipped",
        date: "2026-08-15",
        items: [
            { product: "External Hard Drive", price: 120, quantity: 1 }
        ]
    }
];

function getOrderTotal(order) {
    return order.items.reduce((total, item) =>
        total + item.price * item.quantity, 0);
}

const sum = getOrderTotal(orders[1]);
console.log(sum);

// total revenue
const totalRevenue = orders.reduce(
    (total, order) => total + getOrderTotal(order),
    0
);

console.log("Total revenue: " + totalRevenue);

const pendingCount = orders.filter(
    order => order.status === "Pending"
).length;

const shippedCount = orders.filter(
    order => order.status === "Shipped"
).length;

const cancelledCount = orders.filter(
    order => order.status === "Cancelled"
).length;

console.log("Pending: " + pendingCount);
console.log("Shipped: " + shippedCount);
console.log("Cancelled: " + cancelledCount);

const highestOrder = orders.reduce((highest, order) => {
    return getOrderTotal(order) > getOrderTotal(highest)
        ? order
        : highest;
});

console.log("customer of highest order: " + highestOrder.customer);
console.log("the highest order price: " + getOrderTotal(highestOrder));

// Check whether every order has at least one item
const everyOrderHasItems = orders.every(
    order => order.items.length > 0
);

console.log("every Order Has Items: "+everyOrderHasItems);