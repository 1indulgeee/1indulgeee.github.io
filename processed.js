const products = [
    { id: 46, name: '福鹿茶', price: 425, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 47, name: '太峰茶', price: 384, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 48, name: '天鶴茶', price: 487, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 49, name: '曼波香腸', price: 587, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 50, name: '曼波魚丸', price: 490, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 51, name: '曼波魚鬆', price: 355, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 52, name: '麻糬', price: 250, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 53, name: '雷古多', price: 400, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 54, name: '花蓮薯', price: 300, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 55, name: '菩提酥', price: 350, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 56, name: '漂流木餅', price: 447, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 57, name: '紅玉火龍餅', price: 469, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 58, name: '郭火腿', price: 450, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 59, name: '剝皮辣椒', price: 375, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 60, name: '酸菜', price: 180, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 61, name: '紅藜醬油', price: 326, category: '加工食品', rating: 4.0, image: 'images/tshirt.jpg' },
];

const filteredProducts = products.filter(product => product.category === '加工食品');

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