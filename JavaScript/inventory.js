// LOCAL DATA
const products = [
    {
        name: "Laptop",
        price: 450,
        stock: 15,
        category: "Electronics"
    },
    {
        name: "Wireless Mouse",
        price: 20,
        stock: 8,
        category: "Accessories"
    },
    {
        name: "Keyboard",
        price: 35,
        stock: 12,
        category: "Accessories"
    },
    {
        name: "Monitor",
        price: 180,
        stock: 5,
        category: "Electronics"
    },
    {
        name: "Office Chair",
        price: 120,
        stock: 20,
        category: "Furniture"
    },
    {
        name: "USB Cable",
        price: 10,
        stock: 7,
        category: "Accessories"
    }
];

// ARROW FUNCTION
// Creates one Bootstrap product card
const renderProductCard = (product) => {
    return `
        <div class="col-12 col-md-4 mb-3">

            <div class="card h-100">

                <div class="card-body">

                    <h5 class="card-title">
                        ${product.name}
                    </h5>

                    <p class="card-text">
                        <strong>Price:</strong> $${product.price}
                    </p>

                    <p class="card-text">
                        <strong>Stock:</strong> ${product.stock}
                    </p>

                    <p class="card-text">
                        <strong>Category:</strong> ${product.category}
                    </p>

                </div>

            </div>

        </div>
    `;
};
