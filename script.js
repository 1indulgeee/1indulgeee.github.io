// 商品列表
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
    { id: 42, name: '九孔', price: 784, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 43, name: '黃金蜆', price: 299, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 44, name: '吳郭魚', price: 150, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
    { id: 45, name: '蜆', price: 250, category: '養殖魚', rating: 4.0, image: 'images/tshirt.jpg' },
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

// 初始化商品列表
const productList = document.getElementById('product-list');

function renderProducts() {
    productList.innerHTML = ''; // 確保每次渲染時清空列表
    products.forEach(product => {
        const item = document.createElement('li');
        item.className = 'list-group-item';
        item.innerHTML = `
            <div class="d-flex align-items-center">
                <!-- 顯示圖片 -->
                <img src="${product.image}" alt="${product.name}" class="me-3" style="width: 100px; height: auto; object-fit: cover;"> 
                <div>
                    <h5>${product.name}</h5>
                    <p>價格: $${product.price}</p>
                    <p>分類: ${product.category}</p>
                    <button class="btn btn-sm btn-success add-to-cart" 
                            data-id="${product.id}" 
                            data-name="${product.name}" 
                            data-price="${product.price}">
                        加入購物車
                    </button>
                </div>
            </div>
        `;
        productList.appendChild(item);
    });
}
renderProducts();

// 處理加入購物車
productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.dataset.id;
        const productName = event.target.dataset.name;
        const productPrice = parseFloat(event.target.dataset.price);

        // 儲存至 Local Storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        // 提示視窗
        if (confirm('商品已加入購物車！是否前往購物車結算？')) {
            window.location.href = 'cart.html';
        }
    }
});
