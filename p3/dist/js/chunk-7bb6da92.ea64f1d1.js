(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb6da92"],{1276:function(e,t,i){"use strict";var r=i("d784"),n=i("44e7"),s=i("825a"),a=i("1d80"),c=i("4840"),o=i("8aa5"),l=i("50c4"),u=i("14c3"),p=i("9263"),d=i("d039"),f=[].push,v=Math.min,g=4294967295,h=!d((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,i){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var r=String(a(this)),s=void 0===i?g:i>>>0;if(0===s)return[];if(void 0===e)return[r];if(!n(e))return t.call(r,e,s);var c,o,l,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,h=new RegExp(e.source,d+"g");while(c=p.call(h,r)){if(o=h.lastIndex,o>v&&(u.push(r.slice(v,c.index)),c.length>1&&c.index<r.length&&f.apply(u,c.slice(1)),l=c[0].length,v=o,u.length>=s))break;h.lastIndex===c.index&&h.lastIndex++}return v===r.length?!l&&h.test("")||u.push(""):u.push(r.slice(v)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t.call(this,e,i)}:t,[function(t,i){var n=a(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n,i):r.call(String(n),t,i)},function(e,n){var a=i(r,e,this,n,r!==t);if(a.done)return a.value;var p=s(e),d=String(this),f=c(p,RegExp),x=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),b=new f(h?p:"^(?:"+p.source+")",m),_=void 0===n?g:n>>>0;if(0===_)return[];if(0===d.length)return null===u(b,d)?[d]:[];var w=0,E=0,R=[];while(E<d.length){b.lastIndex=h?E:0;var y,C=u(b,h?d:d.slice(E));if(null===C||(y=v(l(b.lastIndex+(h?0:E)),d.length))===w)E=o(d,E,x);else{if(R.push(d.slice(w,E)),R.length===_)return R;for(var j=1;j<=C.length-1;j++)if(R.push(C[j]),R.length===_)return R;E=w=y}}return R.push(d.slice(w)),R}]}),!h)},"140a":function(e,t,i){e.exports=i.p+"img/10.c9407526.jpg"},"14c3":function(e,t,i){var r=i("c6b6"),n=i("9263");e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var s=i.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"15b5":function(e,t,i){e.exports=i.p+"img/4star.4dd2b5e7.svg"},"1cf3":function(e,t,i){e.exports=i.p+"img/2star.123f2957.svg"},3313:function(e,t,i){e.exports=i.p+"img/3star.7194095e.svg"},"391e":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Welcome to Jeff Recipe Book!")]),i("p",[e._v(" Jeff Recipe Book is a special collection of easy to follow recipes that you want to make during Shelter In Place. ")]),e._l(e.recipes,(function(e){return i("show-recipe",{key:e.id,attrs:{recipe:e}})}))],2)},n=[],s=i("d1a8"),a={name:"",components:{"show-recipe":s["a"]},computed:{recipes:function(){return this.$store.state.recipes}}},c=a,o=i("2877"),l=Object(o["a"])(c,r,n,!1,null,"3cc51273",null);t["default"]=l.exports},"3e13":function(e,t,i){e.exports=i.p+"img/2.b40546cd.jpg"},4069:function(e,t,i){e.exports=i.p+"img/8.a79a6dea.jpg"},"434d":function(e,t,i){e.exports=i.p+"img/6.eecf088c.jpg"},"44e7":function(e,t,i){var r=i("861d"),n=i("c6b6"),s=i("b622"),a=s("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==n(e))}},"50f7":function(e,t,i){e.exports=i.p+"img/7.f7032ffe.jpg"},"5d05":function(e,t,i){e.exports=i.p+"img/5star.1463cde5.svg"},6547:function(e,t,i){var r=i("a691"),n=i("1d80"),s=function(e){return function(t,i){var s,a,c=String(n(t)),o=r(i),l=c.length;return o<0||o>=l?e?"":void 0:(s=c.charCodeAt(o),s<55296||s>56319||o+1===l||(a=c.charCodeAt(o+1))<56320||a>57343?e?c.charAt(o):s:e?c.slice(o,o+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"8aa5":function(e,t,i){"use strict";var r=i("6547").charAt;e.exports=function(e,t,i){return t+(i?r(e,t).length:1)}},9263:function(e,t,i){"use strict";var r=i("ad6d"),n=i("9f7f"),s=RegExp.prototype.exec,a=String.prototype.replace,c=s,o=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=o||u||l;p&&(c=function(e){var t,i,n,c,p=this,d=l&&p.sticky,f=r.call(p),v=p.source,g=0,h=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),i=new RegExp("^(?:"+v+")",f)),u&&(i=new RegExp("^"+v+"$(?!\\s)",f)),o&&(t=p.lastIndex),n=s.call(d?i:p,h),d?n?(n.input=n.input.slice(g),n[0]=n[0].slice(g),n.index=p.lastIndex,p.lastIndex+=n[0].length):p.lastIndex=0:o&&n&&(p.lastIndex=p.global?n.index+n[0].length:t),u&&n&&n.length>1&&a.call(n[0],i,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(n[c]=void 0)})),n}),e.exports=c},"9ef4":function(e,t,i){e.exports=i.p+"img/1.56706d76.jpg"},"9f7f":function(e,t,i){"use strict";var r=i("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,i){"use strict";var r=i("23e7"),n=i("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,i){"use strict";var r=i("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},bbb3:function(e,t,i){e.exports=i.p+"img/9.829ce22b.jpg"},c997:function(e,t,i){e.exports=i.p+"img/4.4e4858b2.jpg"},ca62:function(e,t,i){var r={"./1.jpg":"9ef4","./10.jpg":"140a","./2.jpg":"3e13","./3.jpg":"fb66","./4.jpg":"c997","./5.jpg":"e5a8","./6.jpg":"434d","./7.jpg":"50f7","./8.jpg":"4069","./9.jpg":"bbb3"};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="ca62"},d1a8:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showDetail?r("div",[r("h1",[e._v(e._s(e.recipe.name))]),r("img",{staticClass:"recipe-full-thumb",attrs:{src:i("ca62")("./"+e.recipe.id+".jpg")}}),r("div",{staticClass:"recipe-detail"},[e.user?r("div",[e.favored?r("button",{attrs:{id:"favButton","data-test":"fav-button"},on:{click:e.favoriteButtonClick}},[e._v(" Remove from favorites ")]):r("button",{attrs:{id:"favButton","data-test":"fav-button"},on:{click:e.favoriteButtonClick}},[e._v(" Add to favorites ")])]):e._e(),r("p",{attrs:{id:"recipeDesc"}},[e._v(e._s(e.recipe.description))]),r("b",[e._v("Time: ")]),e._v(e._s(e.recipe.time)+" minutes"),r("br"),r("b",[e._v("One serving calories: ")]),e._v(e._s(e.recipe.calories)),r("br"),r("div",{staticClass:"ingredients"},[r("h2",[e._v("Ingredients")]),r("ul",e._l(e.ingredients,(function(t){return r("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),r("div",{staticClass:"directions"},[r("h2",[e._v("Directions")]),r("ol",e._l(e.directions,(function(t){return r("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),r("router-link",{attrs:{to:e.addReviewPath,id:"addReviewLink"}},[e._v("Add Your Review")]),e.reviewsForRecipe?r("div",{staticClass:"reviews"},[r("h2",[e._v("Reviews")]),e._l(e.reviewsForRecipe,(function(t){return r("ul",{key:t.id},[1==t.rating?r("li",[r("img",{staticClass:"star",attrs:{src:i("ebbe"),alt:"1star"}})]):2==t.rating?r("li",[r("img",{staticClass:"star",attrs:{src:i("1cf3"),alt:"2star"}})]):3==t.rating?r("li",[r("img",{staticClass:"star",attrs:{src:i("3313"),alt:"3star"}})]):4==t.rating?r("li",[r("img",{staticClass:"star",attrs:{src:i("15b5"),alt:"4star"}})]):5==t.rating?r("li",[r("img",{staticClass:"star",attrs:{src:i("5d05"),alt:"5star"}})]):e._e(),r("li",[e._v(e._s(t.review_detail))])])}))],2):r("div",{staticClass:"reviews"},[r("h2",[e._v("Reviews")]),r("p",[e._v("No review submitted yet.")])])],1)]):r("div",{staticClass:"recipe-list"},[r("router-link",{attrs:{to:e.recipesPath,exact:""}},[r("img",{staticClass:"recipe-thumb",attrs:{src:i("ca62")("./"+e.recipe.id+".jpg")}}),r("div",{staticClass:"recipe-name"},[e._v(e._s(e.recipe.name))])])],1)},n=[],s=(i("ac1f"),i("1276"),i("1112")),a={name:"show-recipe",props:["showDetail","recipe"],data:function(){return{recipesPath:"/recipes/"+this.recipe.id,addReviewPath:"/recipes/"+this.recipe.id+"/add-review",favoriteID:0,favored:null}},computed:{ingredients:function(){return this.recipe.ingredients.split(" | ")},directions:function(){return this.recipe.directions.split(" | ")},reviewsForRecipe:function(){var e=this.$store.getters.getReviewsById(this.recipe.id);return e.length<1?null:e},user:function(){return this.$store.state.user}},methods:{favoriteButtonClick:function(){var e=this;this.favored?(this.$store.dispatch("removeFavorites",this.favoriteID),this.favored=!1):(this.$store.dispatch("addFavorites",this.recipe.id).then((function(t){e.favoriteID=t})),this.favored=!0)}},mounted:function(){var e=this;this.showDetail&&this.user&&s["a"].get("favorite/query",{params:{product_id:this.recipe.id}}).then((function(t){0==t.data.results.length?e.favored=!1:(e.favoriteID=t.data.results[0].id,e.favored=!0)}))}},c=a,o=i("2877"),l=Object(o["a"])(c,r,n,!1,null,"e4713b7a",null);t["a"]=l.exports},d784:function(e,t,i){"use strict";i("ac1f");var r=i("6eeb"),n=i("d039"),s=i("b622"),a=i("9263"),c=i("9112"),o=s("species"),l=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=s("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));e.exports=function(e,t,i,p){var v=s(e),g=!n((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),h=g&&!n((function(){var t=!1,i=/a/;return"split"===e&&(i={},i.constructor={},i.constructor[o]=function(){return i},i.flags="",i[v]=/./[v]),i.exec=function(){return t=!0,null},i[v](""),!t}));if(!g||!h||"replace"===e&&(!l||!u||d)||"split"===e&&!f){var x=/./[v],m=i(v,""[e],(function(e,t,i,r,n){return t.exec===a?g&&!n?{done:!0,value:x.call(t,i,r)}:{done:!0,value:e.call(i,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=m[0],_=m[1];r(String.prototype,e,b),r(RegExp.prototype,v,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}p&&c(RegExp.prototype[v],"sham",!0)}},e5a8:function(e,t,i){e.exports=i.p+"img/5.235c450d.jpg"},ebbe:function(e,t,i){e.exports=i.p+"img/1star.1e3d0160.svg"},fb66:function(e,t,i){e.exports=i.p+"img/3.eeda88de.jpg"}}]);
//# sourceMappingURL=chunk-7bb6da92.ea64f1d1.js.map