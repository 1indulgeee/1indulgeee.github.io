// 收藏列表
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const favoritesContainer = document.getElementById("favoritesContainer");

// 購物車列表
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartContainer");

// 渲染收藏列表
function renderFavorites() {
  favoritesContainer.innerHTML = "";
  if (favorites.length === 0) {
      favoritesContainer.innerHTML = `<p class='no-items'>目前沒有收藏的活動。</p>`;
      return;
  }

  favorites.forEach(event => {
      const item = document.createElement("div");
      item.className = "mb-3 p-3 border rounded";
      item.style.backgroundColor = "#f9f9f9";
      item.innerHTML = `
          <div>
              <h5>${event.title}</h5>
              <p>日期：${event.date}</p>
              <p>地點：${event.location}</p>
              <button class="btn btn-primary btn-sm" onclick="goToEventPage('${event.website}')">查看活動頁面</button>
              <button class="btn btn-danger btn-sm" onclick="removeFavorite(${event.id})">移除收藏</button>
          </div>
      `;
      favoritesContainer.appendChild(item);
  });
}


// 渲染購物車列表
function renderCart() {
  cartContainer.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
      cartContainer.innerHTML = `<p class='no-items'>目前購物車內沒有商品。</p>`;
      return;
  }

  let total = 0;
  cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const card = document.createElement("div");
      card.className = "cart-item d-flex align-items-center mb-3";
      card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="item-image mr-3">
          <div class="item-details flex-grow-1">
              <h6 class="item-name">${item.name}</h6>
              <p class="item-price">單價：$${item.price}</p>
              <div class="input-group">
                  <input 
                      type="number" 
                      class="form-control quantity-input" 
                      value="${item.quantity}" 
                      min="1" 
                      onchange="updateQuantity('${item.name}', this.value)" />
                  <button 
                      class="btn btn-danger btn-sm ml-2" 
                      onclick="removeCartItem('${item.name}')">移除</button>
              </div>
          </div>
          <p class="item-total ml-3">小計：$${itemTotal}</p>
      `;
      cartContainer.appendChild(card);
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "text-center mt-4";
  totalDiv.innerHTML = `<h4>總金額：$${total}</h4>`;
  cartContainer.appendChild(totalDiv);
}



// 更新購物車商品數量
function updateQuantity(name, newQuantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(item => item.name === name);

  if (item) {
      const quantity = parseInt(newQuantity);
      if (isNaN(quantity) || quantity <= 0) {
          alert("數量必須為有效的正整數！");
          return;
      }
      item.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
  }
}



// 查看活動頁面
function goToEventPage(website) {
    window.open(website, '_blank');
}

// 移除收藏
function removeFavorite(eventId) {
    const index = favorites.findIndex(event => event.id === eventId);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        renderFavorites();
    }
}

// 清空收藏
function clearFavorites() {
    favorites.length = 0;
    localStorage.removeItem("favorites");
    renderFavorites();
}



// 移除購物車商品
function removeCartItem(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}


// 清空購物車
function clearCart() {
  cart.length = 0;
  localStorage.removeItem("cart");
  renderCart();
}

// 初始化渲染
renderFavorites();
renderCart();

// 顯示回到頂部按鈕
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
  };
  
  // 點擊回到頂部
  document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  // Scroll to section
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }