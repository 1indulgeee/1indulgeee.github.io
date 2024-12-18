// fish.js
const products = [
    { id: 23, name: '飛魚', price: 276, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 24, name: '旗魚', price: 375, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 25, name: '鮪魚', price: 450, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 26, name: '鬼頭刀', price: 332, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 27, name: '鰭魚', price: 399, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 28, name: '柴魚', price: 483, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 29, name: '油帶魚', price: 372, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 30, name: '曼波魚', price: 566, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 31, name: '土托魚', price: 181, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 32, name: '馬加魚', price: 260, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 33, name: '鰆魚', price: 348, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 34, name: '紅甘', price: 274, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 35, name: '魟魚', price: 498, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 36, name: '海鱺', price: 525, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 37, name: '甘仔魚', price: 175, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 38, name: '白帶魚', price: 365, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 39, name: '水針魚', price: 217, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 40, name: '南魷', price: 432, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 41, name: '鯪鯕魷', price: 450, category: '魚', rating: 4.0, image: 'images/tshirt.jpg' },
];

// 過濾出魚類商品
const filteredProducts = products.filter(product => product.category === '魚');

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