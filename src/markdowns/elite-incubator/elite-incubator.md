---
slug: "/work/elite-incubator"
date: "2019"
name: "菁英人才孵化器"
skill: "Vue,Angular,Ionic,Firebase,Cloud Functions"
linkUrl: ""
thumb: https://res.cloudinary.com/daskinnyman/image/upload/c_scale,w_376/v1540028311/app-login_gxgypt.png
---

在實習期間，我接受實習計畫的主管的委託和同事一起腦力激盪出一個可以提供實習生們紀錄實習生活並提高實習生參與活動意願的web app - 菁英人才孵化器。
這個Web app有兩次的迭代，第一版使用的是Vue.js搭配Firebase realtime database開發，在開發中因為real time database無法儲存資料庫中另一個文件的reference而吃了許多苦頭，不過最後也成功地將第一版交付測試。
後來因為firebase 推出了Cloud firestore的功能便決定修相關的邏輯使用cloud firestore
，其中也因為考慮到開發速度及穩定性便使用Angular搭配Ionic framework進行使用者端的開發，
並且將匯入實習生資料的功能利用Cloud functions撰寫。

負責：
1. 使用Angular及Vue建立Mobile Web app，及管理者介面。
2. 將匯入實習生資料的程式包裝成Cloud Functions。
3. 設計Mobile Web app及管理者介面UI/UX。

使用技術：
1. Vue2: 作為第一版的前端開發框架，利用Vuex做全局狀態管理。
2. Angular: 搭配Ionic framework及NG-Zorro加快網站開發速度，使用Router Guard在前端進行權限驗證並阻擋沒有權限的使用者進入頁面。
3. Firebase: 使用authentication作為登入認證服務簡化開發流程，利用Realtime database/Cloud firestore作為資料庫，並建立Cloud functions將批次上傳資料的工作包裝為api。