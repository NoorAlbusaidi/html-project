// ============================================
// LOCAL DATA
// ============================================

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


// ============================================
// ARROW FUNCTION
// Creates one Bootstrap product card
// ============================================

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


// ============================================
// REGULAR FUNCTION DECLARATION
// Renders products on the page
// ============================================

function renderProducts(productsToRender) {

    document.getElementById("productList").innerHTML =
        productsToRender
            .map(renderProductCard)
            .join("");
}


// ============================================
// COMPUTED SUMMARY
// Using a plain for...of loop
// ============================================

let totalInventoryValue = 0;
let lowStockCount = 0;

for (const product of products) {

    // Add price × stock
    totalInventoryValue =
        totalInventoryValue + (product.price * product.stock);

    // Count products with stock below 10
    if (product.stock < 10) {
        lowStockCount = lowStockCount + 1;
    }
}


// Display total inventory value
document.getElementById("totalValue").textContent =
    `$${totalInventoryValue}`;


// Display low stock count
document.getElementById("lowStockCount").textContent =
    lowStockCount;


// ============================================
// INITIAL RENDER
// Show all products when page loads
// ============================================

renderProducts(products);


// ============================================
// INTERACTIVE TOGGLE
// ============================================

let showingLowStockOnly = false;

const toggleButton =
    document.getElementById("toggleButton");


toggleButton.addEventListener("click", function () {

    if (showingLowStockOnly) {

        // Show all products
        renderProducts(products);

        toggleButton.textContent =
            "Show Low Stock Only";

        showingLowStockOnly = false;

    } else {

        // Create an array for low-stock products
        const lowStockProducts = [];


        // Use a plain loop
        for (const product of products) {

            if (product.stock < 10) {
                lowStockProducts.push(product);
            }

        }


        // Render only low-stock products
        renderProducts(lowStockProducts);

        toggleButton.textContent =
            "Show All Products";

        showingLowStockOnly = true;
    }

});