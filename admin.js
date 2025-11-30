const ADMIN_PASSWORD = "admin"; // Simple password
const STORAGE_KEY = "acme_products";
const ORDERS_KEY = "acme_orders";

// Initial static products to populate if storage is empty
const INITIAL_PRODUCTS = [
    {
        name: "Bella Vita",
        price: "Rs 300.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965",
        link: "/product/bella-vite.html"
    },
    {
        name: "Acme Drawstring Bag",
        price: "$12.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304",
        link: "/product/acme-drawstring-bag"
    },
    {
        name: "Acme Cup",
        price: "$15.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088",
        link: "/product/acme-cup"
    },
    {
        name: "Acme Hoodie",
        price: "$50.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482",
        link: "/product/acme-hoodie"
    }
];

// --- Authentication ---

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    if (input === ADMIN_PASSWORD) {
        document.getElementById('loginModal').classList.add('hidden');
        document.getElementById('adminContent').classList.remove('hidden');
        loadProducts();
        loadOrders();
    } else {
        document.getElementById('loginError').classList.remove('hidden');
    }
}

function logout() {
    location.reload();
}

// --- Tab Management ---

function switchTab(tabName) {
    const productsSection = document.getElementById('productsSection');
    const ordersSection = document.getElementById('ordersSection');
    const tabProducts = document.getElementById('tabProducts');
    const tabOrders = document.getElementById('tabOrders');

    if (tabName === 'products') {
        productsSection.classList.remove('hidden');
        ordersSection.classList.add('hidden');

        tabProducts.classList.add('border-blue-600', 'text-blue-600');
        tabProducts.classList.remove('border-transparent');

        tabOrders.classList.remove('border-blue-600', 'text-blue-600');
        tabOrders.classList.add('border-transparent');
    } else {
        productsSection.classList.add('hidden');
        ordersSection.classList.remove('hidden');

        tabOrders.classList.add('border-blue-600', 'text-blue-600');
        tabOrders.classList.remove('border-transparent');

        tabProducts.classList.remove('border-blue-600', 'text-blue-600');
        tabProducts.classList.add('border-transparent');

        loadOrders(); // Refresh orders when switching tab
    }
}

// --- Product Management ---

function getProducts() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            // Initialize with default if empty
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
            return INITIAL_PRODUCTS;
        }
        return JSON.parse(stored);
    } catch (e) {
        console.error("Error accessing localStorage:", e);
        alert("Error accessing storage. Changes might not be saved.");
        return INITIAL_PRODUCTS;
    }
}

function saveProducts(products) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        renderProducts();
    } catch (e) {
        console.error("Error saving to localStorage:", e);
        alert("Failed to save changes.");
    }
}

function loadProducts() {
    renderProducts();
}

function renderProducts() {
    const products = getProducts();
    const list = document.getElementById('productList');
    if (!list) return;
    list.innerHTML = '';

    products.forEach((prod, index) => {
        const item = document.createElement('div');
        item.className = "flex items-center justify-between p-4 border rounded hover:bg-gray-50";
        item.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${prod.image}" alt="${prod.name}" class="w-12 h-12 object-contain border rounded">
                <div>
                    <h3 class="font-bold">${prod.name}</h3>
                    <p class="text-sm text-gray-600">${prod.price}</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button data-action="edit" data-index="${index}" class="text-blue-600 hover:text-blue-800 font-medium px-2 py-1">Edit</button>
                <button data-action="delete" data-index="${index}" class="text-red-600 hover:text-red-800 font-medium px-2 py-1">Delete</button>
            </div>
        `;
        list.appendChild(item);
    });
}

// --- Order Management ---

function getOrders() {
    try {
        const stored = localStorage.getItem(ORDERS_KEY);
        if (!stored) {
            return [];
        }
        return JSON.parse(stored);
    } catch (e) {
        console.error("Error accessing localStorage for orders:", e);
        return [];
    }
}

function loadOrders() {
    renderOrders();
}

function renderOrders() {
    const orders = getOrders();
    const list = document.getElementById('orderList');
    if (!list) return;
    list.innerHTML = '';

    if (orders.length === 0) {
        list.innerHTML = '<tr><td colspan="9" class="px-4 py-8 text-center text-gray-500">No orders found.</td></tr>';
        return;
    }

    // Sort orders by date (newest first)
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.className = "border-b hover:bg-gray-50";

        const date = new Date(order.date).toLocaleDateString();
        const shortId = order.id.substring(0, 8);

        // Determine status badge color
        const statusClass = order.status === 'confirmed'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800';

        const statusText = order.status === 'confirmed' ? 'Confirmed' : 'Pending';

        row.innerHTML = `
            <td class="px-4 py-2 text-sm font-mono">${shortId}...</td>
            <td class="px-4 py-2">${order.customerName}</td>
            <td class="px-4 py-2 text-sm">${order.customerEmail || 'N/A'}</td>
            <td class="px-4 py-2 text-sm">${order.customerAddress || 'N/A'}</td>
            <td class="px-4 py-2">${order.productName}</td>
            <td class="px-4 py-2">${order.price}</td>
            <td class="px-4 py-2 text-sm">${date}</td>
            <td class="px-4 py-2">
                <span class="px-2 py-1 ${statusClass} rounded-full text-xs font-semibold">${statusText}</span>
            </td>
            <td class="px-4 py-2">
                ${order.status === 'pending'
                ? `<button onclick="confirmOrder(${index})" class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">Confirm</button>`
                : '<span class="text-gray-400 text-sm">-</span>'}
            </td>
        `;
        list.appendChild(row);
    });
}

function confirmOrder(index) {
    const orders = getOrders();
    if (orders[index]) {
        orders[index].status = 'confirmed';
        saveOrders(orders);
    }
}

function saveOrders(orders) {
    try {
        localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
        renderOrders();
    } catch (e) {
        console.error("Error saving orders:", e);
        alert("Failed to update order status.");
    }
}

// --- CRUD Operations ---

// Add Product Form
const addForm = document.getElementById('addProductForm');
if (addForm) {
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newProd = {
            name: document.getElementById('newProdName').value,
            price: document.getElementById('newProdPrice').value,
            image: document.getElementById('newProdImage').value,
            link: document.getElementById('newProdLink').value
        };

        const products = getProducts();
        products.push(newProd);
        saveProducts(products);
        e.target.reset();
    });
}

// Event Delegation for Edit/Delete
const productList = document.getElementById('productList');
if (productList) {
    productList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        const action = btn.dataset.action;
        const index = parseInt(btn.dataset.index, 10);

        if (isNaN(index)) return;

        if (action === 'delete') {
            deleteProduct(index);
        } else if (action === 'edit') {
            editProduct(index);
        }
    });
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        const products = getProducts();
        products.splice(index, 1);
        saveProducts(products);
    }
}

function editProduct(index) {
    const products = getProducts();
    const prod = products[index];

    const newName = prompt("Enter new name:", prod.name);
    if (newName === null) return;

    const newPrice = prompt("Enter new price:", prod.price);
    if (newPrice === null) return;

    const newImage = prompt("Enter new image URL:", prod.image);
    if (newImage === null) return;

    const newLink = prompt("Enter new product link:", prod.link || "");
    if (newLink === null) return;

    // Update the product at the specific index
    products[index] = {
        name: newName,
        price: newPrice,
        image: newImage,
        link: newLink
    };
    saveProducts(products);
}
