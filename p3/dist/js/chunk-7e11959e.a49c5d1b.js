(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e11959e"],{1276:function(e,t,r){"use strict";var i=r("d784"),n=r("44e7"),s=r("825a"),a=r("1d80"),o=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),p=r("9263"),d=r("d039"),g=[].push,f=Math.min,v=4294967295,h=!d((function(){return!RegExp(v,"y")}));i("split",2,(function(e,t,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var i=String(a(this)),s=void 0===r?v:r>>>0;if(0===s)return[];if(void 0===e)return[i];if(!n(e))return t.call(i,e,s);var o,c,l,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=new RegExp(e.source,d+"g");while(o=p.call(h,i)){if(c=h.lastIndex,c>f&&(u.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&g.apply(u,o.slice(1)),l=o[0].length,f=c,u.length>=s))break;h.lastIndex===o.index&&h.lastIndex++}return f===i.length?!l&&h.test("")||u.push(""):u.push(i.slice(f)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var n=a(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n,r):i.call(String(n),t,r)},function(e,n){var a=r(i,e,this,n,i!==t);if(a.done)return a.value;var p=s(e),d=String(this),g=o(p,RegExp),m=p.unicode,x=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),b=new g(h?p:"^(?:"+p.source+")",x),_=void 0===n?v:n>>>0;if(0===_)return[];if(0===d.length)return null===u(b,d)?[d]:[];var w=0,E=0,R=[];while(E<d.length){b.lastIndex=h?E:0;var y,j=u(b,h?d:d.slice(E));if(null===j||(y=f(l(b.lastIndex+(h?0:E)),d.length))===w)E=c(d,E,m);else{if(R.push(d.slice(w,E)),R.length===_)return R;for(var C=1;C<=j.length-1;C++)if(R.push(j[C]),R.length===_)return R;E=w=y}}return R.push(d.slice(w)),R}]}),!h)},"140a":function(e,t,r){e.exports=r.p+"img/10.c9407526.jpg"},"14c3":function(e,t,r){var i=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var s=r.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"15b5":function(e,t,r){e.exports=r.p+"img/4star.4dd2b5e7.svg"},"1cf3":function(e,t,r){e.exports=r.p+"img/2star.123f2957.svg"},3313:function(e,t,r){e.exports=r.p+"img/3star.7194095e.svg"},"3e13":function(e,t,r){e.exports=r.p+"img/2.b40546cd.jpg"},4069:function(e,t,r){e.exports=r.p+"img/8.a79a6dea.jpg"},"434d":function(e,t,r){e.exports=r.p+"img/6.eecf088c.jpg"},"44e7":function(e,t,r){var i=r("861d"),n=r("c6b6"),s=r("b622"),a=s("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==n(e))}},"50f7":function(e,t,r){e.exports=r.p+"img/7.f7032ffe.jpg"},"5d05":function(e,t,r){e.exports=r.p+"img/5star.1463cde5.svg"},6547:function(e,t,r){var i=r("a691"),n=r("1d80"),s=function(e){return function(t,r){var s,a,o=String(n(t)),c=i(r),l=o.length;return c<0||c>=l?e?"":void 0:(s=o.charCodeAt(c),s<55296||s>56319||c+1===l||(a=o.charCodeAt(c+1))<56320||a>57343?e?o.charAt(c):s:e?o.slice(c,c+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"686f":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.user?r("div",[r("h1",[e._v("Hi "+e._s(e.user.name)+", here are your favorite recipes!")]),r("button",{on:{click:e.signoutUser}},[e._v("Sign Out")]),e._l(e.favorites,(function(e){return r("show-recipe",{key:e.id,attrs:{recipe:e}})}))],2):r("div",[r("h1",[e._v("Please login first.")]),r("label",{attrs:{for:"email",id:"email-title"}},[e._v("Email: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.email,expression:"userData.email"}],attrs:{type:"text",id:"email",name:"email"},domProps:{value:e.userData.email},on:{input:function(t){t.target.composing||e.$set(e.userData,"email",t.target.value)}}}),r("br"),r("label",{attrs:{for:"password",id:"password-title"}},[e._v("Password: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.password,expression:"userData.password"}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.userData.password},on:{input:function(t){t.target.composing||e.$set(e.userData,"password",t.target.value)}}}),r("br"),r("button",{on:{click:e.loginUser}},[e._v("Login")]),e.errors?r("p",{staticClass:"error"},[e._v(e._s(e.errors[0]))]):e._e()])])},n=[],s=(r("d81d"),r("1112")),a=r("d1a8"),o={name:"",components:{"show-recipe":a["a"]},data:function(){return{userData:{email:"jill@harvard.edu",password:"asdfasdf"},errors:null,favorites:null}},methods:{loginUser:function(){var e=this;console.log("logging in"),s["a"].post("login",this.userData).then((function(t){t.data.authenticated?e.$store.commit("setUser",t.data.user):e.errors=t.data.errors}))},signoutUser:function(){var e=this;console.log("Signing out"),s["a"].post("logout").then((function(t){console.log(t.data),t.data.success?e.$store.commit("setUser",null):e.errors=t.data.errors}))},loadFavorites:function(){var e=this;this.user&&(this.favorites=[],s["a"].get("favorite").then((function(t){e.favorites=t.data.favorite.map((function(t){return e.$store.getters.getRecipeById(t.product_id)}))})))}},computed:{user:function(){return this.$store.state.user}},watch:{user:function(){console.log("user changed"),this.loadFavorites()}},mounted:function(){this.loadFavorites()}},c=o,l=r("2877"),u=Object(l["a"])(c,i,n,!1,null,"a62cd094",null);t["default"]=u.exports},"8aa5":function(e,t,r){"use strict";var i=r("6547").charAt;e.exports=function(e,t,r){return t+(r?i(e,t).length:1)}},9263:function(e,t,r){"use strict";var i=r("ad6d"),n=r("9f7f"),s=RegExp.prototype.exec,a=String.prototype.replace,o=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=c||u||l;p&&(o=function(e){var t,r,n,o,p=this,d=l&&p.sticky,g=i.call(p),f=p.source,v=0,h=e;return d&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),h=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,v++),r=new RegExp("^(?:"+f+")",g)),u&&(r=new RegExp("^"+f+"$(?!\\s)",g)),c&&(t=p.lastIndex),n=s.call(d?r:p,h),d?n?(n.input=n.input.slice(v),n[0]=n[0].slice(v),n.index=p.lastIndex,p.lastIndex+=n[0].length):p.lastIndex=0:c&&n&&(p.lastIndex=p.global?n.index+n[0].length:t),u&&n&&n.length>1&&a.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=o},"9ef4":function(e,t,r){e.exports=r.p+"img/1.56706d76.jpg"},"9f7f":function(e,t,r){"use strict";var i=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=i((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var i=r("23e7"),n=r("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var i=r("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},bbb3:function(e,t,r){e.exports=r.p+"img/9.829ce22b.jpg"},c997:function(e,t,r){e.exports=r.p+"img/4.4e4858b2.jpg"},ca62:function(e,t,r){var i={"./1.jpg":"9ef4","./10.jpg":"140a","./2.jpg":"3e13","./3.jpg":"fb66","./4.jpg":"c997","./5.jpg":"e5a8","./6.jpg":"434d","./7.jpg":"50f7","./8.jpg":"4069","./9.jpg":"bbb3"};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=s,e.exports=n,n.id="ca62"},d1a8:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.showDetail?i("div",[i("h1",[e._v(e._s(e.recipe.name))]),i("img",{staticClass:"recipe-full-thumb",attrs:{src:r("ca62")("./"+e.recipe.id+".jpg")}}),i("div",{staticClass:"recipe-detail"},[i("p",[e._v(e._s(e.recipe.description))]),i("b",[e._v("Time: ")]),e._v(e._s(e.recipe.time)+" minutes"),i("br"),i("b",[e._v("One serving calories: ")]),e._v(e._s(e.recipe.calories)),i("br"),i("div",{staticClass:"ingredients"},[i("h2",[e._v("Ingredients")]),i("ul",e._l(e.ingredients,(function(t){return i("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),i("div",{staticClass:"directions"},[i("h2",[e._v("Directions")]),i("ol",e._l(e.directions,(function(t){return i("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),i("router-link",{attrs:{to:e.addReviewPath,id:"addReviewLink"}},[e._v("Add Your Review")]),e.reviewsForRecipe?i("div",{staticClass:"reviews"},[i("h2",[e._v("Reviews")]),e._l(e.reviewsForRecipe,(function(t){return i("ul",{key:t.id},[1==t.rating?i("li",[i("img",{staticClass:"star",attrs:{src:r("ebbe"),alt:"1star"}})]):2==t.rating?i("li",[i("img",{staticClass:"star",attrs:{src:r("1cf3"),alt:"2star"}})]):3==t.rating?i("li",[i("img",{staticClass:"star",attrs:{src:r("3313"),alt:"3star"}})]):4==t.rating?i("li",[i("img",{staticClass:"star",attrs:{src:r("15b5"),alt:"4star"}})]):5==t.rating?i("li",[i("img",{staticClass:"star",attrs:{src:r("5d05"),alt:"5star"}})]):e._e(),i("li",[e._v(e._s(t.review_detail))])])}))],2):i("div",{staticClass:"reviews"},[i("h2",[e._v("Reviews")]),i("p",[e._v("No review submitted yet.")])])],1)]):i("div",{staticClass:"recipe-list"},[i("router-link",{attrs:{to:e.recipesPath,exact:""}},[i("img",{staticClass:"recipe-thumb",attrs:{src:r("ca62")("./"+e.recipe.id+".jpg")}}),i("div",{staticClass:"recipe-name"},[e._v(e._s(e.recipe.name))])])],1)},n=[],s=(r("ac1f"),r("1276"),{name:"show-recipe",props:["showDetail","recipe"],data:function(){return{recipesPath:"/recipes/"+this.recipe.id,addReviewPath:"/recipes/"+this.recipe.id+"/add-review"}},computed:{ingredients:function(){return this.recipe.ingredients.split(" | ")},directions:function(){return this.recipe.directions.split(" | ")},reviewsForRecipe:function(){var e=this.$store.getters.getReviewsById(this.recipe.id);return e.length<1?null:e}}}),a=s,o=r("2877"),c=Object(o["a"])(a,i,n,!1,null,"7c56ced8",null);t["a"]=c.exports},d784:function(e,t,r){"use strict";r("ac1f");var i=r("6eeb"),n=r("d039"),s=r("b622"),a=r("9263"),o=r("9112"),c=s("species"),l=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=s("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),g=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var f=s(e),v=!n((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),h=v&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return t=!0,null},r[f](""),!t}));if(!v||!h||"replace"===e&&(!l||!u||d)||"split"===e&&!g){var m=/./[f],x=r(f,""[e],(function(e,t,r,i,n){return t.exec===a?v&&!n?{done:!0,value:m.call(t,r,i)}:{done:!0,value:e.call(r,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=x[0],_=x[1];i(String.prototype,e,b),i(RegExp.prototype,f,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}p&&o(RegExp.prototype[f],"sham",!0)}},d81d:function(e,t,r){"use strict";var i=r("23e7"),n=r("b727").map,s=r("1dde"),a=r("ae40"),o=s("map"),c=a("map");i({target:"Array",proto:!0,forced:!o||!c},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e5a8:function(e,t,r){e.exports=r.p+"img/5.235c450d.jpg"},ebbe:function(e,t,r){e.exports=r.p+"img/1star.1e3d0160.svg"},fb66:function(e,t,r){e.exports=r.p+"img/3.eeda88de.jpg"}}]);
//# sourceMappingURL=chunk-7e11959e.a49c5d1b.js.map