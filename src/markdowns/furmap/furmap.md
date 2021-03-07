---
slug: "/work/furmap"
name: "Furmap 毛孩地圖"
date: "2020"
skill: "React-Native,Nestjs,Azure,MongoDB"
linkUrl: "yeee"
thumb: https://res.cloudinary.com/daskinnyman/image/upload/v1540030512/eslite.png
---

Furmap毛孩地圖是我和幾個大學同學一起利用閒暇之餘開發的寵物資訊整合App，
有鑒於許多寵物相關資訊都散落在臉書的各大寵物社團中，我們認為如果能夠整合這些資訊一定可以減少寵物飼主的負擔，
未來也希望可以加入社群的功能，建立一個具備所有資訊的寵物社群，目前已在google play及app store上架。

負責：
1. 從零開始規劃及開發後端及App程式，並在後端導入單元測試提高程式碼品質。
2. 使用六角架構將原先存在controller中的大量程式碼分別移入application service及domain service層。
3. 在前端封裝Axios，並使用http interceptor在request發送前統一加入後端需要的header，並統一管理http response的錯誤處理。

使用技術：
1. React-Native: 作為跨平台App開發框架，搭配redux及react hook來建構程式碼。
2. Nest.js: 用於開發後端服務搭配Passport.js建立signIn with Facebook/Apple的客製化認證。並串接Firebase Cloud Message提供後端發送推播的能力，使用Typescript及Jest做單元測試，搭配六角架構針對程式架構優化。
3. Azure: 利用AKS、Azure cache for redis...等服務建立可以Auto scale up/scale out的後端服務。

作品截圖：