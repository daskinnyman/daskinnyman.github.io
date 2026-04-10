export type Project = {
  slug: string;
  name: string;
  order: number;
  skills: string[];
  linkUrl?: string;
  thumb: string;
  thumbGradient: [string, string]; // from, to for background gradient
  intro: string;
  responsibilities: string[];
  techUsed: { name: string; description: string }[];
  screenshots: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "furmap",
    name: "Furmap 毛孩地圖",
    order: 6,
    skills: ["React Native", "Nest.js", "Azure", "MongoDB"],
    linkUrl:
      "https://apps.apple.com/tw/app/%E6%AF%9B%E5%AD%A9%E5%9C%B0%E5%9C%96/id1511108193",
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1615386607/Custom_Size_1_duzbnv.png",
    thumbGradient: ["#f59e0b22", "#f59e0b08"],
    intro:
      "Furmap 毛孩地圖是我和幾個大學同學一起利用閒暇之餘開發的寵物資訊整合 App。有鑒於許多寵物相關資訊都散落在臉書的各大寵物社團中，例如：推薦的寵物友善地點、附近的寵物危害事件、寵物走失等。我們希望能夠整合這些資訊減少寵物飼主的負擔，建立一個具備所有資訊的寵物社群。目前已在 Google Play 及 App Store 上架。",
    responsibilities: [
      "從零開始規劃及開發後端及 App 程式，並在後端導入單元測試提高程式碼品質。",
      "使用六角架構將原先存在 controller 中的大量程式碼分別移入 application service 及 domain service 層。",
      "在前端封裝 Axios，並使用 http interceptor 在 request 發送前統一加入後端需要的 header，並統一管理 http response 的錯誤處理。",
    ],
    techUsed: [
      {
        name: "React Native",
        description:
          "作為跨平台 App 開發框架，搭配 Redux 及 React Hook 來建構程式碼。",
      },
      {
        name: "Nest.js",
        description:
          "用於開發後端服務搭配 Passport.js 建立 Sign in with Facebook/Apple 的客製化認證。串接 Firebase Cloud Message 提供後端發送推播的能力，使用 TypeScript 及 Jest 做單元測試，搭配六角架構進行程式架構優化。",
      },
      {
        name: "Azure",
        description:
          "利用 AKS、Azure Cache for Redis 等服務建立可以 Auto scale up/scale out 的後端服務。",
      },
    ],
    screenshots: [
      { src: "/projects/furmap/map.png", caption: "發生的寵物危害件及寵物友善地點會出現在地圖上" },
      { src: "/projects/furmap/nearby-place.png", caption: "寵物友善地點列表" },
      { src: "/projects/furmap/place-detail.png", caption: "寵物友善地點細節" },
      { src: "/projects/furmap/place-photos.png", caption: "寵物友善地點的照片" },
      { src: "/projects/furmap/create-event.png", caption: "發布寵物危害件" },
      { src: "/projects/furmap/me.png", caption: "個人檔案" },
    ],
  },
  {
    slug: "taischool",
    name: "翔泰學校",
    order: 5,
    skills: ["Angular", "RWD Design", ".NET Core"],
    linkUrl: "https://taischool.com",
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1584212257/cover_t0fkw8.png",
    thumbGradient: ["#0a72ef22", "#0a72ef08"],
    intro:
      "在學生時期，我常跟朋友一起接外包專案，除了磨練自己的技術以外，也可以接觸到業界的作業流程。翔泰學校是一個以投資理財為主的影音教學網站，在這個專案中我和 UI/UX 設計師一起討論並依照設計規範開發前端網站，也利用 Swagger 作為 API 文件，同時嘗試使用 .NET Core 撰寫 OTP 服務。",
    responsibilities: [
      "使用 Angular 建立網站前端，依照設計稿開發元件及畫面，並串接金流。",
      "使用 .NET 撰寫 OTP (One Time Password) 服務，並提供前端 API 呼叫。",
      "提供使用者網站在手機、平板、iPad Pro 的解析度下能直覺操作的 RWD 設計。",
    ],
    techUsed: [
      {
        name: "Angular",
        description:
          "使用 LazyLoad Module 建立前端畫面及元件，使用 RxJS 串接後端 API 及金流，利用 Router Guard 在前端進行權限驗證並阻擋沒有權限的使用者進入頁面。",
      },
      {
        name: ".NET Core",
        description: "建立 OTP (One Time Password) 服務 API。",
      },
    ],
    screenshots: [
      { src: "/projects/taischool/home.png", caption: "首頁" },
      { src: "/projects/taischool/allvideo.png", caption: "影片列表" },
      { src: "/projects/taischool/notifications.png", caption: "個人通知管理" },
      { src: "/projects/taischool/videopage.png", caption: "影片頁面" },
      { src: "/projects/taischool/homemobile.png", caption: "手機版首頁" },
      { src: "/projects/taischool/menumobile.png", caption: "手機版選單" },
      { src: "/projects/taischool/allvideomobile.png", caption: "手機版影片列表" },
      { src: "/projects/taischool/videopagemobile.png", caption: "手機版影片頁面" },
    ],
  },
  {
    slug: "elite-incubator",
    name: "菁英人才孵化器",
    order: 4,
    skills: ["Vue", "Angular", "Ionic", "Firebase", "Cloud Functions"],
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/c_scale,w_376/v1540028311/app-login_gxgypt.png",
    thumbGradient: ["#10b98122", "#10b98108"],
    intro:
      "在實習期間，我接受實習計畫主管的委託，和同事一起腦力激盪出一個可以提供實習生們紀錄實習生活、提高實習生參與活動意願的 Web App - 菁英人才孵化器。這個 Web App 有兩次迭代：第一版使用 Vue.js 搭配 Firebase Realtime Database 開發，第二版改用 Angular 搭配 Ionic framework 及 Cloud Firestore。",
    responsibilities: [
      "使用 Angular 及 Vue 建立 Mobile Web App，及管理者介面。",
      "將匯入實習生資料的程式包裝成 Cloud Functions。",
      "設計 Mobile Web App 及管理者介面 UI/UX。",
    ],
    techUsed: [
      {
        name: "Vue 2",
        description: "作為第一版的前端開發框架，利用 Vuex 做全局狀態管理。",
      },
      {
        name: "Angular",
        description:
          "搭配 Ionic framework 及 NG-Zorro 加快網站開發速度，使用 Router Guard 在前端進行權限驗證。",
      },
      {
        name: "Firebase",
        description:
          "使用 Authentication 作為登入認證服務簡化開發流程，利用 Realtime Database / Cloud Firestore 作為資料庫，並建立 Cloud Functions 將批次上傳資料的工作包裝為 API。",
      },
    ],
    screenshots: [
      { src: "/projects/elite-incubator/app-login.png", caption: "登入畫面 (v1)" },
      { src: "/projects/elite-incubator/user-ui.png", caption: "首頁 (v1)" },
      { src: "/projects/elite-incubator/skill.png", caption: "使用者技能畫面 (v1)" },
      { src: "/projects/elite-incubator/leave-ui.png", caption: "請假申請 (v1)" },
      { src: "/projects/elite-incubator/admin-ui.png", caption: "管理者介面 (v1)" },
      { src: "/projects/elite-incubator/new-user-ui.PNG", caption: "首頁 (v2)" },
      { src: "/projects/elite-incubator/newforget.png", caption: "補報班申請 (v2)" },
      { src: "/projects/elite-incubator/newpersonal.PNG", caption: "個人頁面 (v2)" },
      { src: "/projects/elite-incubator/newpostdetail.PNG", caption: "發文內容 (v2)" },
    ],
  },
  {
    slug: "Woof",
    name: "Woof",
    order: 3,
    skills: ["React Native", "Firebase"],
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1540047389/woof.png",
    thumbGradient: ["#f97316aa", "#f9731622"],
    intro:
      "在學期間與碩士班實驗室同學參加全國移動應用創新競賽獲得佳作的作品，是一款可以利用寵物來交友的社交軟體。除了社交以外也可以藉由紀錄與寵物散步的時間距離做排行，提供地圖功能讓使用者查看附近誰正在與寵物散步，掃描 QR Code 加好友並聊天。",
    responsibilities: [
      "使用 React Native 進行 App 開發，並使用 Firebase Cloud Firestore 撰寫相關資料撈取邏輯及規劃資料欄位。",
      "使用 Scrum 管理專案分工進度，與同學們一起規劃 App 的 User Story、估算 effort point。",
    ],
    techUsed: [
      {
        name: "React Native",
        description:
          "作為跨平台 App 開發框架，搭配 Redux 及 React Hook 來建構程式碼。",
      },
      {
        name: "Firebase",
        description:
          "使用 Cloud Firestore 作為主要資料庫。利用 Realtime Database 的資料監聽功能實作即時收發打招呼訊息的功能。",
      },
    ],
    screenshots: [
      { src: "/projects/petio/app-ui.png", caption: "App 登入畫面" },
      { src: "/projects/petio/chat.png", caption: "聊天功能" },
      { src: "/projects/petio/score.png", caption: "溜寵排行榜" },
      { src: "/projects/petio/map.png", caption: "顯示附近的使用者" },
      { src: "/projects/petio/woof!.png", caption: "收到附近使用者的打招呼訊息" },
    ],
  },
  {
    slug: "ktbPib",
    name: "KTB PIB",
    order: 2,
    skills: ["Angular", "UI/UX", "Ionic"],
    linkUrl:
      "https://apps.apple.com/tw/app/%E4%BA%AC%E5%9F%8E%E8%A1%8C%E5%8B%95%E9%8A%80%E8%A1%8C/id1152332043",
    thumb: "https://customer.ktb.com.tw/new/pic/00/00/01/91-fc1fe6503d4b4266.jpg",
    thumbGradient: ["#7c3aed22", "#7c3aed08"],
    intro:
      "在碩士班期間，我參加了台灣微軟的未來生涯實習計畫，被分派到 Microsoft Consulting Service 部門參與銀行專案。身為技術助理，我與專案成員一起開發個人行動網銀及個人網銀的部分功能。由於具備前端開發及 UI/UX 設計能力，被交付優化現行的行動網銀 UI/UX，並建立前端元件使用規範。後期也協助團隊將 Ionic framework live reload 編譯時間從 600 秒降低至 80 秒。",
    responsibilities: [
      "規劃前端元件使用規範，並統一個人行動網銀設計語言。",
      "使用 Angular 開發個人網銀及行動網銀功能，包含前端畫面切版及業務流程程式撰寫與 API 串接。",
      "排除 Ionic framework live reload 速度過慢的問題，將 600 秒的編譯時間降低至 80 秒。",
    ],
    techUsed: [
      {
        name: "Angular",
        description:
          "搭配 Ionic framework 作為前端組件庫，使用 SCSS 進行部分元件的客製化。",
      },
      {
        name: "Sketch",
        description: "匯出設計出的 UI 設計規範給團隊成員參考。",
      },
    ],
    screenshots: [
      { src: "/projects/ktb-pib/oldfxquery.png", caption: "舊版：外幣匯入匯款查詢" },
      { src: "/projects/ktb-pib/oldtwdsavequery.png", caption: "舊版：台幣開立定存查詢註銷" },
      { src: "/projects/ktb-pib/oldfxsave.png", caption: "舊版：外幣定存變更解約" },
      { src: "/projects/ktb-pib/fxquery.png", caption: "新版：外幣匯入匯款查詢" },
      { src: "/projects/ktb-pib/twdsavequery.png", caption: "新版：台幣開立定存查詢註銷" },
      { src: "/projects/ktb-pib/fxsave.png", caption: "新版：外幣定存變更解約" },
      { src: "/projects/ktb-pib/kyc.png", caption: "投資屬性評量表" },
      { src: "/projects/ktb-pib/fundstop.png", caption: "停損/停利提醒設定" },
      { src: "/projects/ktb-pib/fundnet.png", caption: "淨值提醒設定" },
      { src: "/projects/ktb-pib/fundnotifi.png", caption: "基金通知設定" },
    ],
  },
  {
    slug: "eslite",
    name: "2018 eslite XMAS Card",
    order: 1,
    skills: ["React", "Fabric.js"],
    thumb:
      "https://res.cloudinary.com/daskinnyman/image/upload/v1540030512/eslite.png",
    thumbGradient: ["#ef444422", "#ef444408"],
    intro:
      "2018 Eslite XMAS Card 是我在學生時期和同學與誠品書店合作的專案。誠品書店希望讓任何人使用誠品與合作插畫家陳狐狸的素材製作聖誕賀卡，並分享卡片取得書店優惠券。我們建立了一個 DIY 卡片網站，使用者可以藉由拖曳排放素材位置、移動圖層、更換字體或卡片樣式。活動期間網站使用人次達 1.2 萬人。",
    responsibilities: [
      "專案初始化及相關技術調查。",
      "RWD 設計，確認使用者在手機、平板、電腦螢幕大小都能方便自製聖誕賀卡。",
      "使用 React 及 Fabric.js 建立網站。",
    ],
    techUsed: [
      {
        name: "React",
        description: "用於作為網站的前端框架，並整合 Fabric.js。",
      },
      {
        name: "Fabric.js",
        description: "提供卡片製作功能多樣的 HTML Canvas API，並簡化開發時間。",
      },
    ],
    screenshots: [
      { src: "/projects/eslite/app-ui.png", caption: "首頁" },
      { src: "/projects/eslite/DIY.png", caption: "自製卡片畫面" },
      { src: "/projects/eslite/layering.png", caption: "圖層管理及大小縮放" },
      { src: "/projects/eslite/text-panel.png", caption: "文字選擇器" },
      { src: "/projects/eslite/sticker-panel.png", caption: "素材選擇器" },
    ],
  },
];

// Helper for sorted display (newest first)
export const projectsByOrder = [...projects].sort((a, b) => b.order - a.order);

// Helper for slug lookup
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
