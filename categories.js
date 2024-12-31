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
// 切換詳細介紹內容
function toggleReadMore(element, fullText) {
  if (element.innerHTML === "閱讀更多") {
      element.innerHTML = fullText;
  } else {
      element.innerHTML = "閱讀更多";
  }
}
// Scroll to section
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 新增到購物車功能（支援數量合併）
function addToCart(name, price) {
  // 獲取商品數量
  const quantityInput = document.getElementById(`quantity-${name}`);
  const quantity = parseInt(quantityInput.value) || 1;

  // 獲取商品圖片
  const imageSrc = document.querySelector(`[alt="${name}"]`).src;

  // 從 localStorage 獲取現有的購物車數據
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
      existingItem.quantity += quantity; // 如果商品已存在，增加數量
  } else {
      cart.push({ name, price, quantity, image: imageSrc }); // 如果商品不存在，新增
  }

  // 保存到 localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // 計算當前該商品的總購買數量
  const totalQuantity = cart.find(item => item.name === name).quantity;

  // 顯示通知
  alert(`您已購買 ${name} 共 ${totalQuantity} 件！`);

  // 重新渲染購物車
  renderCart();
}



