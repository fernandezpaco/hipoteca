!function(n){"use strict";function e(){window.applicationCache.status===window.applicationCache.UPDATEREADY&&r.swapCache()}function t(){var e=n.getElementById("splash");e.parentNode.removeChild(e),n.body.classList.remove("loading")}function o(){var e=n.createEvent("Event");e.initEvent("componentsLoaded",!0,!0),n.body.dispatchEvent(e)}function i(){t(),o()}function a(){var e=n.createElement("link");e.rel="import",e.href=window.AppConfig.deployEndpoint+window.AppConfig.componentsPath+"components.html",e.onload=i,n.head.appendChild(e)}function d(e){var t=new CustomEvent("aria-announce",{detail:e.detail.page});n.body.dispatchEvent(t)}function p(e){n.querySelector("#announcer").innerHTML=e.detail}var c="registerElement"in n&&"import"in n.createElement("link")&&"content"in n.createElement("template"),r=window.applicationCache;window.Polymer={dom:"shadow",lazyRegister:"max",useNativeCSSProperties:!0},c?a():function(e){var t=n.createElement("script");t.onload=e||null,t.src=window.AppConfig.deployEndpoint+window.AppConfig.componentsPath+"webcomponentsjs/webcomponents-lite.min.js",n.head.appendChild(t)}(a),r.addEventListener("updateready",e,!1),window.addEventListener("componentsLoaded",function(){new window.CellsPolymerBridge({mainNode:"app__content",debug:window.AppConfig.debug,cache:window.AppConfig.coreCache,binding:"currentview",componentsPath:window.AppConfig.componentsPath,generateRequestUrl:function(n){return"composerMocks/"+n+".json"},routes:{home:"/"},onRender:function(e){e.parentNode||n.getElementById(this.mainNode).appendChild(e)}}),n.getElementById("app__content").addEventListener("nav-request",function(n){d(n.detail)})}),n.body.addEventListener("aria-announce",p)}(document);