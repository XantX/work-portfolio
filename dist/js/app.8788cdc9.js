(function(e){function t(t){for(var n,o,l=t[0],i=t[1],c=t[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ffa":function(e,t,a){"use strict";a("5077")},2631:function(e,t,a){},5077:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("banner"),a("about-me"),a("experience")],1)},r=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"about-me"}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-6 soy-asi"},[n("div",{staticClass:"description"},[n("h2",{staticClass:"fw-bold"},[e._v("Yo soy asi")]),n("p",{staticClass:"fs-6"},[e._v(" Soy una persona dedicada y analítica con los problemas que se me imponen. Siempre estoy mejorando mi skills con las tecnologías que manejo y me mantengo al día con las nuevas tecnologías. Me gusta los nuevos retos, me adapto para soluciona los requerimientos que se imponen y me agrada formar parte de equipos de desarrollo. Soy dedicado al momento de hacer mis trabajos cuidando los detalles y analizando posibles mejoras que se tengan que hacer para que la calidad del producto final sea la mejor posible. ")])])]),n("div",{staticClass:"col-3 img-skills"},[n("img",{staticClass:"person",attrs:{src:a("b8cc"),width:"200px"}})])])])}],i={name:"AboutMe"},c=i,u=(a("ae25"),a("2877")),p=Object(u["a"])(c,o,l,!1,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid keyboard-background"},[a("div",{staticClass:"d-flex justify-content-around content"},[a("div",{staticClass:"align-self-center"},[a("vue-typed-js",{attrs:{strings:["Hola, mi nombre es Sebastian Diaz Torres"],typeSpeed:70,showCursor:!0}},[a("h1",{staticClass:"typing"})]),a("vue-typed-js",{attrs:{strings:["Soy desarrollador de software"],typeSpeed:70,showCursor:!1,startDelay:4500}},[a("p",{staticClass:"typing fs-4"})])],1)])])},v=[],b={name:"Banner"},m=b,g=(a("b92f"),Object(u["a"])(m,d,v,!1,null,null,null)),y=g.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("My personal profesional experience")])])}],C={name:"Experience"},j=C,x=Object(u["a"])(j,h,_,!1,null,null,null),w=x.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg sticky-top"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand h1 logo",attrs:{href:"#"}},[e._v("My porfolio")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#NavColapser","aria-controls":"NavColapser","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"links collapse navbar-collapse",attrs:{id:"NavColapser"}},[a("div",{staticClass:"navbar-nav me-auto"},[a("a",{staticClass:"nav-link",attrs:{"aria-current":"page",href:"#about-me"}},[e._v("About me")]),a("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Experience")]),a("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Tools")]),a("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Proyects")])]),a("button",{staticClass:"btn btn-outline-success "},[e._v("Download CV")])])])])}],S={name:"Navbar"},E=S,M=(a("0ffa"),Object(u["a"])(E,O,k,!1,null,null,null)),$=M.exports,q={name:"App",components:{NavBar:$,Banner:y,Experience:w,AboutMe:f}},P=q,T=(a("fffb"),Object(u["a"])(P,s,r,!1,null,null,null)),N=T.exports,A=(a("5aea"),a("4989"),a("8cb8"));n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(N)}}).$mount("#app"),n["a"].use(A["default"])},"5aea":function(e,t,a){},a210:function(e,t,a){},ae25:function(e,t,a){"use strict";a("e6a2")},b8cc:function(e,t,a){e.exports=a.p+"img/person.497db083.svg"},b92f:function(e,t,a){"use strict";a("2631")},e6a2:function(e,t,a){},fffb:function(e,t,a){"use strict";a("a210")}});
//# sourceMappingURL=app.8788cdc9.js.map