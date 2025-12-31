// إضافة منتج للسلة
let cart = [];
function addToCart(productId, productName, price) {
    cart.push({ id: productId, name: productName, price: price });
    updateCartCount();
}

// تحديث عدد المنتجات في السلة
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}
