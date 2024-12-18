const products = [
    { id: 62, name: '金針', price: 275, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 63, name: '洛神花', price: 350, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 64, name: '稻米', price: 65, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 65, name: '紅甘蔗', price: 40, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 66, name: '山藥', price: 150, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 67, name: '山蘇', price: 110, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 68, name: '芋心蕃薯', price: 80, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 69, name: '黃籐', price: 300, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 70, name: '紅糯米', price: 90, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 71, name: '菱角', price: 90, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 72, name: '芋頭', price: 95, category: '蔬菜', rating: 4.0, image: 'images/tshirt.jpg' },
];

const filteredProducts = products.filter(product => product.category === '蔬菜');

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