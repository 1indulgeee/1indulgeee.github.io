// 初始化購物車顯示
const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${item.name} - 數量：${item.quantity} - 小計：$${item.price * item.quantity}
            <button class="btn btn-sm btn-danger remove-btn" data-id="${item.id}">刪除</button>
        `;
        cartList.appendChild(li);
    });

    totalPriceElement.textContent = `總價：$${total}`;
}
renderCart();

// 刪除商品
cartList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const productId = event.target.dataset.id;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
});

// 付款按鈕
checkoutButton.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('購物車為空，無法付款！');
        return;
    }

    alert('付款成功！感謝您的購買。');
    localStorage.removeItem('cart'); // 清空購物車
    renderCart();
});
<script src="cart.js"></script>
