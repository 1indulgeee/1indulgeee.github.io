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
  
// 模擬月份活動數據
const eventsData = {
    "1": [
        {
            id: 1,
            title: "2025臺東慢食節",
            date: "2025/1/18-1/19",
            location: "台東池上大坡池畔",
            googleMap: "https://maps.google.com?q=台東池上大坡池畔",
            website: "https://slowfoodtaitung.tw/festival",
            image: "https://live.staticflickr.com/65535/51759124892_d857d5accb_b.jpg",
            description: "詳細介紹：2012 年開始，臺東開始推動慢食（slow food） 運動，用「產地餐桌」與「吃在地、品當季」的概念，依季節推出的特色慢食市集、慢食店家評鑑、認識產地的慢食旅等活動，不僅吸引在地店家將特色料理端上桌，也讓更多來自各地的旅人認識臺東豐富的飲食文化、吃下的食物來自什麼產地，以愜意的生活步調，吃當季限定的餐食、喝季節飲品，品嘗屬於這裡的日常滋味與悠閒時光。"
        },
    ],
    "12": [
        {
            id: 2,
            title: "富里鄉第六屆稻草藝術季(動物迷蹤之非洲大草原)",
            date: "2024/12/24-",
            location: "台東市富里鄉羅山村9鄰東湖9號",
            googleMap: "https://maps.google.com?q=富里鄉羅山村9鄰東湖9號",
            website: "https://www.facebook.com/Fulifarmersassociation",
            image: "https://www.gotherebnb.com/wp-content/uploads/2023/01/0124.jpg",
            description: "詳細介紹：富里鄉稻草藝術季邁入第六屆，以稻草和竹子結合在地藝術家創作成多樣藝術品，成為花蓮觀光亮點，吸引遊客穿梭園區，推廣優質農產品並提升知名度。藝術季以農業廢棄物轉化為藝術作品，展現創新與循環，帶動富里永續發展。活動期間，園區內盛開的花海與稻草藝術作品相輝映，並結合音樂饗宴與農特產品展銷，讓遊客盡享藝術、美食與田園風光，成為冬、春季旅遊的最佳選擇。"
        },
        {
            id: 3,
            title: "池上米米情懷果香濃一日遊",
            date: "2024/12/01-2024/12/30",
            location: "臺東縣池上鄉85-6號",
            googleMap: "https://maps.google.com?q=958台東縣池上鄉85-6號",
            website: "https://www.csfa.org.tw/zh-tw/experience/detail/94",
            image: "https://lh5.googleusercontent.com/p/AF1QipOb171Ah4wMV9GhjW2dzV9PtRcdaau6dhiFpRsL=w1080-h624-n-k-no",
            description:"詳細介紹：池上米米情懷果香濃一日遊，",
            description:"【食農教育棚】稻草健康搥打棒-環保資材再利用",
            description:"【大地劇場花卉畫布】占地2.5公頃大地畫布拍照打卡放空",
            description:"【池農田媽媽餐廳】農村豐收飯-可帶回一組碗筷及花布包",
            description:"【金色豐收館】早期農機具展示空間",
            description:"【米開朗花園民宿】莎梨橄欖醃漬體驗",
            description:"【阿裕果園】紅龍果採果、紅龍果果醬體驗",
            description:"【伴手館】池農稻浪館",
            description:"池上附加的超療育自然景觀，池上金黃稻浪5 -6月:11月，",
            description:"綠油油稻田8-10月",
            description:"縱谷大地藝術季-漂鳥197，",
            description:"農村生態秘境之中，邀您一同啟程，身歷其境感受地景與藝術交織的美好。",
        }
    ]
};

const eventsContainer = document.getElementById("eventsContainer");
const eventDetail = document.getElementById("eventDetail");
const eventContent = document.getElementById("eventContent");
const backToEvents = document.getElementById("backToEvents");

// 收藏列表
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// 渲染活動列表
function renderEvents(month) {
    eventsContainer.innerHTML = "";
    const events = eventsData[month] || [];

    if (events.length === 0) {
        eventsContainer.innerHTML = `<div class='no-events'>暫無活動，去看看其他月份吧！</div>`;
        return;
    }

    events.forEach(event => {
        const card = document.createElement("div");
        card.className = "col-md-6 mb-4";
        card.innerHTML = `
            <div class="card event-card" data-id="${event.id}">
                <img src="${event.image}" alt="活動圖片" class="card-img-top rounded" style="width: 100%; height: 300px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">日期：${event.date}</p>
                    <p class="card-text">地點：${event.location}</p>
                    <button class="btn btn-outline-success btn-sm add-to-favorites" data-id="${event.id}">加入收藏</button>
                </div>
            </div>
        `;
        eventsContainer.appendChild(card);
    });

    eventsContainer.style.display = "flex";
    eventDetail.style.display = "none";


    /// 綁定加入收藏按鈕
    document.querySelectorAll(".add-to-favorites").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // 防止事件冒泡到父級卡片
            const eventId = parseInt(e.target.dataset.id, 10);
            addToFavorites(eventId);
        });
    });
}

// 加入收藏
function addToFavorites(eventId) {
    const event = Object.values(eventsData).flat().find(e => e.id === eventId);
    if (!event || favorites.some(f => f.id === eventId)) return;

    favorites.push(event);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("已加入收藏！");
}

// 顯示活動詳情
function showEventDetail(eventId) {
    const event = Object.values(eventsData).flat().find(e => e.id === eventId);
    if (!event) return;

    eventContent.innerHTML = `
        <img src="${event.image}" alt="活動圖片" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        <h3>${event.title}</h3>
        <p>日期：${event.date}</p>
        <p>地點：${event.location}</p>
        <p>${event.description}</p>
        <iframe src="${event.googleMap}&output=embed" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <p><a href="${event.website}" target="_blank" class="btn btn-primary">查看活動官方網站</a></p>
    `;

    eventsContainer.style.display = "none";
    eventDetail.style.display = "block";
}

// 返回活動列表
backToEvents.addEventListener("click", () => {
    eventsContainer.style.display = "flex";
    eventDetail.style.display = "none";
});

// 點擊卡片顯示詳情
eventsContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".event-card");
    if (card) {
        const eventId = parseInt(card.dataset.id, 10);
        showEventDetail(eventId);
    }
});

// 切換月份顯示活動
document.querySelectorAll(".calendar .btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".calendar .btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderEvents(btn.dataset.month);
    });
});

const currentMonth = new Date().getMonth() + 1; // 獲取當前月份（1-12）
renderEvents(String(currentMonth)); // 將數字轉為字串並渲染對應月份活動
