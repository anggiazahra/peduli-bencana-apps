"use strict";(self.webpackChunkpedulibencana=self.webpackChunkpedulibencana||[]).push([[21],{7580:(n,r,a)=>{a(7039);var e=a(3379),t=a.n(e),o=a(7795),i=a.n(o),p=a(569),s=a.n(p),l=a(3565),g=a.n(l),d=a(9216),c=a.n(d),x=a(4589),w=a.n(x),m=a(890),v={};v.styleTagTransform=w(),v.setAttributes=g(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=c(),t()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,a(4039),a(2588),a(968),a(9993),a(2247)},890:(n,r,a)=>{a.d(r,{Z:()=>l});var e=a(9372),t=a.n(e),o=a(3286),i=a.n(o),p=a(4666),s=i()(t());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&family=Open+Sans:wght@700&display=swap);"]),s.i(p.Z),s.push([n.id,"* {\r\n    font-family: 'Baloo 2', cursive, 'Open Sans', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app-bar {\r\n    padding: 8px 50px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 99;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n    font-size: 18px;\r\n    min-width: 330px;\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: none;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #1C4966;\r\n    font-size: 22px;\r\n    user-select: none;\r\n    font-size: 1.5em;\r\n    margin: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: static;\r\n    top: 50px;\r\n    left: -180px;\r\n    transition: all 0.3s;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul {\r\n    margin: 5px 0;\r\n    padding-left: 10px;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li {\r\n    display: inline-block;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 10px 15px;\r\n    margin: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n}\r\n\r\n.main-title {\r\n    font-size: 33px;\r\n    text-align: center;\r\n}\r\n\r\n#main-content {\r\n    padding: 20px 0;\r\n}\r\n\r\n.btn {\r\n    background-color: #1C4966;\r\n    color: white;\r\n    padding: 9px 12px\r\n}\r\n\r\n.btn-logout, .btn-login {\r\n    background-color: #dfdfdf !important;\r\n    color: black;\r\n    border-radius: 20px;\r\n    margin: 0;\r\n}\r\n\r\n.swal-text {\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    max-width: 100% !important;\r\n    width: 90%;\r\n}\r\n\r\nfooter {\r\n    color: whitesmoke;\r\n    background-color: #1C4966;\r\n}\r\nfooter h5 {\r\n    color: whitesmoke;\r\n}\r\nfooter a {\r\n    text-decoration: none;\r\n    color: whitesmoke;\r\n}\r\nfooter i {\r\n    margin: 7px;\r\n}\r\nfooter .container {\r\n    padding-top: 20px;\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n    .app-bar {\r\n        padding: 8px 35px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 910px) {\r\n    .app-bar {\r\n        grid-template-columns: auto 1fr auto;\r\n        padding: 8px 16px;\r\n    }\r\n\r\n    .app-bar .app-bar__menu  {\r\n        display: flex;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation {\r\n        position: absolute;\r\n        top: 66px;\r\n        box-shadow: 4px 4px 4px #dfdfdf;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul {\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li {\r\n        display: block;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li a {\r\n        display: inline-block;\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n        padding: 10px 30px;\r\n        font-size:17px;\r\n    }\r\n\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 27px;\r\n    }\r\n\r\n    .btn-logout, .btn-login {\r\n        margin: 0 20% 10px 20%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 540px) {\r\n    * {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 24px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px){\r\n    .container {\r\n        width: 100%;\r\n        padding: 0 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n    * {\r\n        font-size: 12px;\r\n    }\r\n}",""]);const l=s},2204:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"},9609:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"},2469:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"},7486:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"},4144:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"},175:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e"},2740:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},3460:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},5647:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"},1692:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},8214:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e"},8931:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"},8349:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e"},1217:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},2956:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},9819:n=>{n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"}},n=>{n.O(0,[39,364,184,333,866,590,101,712],(()=>(7580,n(n.s=7580)))),n.O()}]);