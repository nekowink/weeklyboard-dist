(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(t,e,n){var content=n(141);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("1c93b39a",content,!0,{sourceMap:!1})},139:function(t,e,n){var content=n(145);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("36873827",content,!0,{sourceMap:!1})},140:function(t,e,n){"use strict";var r=n(138);n.n(r).a},141:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,".VueToNuxtLogo {\n  display: inline-block;\n  -webkit-animation: turn 2s linear forwards 1s;\n          animation: turn 2s linear forwards 1s;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n  position: relative;\n  overflow: hidden;\n  height: 180px;\n  width: 245px;\n}\n.Triangle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n}\n.Triangle--one {\n  border-left: 105px solid transparent;\n  border-right: 105px solid transparent;\n  border-bottom: 180px solid #41b883;\n}\n.Triangle--two {\n  top: 30px;\n  left: 35px;\n  -webkit-animation: goright .5s linear forwards 3.5s;\n          animation: goright .5s linear forwards 3.5s;\n  border-left: 87.5px solid transparent;\n  border-right: 87.5px solid transparent;\n  border-bottom: 150px solid #3b8070;\n}\n.Triangle--three {\n  top: 60px;\n  left: 35px;\n  -webkit-animation: goright .5s linear forwards 3.5s;\n          animation: goright .5s linear forwards 3.5s;\n  border-left: 70px solid transparent;\n  border-right: 70px solid transparent;\n  border-bottom: 120px solid #35495e;\n}\n.Triangle--four {\n  top: 120px;\n  left: 70px;\n  -webkit-animation: godown .5s linear forwards 3s;\n          animation: godown .5s linear forwards 3s;\n  border-left: 35px solid transparent;\n  border-right: 35px solid transparent;\n  border-bottom: 60px solid #fff;\n}\n@-webkit-keyframes turn {\n100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n}\n}\n@keyframes turn {\n100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n}\n}\n@-webkit-keyframes godown {\n100% {\n    top: 180px;\n}\n}\n@keyframes godown {\n100% {\n    top: 180px;\n}\n}\n@-webkit-keyframes goright {\n100% {\n    left: 70px;\n}\n}\n@keyframes goright {\n100% {\n    left: 70px;\n}\n}\n",""])},142:function(t,e,n){"use strict";var r=n(5),o=n(143),l=n(86);r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(l),"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},143:function(t,e,n){var r=n(16),o=n(87),l=n(15);t.exports=function(t,e,n,d){var c=String(l(t)),f=c.length,m=void 0===n?" ":String(n),h=r(e);if(h<=f||""==m)return c;var x=h-f,v=o.call(m,Math.ceil(x/m.length));return v.length>x&&(v=v.slice(0,x)),d?v+c:c+v}},144:function(t,e,n){"use strict";var r=n(139);n.n(r).a},145:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,"html {\n  color: #111;\n  background-color: #fafafa;\n  font-family: -apple-system, B linkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n",""])},146:function(t,e,n){"use strict";n.r(e);n(140);var r=n(20),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,l=(n(88),n(89),n(142),function(){var t=null,e=navigator.userAgent.toLowerCase(),n=-1!=e.indexOf("micromessenger"),r=-1!=e.indexOf("iphone");if(n&&r){var o=new Blob(["Hello World!"],{type:"text/html"}),l=URL.createObjectURL(o);t=function(t){setTimeout(function(){document.title=t;var iframe=document.createElement("iframe");iframe.style.visibility="hidden",iframe.style.width="0px",iframe.style.height="0px",iframe.src=l,iframe.onload=function(){setTimeout(function(){iframe.remove()},0)},document.body.appendChild(iframe)},0)}}else t=function(t){setTimeout(function(){document.title=t},0)};var d=new Date,c=new Date(d.getFullYear(),d.getMonth(),d.getDate()-d.getDay()+7),f=n?"距话题结束 - ":"",m="";console.log(m),function t(){var s,e,n,r,o=parseInt((c-new Date)/1e3);s=o%60,e=parseInt(o%3600/60),n=parseInt(o%86400/3600),r=parseInt(o/86400),m=f,r&&(m+=r+"d "),(r||n)&&(m+=n+"h "),m+=r||n||e?e+"m ":s.toString().padStart(2,"0")+"s ",setTimeout(t,1e3)}();var h=["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"];(function e(){var output=h[Math.floor(Date.now()/100%h.length)];t(m+output),setTimeout(e,50)})()}(),{components:{Logo:o},mounted:function(){console.log("It seems that DOM is ready!")}}),d=(n(144),Object(r.a)(l,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"fixed pin-x pin-t shadow-inner",staticStyle:{padding:"20px","background-color":"rgba(0,0,0,.075)"}},[n("div",{staticClass:"bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"},[n("div",{staticClass:"sm:flex sm:items-center px-6 py-4"},[n("div",{staticClass:"text-center sm:text-left sm:flex-grow"},[n("div",{staticClass:"mb-4"},[n("p",{staticClass:"text-sm leading-tight text-grey-dark"},[t._v("本周话题")]),t._v(" "),n("p",{staticClass:"text-xl leading-normal font-bold"},[t._v("鸽子为什么这么大？")])]),t._v(" "),n("div",[n("button",{staticClass:"text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-green text-green hover:bg-green hover:text-white"},[t._v("给我也整一个！")])])])])])]),t._v(" "),n("div",{staticClass:"bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"},[n("div",{staticClass:"sm:flex sm:items-center px-6 py-4"},[n("img",{staticClass:"block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0",attrs:{src:"https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4",alt:""}}),t._v(" "),n("div",{staticClass:"text-center sm:text-left sm:flex-grow"},[n("div",{staticClass:"mb-4"},[n("p",{staticClass:"text-xl leading-tight"},[t._v("Adam Wathan")]),t._v(" "),n("p",{staticClass:"text-sm leading-tight text-grey-dark"},[t._v("Developer at NothingWorks Inc.")])]),t._v(" "),n("div",[n("button",{staticClass:"text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"},[t._v("Message")])])])])]),t._v(" "),n("div",{staticClass:"bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"},[n("div",{staticClass:"sm:flex sm:items-center px-6 py-4"},[n("img",{staticClass:"block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0",attrs:{src:"https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4",alt:""}}),t._v(" "),n("div",{staticClass:"text-center sm:text-left sm:flex-grow"},[n("div",{staticClass:"mb-4"},[n("p",{staticClass:"text-xl leading-tight"},[t._v("Adam Wathan")]),t._v(" "),n("p",{staticClass:"text-sm leading-tight text-grey-dark"},[t._v("Developer at NothingWorks Inc.")])]),t._v(" "),n("div",[n("button",{staticClass:"text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"},[t._v("Message")])])])])])])}],!1,null,null,null));e.default=d.exports}}]);