let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItems.innerHTML = '';
    total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ₹${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    
    totalElement.textContent = total.toFixed(2);
}
