// fruits.js
const products = [
    { id: 1, name: '釋迦', price: 185, category: '水果', rating: 4.5, image: 'images/phone.jpg' },
    { id: 2, name: '鳳梨釋迦', price: 270, category: '水果', rating: 4.7, image: 'images/laptop.jpg' },
    { id: 3, name: '枇杷', price: 285, category: '水果', rating: 4.2, image: 'images/jacket.jpg' },
    { id: 4, name: '水蜜桃', price: 395, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 5, name: '玉荷包荔枝', price: 410, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 6, name: '高接梨', price: 175, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 7, name: '鳳梨', price: 55, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 8, name: '梅', price: 120, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 9, name: '臍橙', price: 200, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 10, name: '晚崙西亞橙', price: 165, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 11, name: '白柚', price: 115, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 12, name: '文旦柚', price: 150, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 13, name: '桶柑', price: 83, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 14, name: '百香果', price: 237, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 15, name: '波羅蜜', price: 346, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 16, name: '紅龍果', price: 271, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 17, name: '東河香丁', price: 174, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 18, name: '玉里大西瓜', price: 33, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 19, name: '秀姑巒溪大西瓜', price: 40, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 20, name: '鳳林西瓜', price: 37, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 21, name: '果艷西瓜', price: 26, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 22, name: '木瓜', price: 48, category: '水果', rating: 4.0, image: 'images/tshirt.jpg' },
];

// 過濾出水果類商品
const filteredProducts = products.filter(product => product.category === '水果');

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
