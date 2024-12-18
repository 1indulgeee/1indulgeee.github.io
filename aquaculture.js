const products = [
    { id: 42, name: '九孔', price: 784, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 43, name: '黃金蜆', price: 299, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 44, name: '吳郭魚', price: 150, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 45, name: '蜆', price: 250, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
];

// 過濾出養殖魚類商品
const filteredProducts = products.filter(product => product.category === '養殖魚');

// 渲染商品
function renderProducts() {
    const productList = document.getElementById('product-list');
    filteredProducts.forEach(product => {
        const item = document.createElement('li');
        item.className = 'list-group-item';
        item.innerHTML = `
            <h5>${product.name}</h5>
            <p>價格: $${product.price}</p>
            <p>分類: ${product.category}</p>
            <button class="btn btn-sm btn-success add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">加入購物車</button>
        `;
        productList.appendChild(item);
    });
}
// 加入購物車功能
document.addEventListener('click', e => {
    if (e.target.classList.contains('add-to-cart')) {
        const id = e.target.dataset.id;
        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);

        // 讀取購物車資料
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // 檢查是否已存在購物車中
        const existingItem = cart.find(item => item.id == id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        // 更新本地儲存
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // 彈出確認視窗
        if (confirm(`${name} 已成功加入購物車！是否前往購物車結算？`)) {
            window.location.href = 'cart.html'; // 前往購物車頁面
        }
    }
});
renderProducts();