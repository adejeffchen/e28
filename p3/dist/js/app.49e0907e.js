(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},o=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1435bbe7":"add21dc3","chunk-251a2ac3":"10ef49c2","chunk-2c07361a":"ab846b91","chunk-7bb6da92":"ea64f1d1","chunk-7bc77b36":"beffa796","chunk-b243ae6a":"d72d7efd"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1112:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return i}));var i=n("bc3a").create({baseURL:null!==(r="http://e28-api.adejeffchen.me")&&void 0!==r?r:"http://e28-api.adejeffchen.loc",responseType:"json",withCredentials:!0})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"logo-area"}},[r("router-link",{attrs:{to:e.paths["Home"],exact:""}},[r("img",{attrs:{id:"logo",alt:"Jeff Recipe book logo",src:n("9d64")}})]),r("nav",[r("ul",[r("li",e._l(e.links,(function(t){return r("router-link",{key:t,attrs:{to:e.paths[t],exact:""}},[e._v(e._s(t))])})),1)])])],1),r("router-view")],1)},o=[],a={name:"App",data:function(){return{links:["Home","My Favorites","Manage Reviews"],paths:{Home:"/","My Favorites":"/myfavorites","Manage Reviews":"/managereviews"}}},mounted:function(){this.$store.dispatch("fetchRecipes"),this.$store.dispatch("fetchReviews")}},c=a,u=(n("5c0b"),n("2877")),s=Object(u["a"])(c,i,o,!1,null,null,null),f=s.exports,d=n("8c4f"),p=(n("45fc"),n("d3b7"),n("96cf"),n("1da1")),l=(n("4de4"),n("d81d"),n("2f62")),h=n("1112");r["a"].use(l["a"]);var v=new l["a"].Store({state:{recipes:[],reviews:[],user:null,favorites:[]},mutations:{setRecipes:function(e,t){e.recipes=t},setReviews:function(e,t){e.reviews=t},setUser:function(e,t){e.user=t},setFavorites:function(e,t){e.favorites=t}},actions:{fetchRecipes:function(e){h["a"].get("recipe").then((function(t){e.commit("setRecipes",t.data.recipe)}))},fetchReviews:function(e){h["a"].get("review").then((function(t){e.commit("setReviews",t.data.review)}))},fetchFavorites:function(e){var t=this;h["a"].get("favorite").then((function(n){e.commit("setFavorites",n.data.favorite.map((function(e){return t.getters.getRecipeById(e.product_id)})))}))},addFavorites:function(e,t){var n=e.dispatch,r=0;return new Promise((function(e){h["a"].post("/favorite",{product_id:t}).then((function(t){t.data.success&&(n("fetchFavorites"),r=t.data.favorite.id),e(r)}))}))},removeFavorites:function(e,t){var n=e.dispatch;h["a"].delete("/favorite/"+t).then((function(e){e.data.success&&n("fetchFavorites")}))},deleteReview:function(e,t){var n=e.dispatch;h["a"].delete("/review/"+t).then((function(e){e.data.success&&n("fetchReviews")}))},authUser:function(e){return new Promise((function(t){h["a"].post("auth").then((function(n){n.data.authenticated?e.commit("setUser",n.data.user):e.commit("setUser",!1),t()}))}))}},getters:{getRecipeById:function(e){return function(t){return e.recipes.filter((function(e){return e.id==t}),this.id)[0]}},getReviewsById:function(e){return function(t){return e.reviews.filter((function(e){return e.recipe_id==t}),this.id)}}}}),m=[{path:"/",component:function(){return n.e("chunk-7bb6da92").then(n.bind(null,"391e"))}},{path:"/recipes/:id/add-review",component:function(){return n.e("chunk-1435bbe7").then(n.bind(null,"25d0"))},props:!0},{path:"/recipes/:id",component:function(){return n.e("chunk-2c07361a").then(n.bind(null,"7420"))},props:!0},{path:"/managereviews",component:function(){return n.e("chunk-b243ae6a").then(n.bind(null,"cb31"))},meta:{requiresAuth:!0}},{path:"/myfavorites",component:function(){return n.e("chunk-7bc77b36").then(n.bind(null,"686f"))}},{path:"/denied",component:function(){return n.e("chunk-251a2ac3").then(n.bind(null,"127c"))}}],b=new d["a"]({routes:m,mode:"history"});b.beforeEach(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n,r){var i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=t.matched.some((function(e){return e.meta.requiresAuth})),o=function(){i&&!v.state.user?r("/denied"):r()},null===v.state.user?v.dispatch("authUser").then((function(){o()})):o();case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var w=b;r["a"].config.productionTip=!1,r["a"].use(d["a"]),new r["a"]({router:w,store:v,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.3fe2637c.png"}});
//# sourceMappingURL=app.49e0907e.js.map