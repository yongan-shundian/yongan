// 多語系字串（可擴充）
const translations = {
  "zh-Hant": {
    nav_home: "首頁",
    nav_about: "關於",
    nav_events: "活動",
    nav_gallery: "畫廊",
    nav_contact: "聯絡",
    hero_title: "溫暖的傳統，當代的生活",
    hero_sub: "在這裡你可以認識永安順王（順王）信仰、參與社區活動，並提升身心內涵。",
    cta_learn: "了解更多",
    cta_events: "近期活動",
    about_title: "關於永安順王",
    beliefs_title: "信仰與傳統",
    beliefs_text: "介紹祭祀方式、節慶、祭典時間與禁忌等。",
    wellness_title: "身心提升",
    wellness_text: "結合靜坐、義工、社區活動，促進內在修養與身體健康。",
    visit_title: "來訪資訊",
    visit_text: "建議交通、參拜流程、照片與常見問答 (FAQ)。",
    events_title: "近期活動",
    gallery_title: "畫廊",
    contact_title: "聯絡我們",
    contact_sub: "有問題、想提供歷史資料或願意成為義工？歡迎留言。",
    form_name: "姓名",
    form_email: "電子郵件",
    form_message: "留言",
    form_submit: "送出",
    contact_address_label: "地址：",
    contact_phone_label: "電話："
  },
  "en": {
    nav_home: "Home",
    nav_about: "About",
    nav_events: "Events",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    hero_title: "Warm Tradition, Contemporary Life",
    hero_sub: "Learn about Yong'an / Shun Wang, join community events, and enrich your mind & body.",
    cta_learn: "Learn more",
    cta_events: "Events",
    about_title: "About Yong'an · Shun Wang",
    beliefs_title: "Beliefs & Tradition",
    beliefs_text: "Overview of rituals, festivals and customary practices.",
    wellness_title: "Wellness",
    wellness_text: "Combine meditation, volunteering and community activities for inner growth.",
    visit_title: "Visitor Info",
    visit_text: "Transport tips, visit etiquette, photos & FAQ.",
    events_title: "Upcoming Events",
    gallery_title: "Gallery",
    contact_title: "Contact Us",
    contact_sub: "Questions, historic materials or volunteering? Leave us a message.",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_submit: "Send",
    contact_address_label: "Address:",
    contact_phone_label: "Phone:"
  },
  "ja": {
    nav_home: "ホーム",
    nav_about: "概要",
    nav_events: "イベント",
    nav_gallery: "ギャラリー",
    nav_contact: "お問い合わせ",
    hero_title: "温かい伝統、現代の暮らし",
    hero_sub: "永安／順王の信仰を学び、地域の活動に参加して心身を豊かに。",
    cta_learn: "もっと知る",
    cta_events: "イベント",
    about_title: "永安・順王について",
    beliefs_title: "信仰と伝統",
    beliefs_text: "祭礼、祝祭日、ならわしの紹介。",
    wellness_title: "ウェルネス",
    wellness_text: "瞑想、ボランティア、地域活動で内面と身体を育む。",
    visit_title: "訪問情報",
    visit_text: "アクセス・参拝の流れ・写真・FAQ。",
    events_title: "今後のイベント",
    gallery_title: "ギャラリー",
    contact_title: "お問い合わせ",
    contact_sub: "資料提供や参加希望があればメッセージください。",
    form_name: "お名前",
    form_email: "メール",
    form_message: "メッセージ",
    form_submit: "送信",
    contact_address_label: "住所：",
    contact_phone_label: "電話："
  },
  "ko": {
    nav_home: "홈",
    nav_about: "소개",
    nav_events: "행사",
    nav_gallery: "갤러리",
    nav_contact: "문의",
    hero_title: "따뜻한 전통, 현대의 삶",
    hero_sub: "영안(永安)·순왕의 신앙을 배우고 지역활동에 참여해 마음과 몸을 풍요롭게 하세요.",
    cta_learn: "자세히 보기",
    cta_events: "행사",
    about_title: "영안·순왕 소개",
    beliefs_title: "신앙과 전통",
    beliefs_text: "의례, 축제, 관습 소개.",
    wellness_title: "웰니스",
    wellness_text: "명상, 자원봉사, 지역활동으로 내적 성장과 건강을 도모합니다.",
    visit_title: "방문 정보",
    visit_text: "교통, 참배 예절, 사진, FAQ.",
    events_title: "예정된 행사",
    gallery_title: "갤러리",
    contact_title: "문의하기",
    contact_sub: "자료 제공이나 자원봉사 신청은 메시지로 알려주세요.",
    form_name: "이름",
    form_email: "이메일",
    form_message: "메시지",
    form_submit: "전송",
    contact_address_label: "주소：",
    contact_phone_label: "전화："
  }
};

let currentLang = 'zh-Hant';

// 將頁面上的 data-key 替換成對應語系文字
function applyTranslations() {
  document.documentElement.lang = currentLang;
  const dict = translations[currentLang] || translations['zh-Hant'];
  document.querySelectorAll('[data-key]').forEach(el=>{
    const key = el.getAttribute('data-key');
    if(dict[key]) el.textContent = dict[key];
  });
  // 語言按鈕文字
  const langBtn = document.getElementById('lang-toggle');
  const label = (currentLang === 'zh-Hant')? '中文 ▾' : (currentLang === 'en')? 'EN ▾' : (currentLang === 'ja')? '日本語 ▾' : '한국어 ▾';
  langBtn.textContent = label;
  // 年份
  document.getElementById('year').textContent = new Date().getFullYear();
}

// 切換語言（簡單的按鈕循環）
document.getElementById('lang-toggle').addEventListener('click', ()=>{
  const keys = Object.keys(translations);
  const idx = keys.indexOf(currentLang);
  const next = keys[(idx + 1) % keys.length];
  currentLang = next;
  applyTranslations();
});

// 初始翻譯
applyTranslations();

// 聯絡表單（前端示例）
// 實務上應透過後端 API 或 email service 處理
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    alert('請填寫所有欄位');
    return false;
  }
  // 暫時用 alert 示範
  alert('感謝你的留言！我們會盡快回覆。');
  // 清空表單
  e.target.reset();
  return false;
}