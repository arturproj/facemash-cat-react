(()=>{"use strict";var t,e={286:(t,e,n)=>{var r=n(294),o=n(935),a=n(727),c=n(977);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,u(t,e,"set"),n),n}function s(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,u(t,e,"get"))}function u(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var f=new WeakMap,p=new WeakMap,d=new WeakMap,m=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f.set(this,{writable:!0,value:void 0}),p.set(this,{writable:!0,value:void 0}),d.set(this,{writable:!0,value:void 0}),i(this,"index",void 0),i(this,"log",void 0),this.store=function(){n.log={id:s(n,f),likes:s(n,p)},localStorage.setItem(s(n,f),s(n,p))},this.load=function(){return Number(localStorage.getItem(s(n,f)))||0},this.dispatch=function(){var t=Number(localStorage.getItem("totLikes"))||0;localStorage.setItem("totLikes",t+1),l(n,p,+s(n,p)+1),n.store()},this.reset=function(){l(n,p,0),n.store()},this.index=e.index,l(this,f,e.id),l(this,d,e.url),l(this,p,this.load()),this.store(),this.getId=function(){return s(n,f)},this.getPicture=function(){return s(n,d)},this.getLikes=function(){return s(n,p)}};function h(t,e){var n=t.length;return t[Math.floor(Math.random()*(n-e+1)+e)]}const b=n.p+"04090364c967552daa033d6c08c492ca.jpg";function g(t){var e=t.cat,n=t.handle;return r.createElement("div",{className:"handler-card",onClick:function(){return n()}},r.createElement("img",{src:e.getPicture(),className:"img-thumbnail mx-auto",alt:"...",width:"200",height:"auto"}))}function v(t){var e=t.cat,n=t.pos;return r.createElement("div",{className:"card mt-1 px-3 py-4"},r.createElement("div",{className:"author winner align-items-center"},r.createElement("span",{className:"rang-winner ".concat(n<10?"m-rang-left":"")},n),r.createElement("img",{src:e.getPicture(),alt:"...",className:"avatar shadow"}),r.createElement("div",{className:"name ps-3"},r.createElement("span",null,"Like ",e.getLikes()," people"))))}function y(t){return r.createElement("div",{className:"col-12 col-md-6  p-0 "},t.cat?r.createElement(g,t):null)}function w(t){return console.log(t),r.createElement("div",{className:"col-12 col-md-6  p-0 col-score-top5"},t.top5?t.top5.map((function(t,e){return r.createElement(v,{cat:t,key:e,pos:e+1})})):null)}function x(t){return console.log(t),r.createElement("div",{className:"col-12 col-md-6 col-score-top10 my-auto "},t.top10?t.top10.map((function(t,e){return r.createElement(v,{cat:t,key:e,pos:e+6})})):null)}var k=n(625),E=n(436),j=n(24),O=function(){return r.createElement(k.G,{icon:E.R8d,size:"2x"})},S=function(){return r.createElement(k.G,{icon:j.m6,size:"2x"})};function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t){var e,n=P((0,r.useState)(null),2),o=n[0],a=n[1],c=P((0,r.useState)(null),2),i=c[0],l=c[1],s=P((0,r.useState)(0),2),u=s[0],f=s[1],p=P((0,r.useState)(0),2),d=p[0],m=p[1];function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;m(localStorage.getItem("totLikes"));var n=u,r=h(t.cats,n);switch(console.log(r,u),e){case"contestantA":o&&r&&r.getId()!==o.getId()?(a(r),f(n<=99?n++:0)):g(e);break;case"contestantB":i&&r&&r.getId()!==i.getId()?(l(r),f(n<=99?n++:0)):g(e);break;default:a(t.cats[n]),l(t.cats[n+1]),f(n<=99?n+2:0)}}return t.cats.length&&o===i&&(console.log("update",t),g()),r.createElement("div",{className:"row h-100 mx-auto"},r.createElement("img",{src:b,className:"logo-my-caty img-thumbnail rounded-circle mx-auto w-auto",alt:"..."}),r.createElement(y,{property:"contestantA",cat:o,handle:function(){o.dispatch(),g("contestantB")}}),r.createElement(y,{property:"contestantB",cat:i,handle:function(){i.dispatch(),g("contestantA")}}),r.createElement("div",{className:"awesom-home awesom-left  w-50 d-flex justify-content-start m-6"},r.createElement("div",{className:"btn btn-outline-dark btn-tooltip","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Click for Reset Cats Likes or Double Click for Reset Global Likes","data-container":"body","data-animation":"true",onClick:function(){return t.cats?t.cats.map((function(t){return t.reset()})):null},onDoubleClick:function(){return t.cats?(localStorage.setItem("totLikes",0),void m(localStorage.getItem("totLikes"))):null}},r.createElement(O,null))),r.createElement("div",{className:"awesom-home awesom-right w-50 d-flex justify-content-end m-6"},r.createElement("a",(N(e={href:"/FacemashCat--React/score",className:"btn btn-outline-dark"},"className","btn btn-outline-dark btn-tooltip"),N(e,"data-bs-toggle","tooltip"),N(e,"data-bs-placement","top"),N(e,"title","Scores"),N(e,"data-container","body"),N(e,"data-animation","true"),e),r.createElement(S,null)," ",r.createElement("span",{className:"h4 text-bold"},d||0))))}var A=n(379),L=n.n(A),_=n(578);function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){var e;t.cats.sort((function(t,e){return parseFloat(e.getLikes())-parseFloat(t.getLikes())}));var n=t.cats;return r.createElement("div",{className:"row h-100 mx-auto"},r.createElement("img",{src:b,className:"logo-my-caty img-thumbnail rounded-circle mx-auto w-auto",alt:"..."}),r.createElement(w,{top5:n.length?n.slice(0,5):[]}),r.createElement(x,{top10:n.length?n.slice(5,15):[]}),r.createElement("div",{className:"awesom-home awesom-right w-50 d-flex justify-content-end m-6"},r.createElement("a",(R(e={href:"/FacemashCat--React/",className:"btn btn-outline-dark"},"className","btn btn-outline-dark btn-tooltip"),R(e,"data-bs-toggle","tooltip"),R(e,"data-bs-placement","top"),R(e,"title","Scores"),R(e,"data-container","body"),R(e,"data-animation","true"),e),r.createElement("span",{className:"h4 text-bold"},"GO to BACK"))))}L()(_.Z,{insert:"head",singleton:!1}),_.Z.locals,n(805),n(541);var B=n(848);function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function F(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}L()(B.Z,{insert:"head",singleton:!1}),B.Z.locals,console.log("Hello webpack!");var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(s,t);var e,n,o,i,l=(o=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(o);if(i){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return F(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=l.call(this,t)).state={cats:[]},e}return e=s,(n=[{key:"componentDidMount",value:function(){var t=this;fetch("https://latelier.co/data/cats.json").then((function(t){return t.json()})).then((function(t){return t.images.map((function(t,e){return t.index=e,new m(t)}))})).catch((function(t){return console.error(t)})).then((function(e){return t.setState({cats:e})}))}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var t=this.state.cats;return r.createElement(a.VK,null,r.createElement(c.rs,null,r.createElement(c.AW,{exact:!0,path:"/score/"},r.createElement(T,{cats:t})),r.createElement(c.AW,{path:"*"},r.createElement(C,{cats:t}))))}}])&&Z(e.prototype,n),s}(r.Component);(0,o.render)(r.createElement(D,null),document.getElementById("root"))},848:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,":root{--purple: #615087;--peach: #ffd5cd;--pink: #efbbcf;--lilac: #c3aed6}body{background-color:#fff}#root{grid-template-rows:max-content;width:calc(100% - 32px);height:calc(98vh - 32px);background-color:#fff;border-radius:12px;padding:16px;margin:16px;justify-content:center;overflow:hidden}.handler-card{display:flex;justify-content:center;align-items:center;border:solid 4px #fff;background-color:#eceeee;position:absolute;width:100%;height:100%;filter:drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5))}.handler-card:hover{background-color:#cdd4d4;border:solid 4px #fff;position:absolute;width:100%;height:100%;animation:.9s;animation-timing-function:ease-in}svg{margin:0;padding:0}.handler-card img{clip-path:url(#svgPath);-webkit-clip-path:url(#svgPath);position:relative;top:-20px;transform:scale(4);width:100px}.logo-my-caty{position:absolute;z-index:1050;width:150px;height:150px;left:50%;transform:translate(-50%, -15%)}.awesom-home{position:fixed !important;bottom:16px}.awesom-left{left:16px;margin:auto}.awesom-right{float:right;right:16px;margin:auto}.col-score-top5{filter:drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5));flex-direction:column;justify-content:center;align-items:center;display:flex}.col-score-top5 .card{width:300px}.col-score-top5 .avatar{width:80px !important;height:80px !important;min-height:48px !important}.col-score-top5 .avatar img{background-size:cover;background-position:center}.col-score-top10{filter:drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5));height:70%;overflow-x:hidden;overflow-y:auto;padding:18px}.col-score-top10::-webkit-scrollbar{width:8px}.col-score-top10::-webkit-scrollbar-thumb{background:#2b2b2b3d;border-radius:8px}.col-score-top10::-webkit-scrollbar-thumb:hover{background:#2b2b2b63;border-radius:8px}.col-score-top10::-webkit-scrollbar-track{background:#ffffff41;border-radius:8px}.rang-winner{font-size:208%;font-weight:800;padding:0;margin:auto 16px}.m-rang-left{margin-left:33px}",""]);const a=o},578:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,":root{--scorebak: #cdd4d4}body,#root{color:var(--scorebak) !important;background-color:var(--scorebak) !important}",""]);const a=o}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,t=[],r.O=(e,n,o,a)=>{if(!n){var c=1/0;for(u=0;u<t.length;u++){for(var[n,o,a]=t[u],i=!0,l=0;l<n.length;l++)(!1&a||c>=a)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(i=!1,a<c&&(c=a));if(i){t.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,o,a]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,a,[c,i,l]=n,s=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var u=l(r);for(e&&e(n);s<c.length;s++)a=c[s],r.o(t,a)&&t[a]&&t[a][0](),t[c[s]]=0;return r.O(u)},n=self.webpackChunkfacemashcat_react=self.webpackChunkfacemashcat_react||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[785],(()=>r(286)));o=r.O(o)})();