(function(e){function t(t){for(var o,n,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)n=r[u],i[n]&&m.push(i[n][0]),i[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},i={app:0},s=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0f26":function(e,t,a){"use strict";var o=a("c078"),i=a.n(o);i.a},"18c6":function(e,t,a){e.exports=a.p+"img/2.d2964d5c.svg"},1914:function(e,t,a){},"1a11":function(e,t,a){},"21bb":function(e,t,a){"use strict";var o=a("1914"),i=a.n(o);i.a},2856:function(e,t,a){},"30ef":function(e,t,a){},"37ac":function(e,t,a){e.exports=a.p+"img/girl.4750b8e0.svg"},"40c7":function(e,t,a){e.exports=a.p+"img/1.23580e29.svg"},4972:function(e,t,a){},"4b3f":function(e,t,a){"use strict";var o=a("4972"),i=a.n(o);i.a},5278:function(e,t,a){e.exports=a.p+"img/3.efb91ca2.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:e.transitionName,mode:"out-in"},on:{beforeLeave:e.beforeLeave,enter:e.enter}},[a("router-view")],1)],1)},s=[],n=(a("28a5"),"fade"),r={name:"App",data:function(){return{prevHeight:0,transitionName:n}},created:function(){var e=this;this.$router.beforeEach(function(t,a,o){var i=t.meta.transitionName||a.meta.transitionName;if("slide"===i){var s=t.path.split("/").length,r=a.path.split("/").length;i=s<r?"slide-right":"slide-left"}e.transitionName=i||n,o()})},methods:{beforeLeave:function(e){this.prevHeight=getComputedStyle(e).height},enter:function(e){var t=getComputedStyle(e),a=t.height;e.style.height=this.prevHeight,setTimeout(function(){e.style.height=a})},afterEnter:function(e){e.style.height="auto"}}},c=r,l=(a("5c0b"),a("2877")),d=Object(l["a"])(c,i,s,!1,null,null,null);d.options.__file="App.vue";var u=d.exports,m=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"overlay"}),a("div",{staticClass:"container"},[e._m(0),e._m(1),a("div",{staticClass:"button"},[a("router-link",{attrs:{to:"/age"}},[e._v("BAŞLA")])],1)])])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",[e._v("AYASOFYA")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("Hey Merhaba,"),a("br"),e._v(" \n      Anketimize şimdi katıl ve sana "),a("br"),e._v("\n      buradan sonra nereye gideceğini söyleyelim.")])])}],p={name:"home"},f=p,w=(a("21bb"),Object(l["a"])(f,h,v,!1,null,null,null));w.options.__file="Home.vue";var g=w.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey"},[a("LeftImage"),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"ask-age"},[a("label",{class:{clicked:"15-18"==e.howAge},attrs:{href:"#",for:"age15"}},[e._v("15 - 18")]),a("label",{class:{clicked:"19-25"==e.howAge},attrs:{href:"#",for:"age19"}},[e._v("19 - 25")]),a("label",{class:{clicked:"26-35"==e.howAge},attrs:{href:"#",for:"age26"}},[e._v("26 - 35")]),a("label",{class:{clicked:"36+"==e.howAge},attrs:{href:"#",for:"age36"}},[e._v("36 +")])]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.howAge,expression:"howAge"}],attrs:{type:"radio",name:"erkan",id:"age15",value:"15-18"},domProps:{checked:e._q(e.howAge,"15-18")},on:{change:function(t){e.howAge="15-18"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howAge,expression:"howAge"}],attrs:{type:"radio",name:"erkan",id:"age19",value:"19-25"},domProps:{checked:e._q(e.howAge,"19-25")},on:{change:function(t){e.howAge="19-25"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howAge,expression:"howAge"}],attrs:{type:"radio",name:"erkan",id:"age26",value:"26-35"},domProps:{checked:e._q(e.howAge,"26-35")},on:{change:function(t){e.howAge="26-35"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howAge,expression:"howAge"}],attrs:{type:"radio",name:"erkan",id:"age36",value:"36+"},domProps:{checked:e._q(e.howAge,"36+")},on:{change:function(t){e.howAge="36+"}}})])]),a("div",{staticClass:"button"},[a("router-link",{class:{disable:""==e.howAge},attrs:{to:"/gender"}},[e._v("DEVAM")])],1)])])],1)},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",[e._v("YAŞINIZ")])])}],b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"place-image-wrap"},[a("div",{staticClass:"overlay"})])}],C={name:"place-image"},S=C,N=Object(l["a"])(S,b,y,!1,null,null,null);N.options.__file="LeftImage.vue";var A=N.exports,G={name:"age",data:function(){return{howAge:""}},components:{LeftImage:A}},x=G,R=(a("6f8b"),Object(l["a"])(x,_,k,!1,null,null,null));R.options.__file="Age.vue";var E=R.exports,U=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"survey"},[o("LeftImage"),o("div",{staticClass:"content-wrap"},[o("div",{staticClass:"container"},[e._m(0),o("div",{staticClass:"content"},[o("div",{staticClass:"ask-age"},[o("label",{class:{clicked:"Women"==e.howGender,notClicked:"women"==e.notClick},attrs:{for:"genderWomen"},on:{click:function(t){e.isClicked("men")}}},[o("img",{attrs:{src:a("37ac"),alt:""}})]),o("label",{class:{clicked:"Men"==e.howGender,notClicked:"men"==e.notClick},attrs:{for:"genderMen"},on:{click:function(t){e.isClicked("women")}}},[o("img",{attrs:{src:a("d41c"),alt:""}})])]),o("div",{staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.howGender,expression:"howGender"}],attrs:{type:"radio",name:"gender",id:"genderWomen",value:"Women"},domProps:{checked:e._q(e.howGender,"Women")},on:{change:function(t){e.howGender="Women"}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.howGender,expression:"howGender"}],attrs:{type:"radio",name:"gender",id:"genderMen",value:"Men"},domProps:{checked:e._q(e.howGender,"Men")},on:{change:function(t){e.howGender="Men"}}})])]),o("div",{staticClass:"button"},[o("router-link",{class:{disable:""==e.howGender},attrs:{to:"/smile"}},[e._v("DEVAM")])],1)])])],1)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",[e._v("CİNSİYETİNİZ")])])}],P={name:"gender",data:function(){return{howGender:"",notClick:""}},methods:{isClicked:function(e){this.notClick=e}},components:{LeftImage:A}},q=P,M=(a("ff03"),Object(l["a"])(q,U,D,!1,null,"3460e832",null));M.options.__file="Gender.vue";var L=M.exports,I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"survey"},[o("LeftImage"),o("div",{staticClass:"content-wrap"},[o("div",{staticClass:"container"},[e._m(0),o("div",{staticClass:"content"},[o("div",{staticClass:"ask-age"},[o("label",{class:{clicked:"1"==e.howSmile},attrs:{for:"smile1"}},[o("img",{attrs:{src:a("40c7"),alt:""}})]),o("label",{class:{clicked:"2"==e.howSmile},attrs:{for:"smile2"}},[o("img",{attrs:{src:a("18c6"),alt:""}})]),o("label",{class:{clicked:"3"==e.howSmile},attrs:{for:"smile3"}},[o("img",{attrs:{src:a("5278"),alt:""}})]),o("label",{class:{clicked:"4"==e.howSmile},attrs:{for:"smile4"}},[o("img",{attrs:{src:a("e8ee"),alt:""}})]),o("label",{class:{clicked:"5"==e.howSmile},attrs:{for:"smile5"}},[o("img",{attrs:{src:a("7fbe"),alt:""}})])]),o("div",{staticClass:"form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.howSmile,expression:"howSmile"}],attrs:{type:"radio",name:"smile",id:"smile1",value:"1"},domProps:{checked:e._q(e.howSmile,"1")},on:{change:function(t){e.howSmile="1"}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.howSmile,expression:"howSmile"}],attrs:{type:"radio",name:"smile",id:"smile2",value:"2"},domProps:{checked:e._q(e.howSmile,"2")},on:{change:function(t){e.howSmile="2"}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.howSmile,expression:"howSmile"}],attrs:{type:"radio",name:"smile",id:"smile3",value:"3"},domProps:{checked:e._q(e.howSmile,"3")},on:{change:function(t){e.howSmile="3"}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.howSmile,expression:"howSmile"}],attrs:{type:"radio",name:"smile",id:"smile4",value:"4"},domProps:{checked:e._q(e.howSmile,"4")},on:{change:function(t){e.howSmile="4"}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.howSmile,expression:"howSmile"}],attrs:{type:"radio",name:"smile",id:"smile5",value:"5"},domProps:{checked:e._q(e.howSmile,"5")},on:{change:function(t){e.howSmile="5"}}})])]),o("div",{staticClass:"button"},[o("router-link",{class:{disable:""==e.howSmile},attrs:{to:"/guide"}},[e._v("DEVAM")])],1)])])],1)},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",[e._v("BURADA OLMAKTAN MUTLU MUSUNUZ?")])])}],j={name:"gender",data:function(){return{howSmile:""}},components:{LeftImage:A}},$=j,B=(a("4b3f"),Object(l["a"])($,I,O,!1,null,"6666115e",null));B.options.__file="Smile.vue";var T=B.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey"},[a("LeftImage"),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("h1",[e._v(e._s(e.title))])]),a("div",{staticClass:"content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showStep2,expression:"!showStep2"}],staticClass:"ask-age"},[a("label",{class:{clicked:"evet"==e.howGuide},attrs:{for:"guideYes"},on:{click:function(t){e.guide("yes")}}},[e._v("EVET")]),a("label",{class:{clicked:"hayir"==e.howGuide},attrs:{for:"guideNo"},on:{click:function(t){e.guide("no")}}},[e._v("HAYIR")])]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.howGuide,expression:"howGuide"}],attrs:{type:"radio",name:"erkan",id:"guideYes",value:""},domProps:{checked:e._q(e.howGuide,"")},on:{change:function(t){e.howGuide=""}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howGuide,expression:"howGuide"}],attrs:{type:"radio",name:"erkan",id:"guideNo",value:"hayir"},domProps:{checked:e._q(e.howGuide,"hayir")},on:{change:function(t){e.howGuide="hayir"}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showStep2,expression:"showStep2"}],staticClass:"step2 ask-age"},[a("div",{staticClass:"ask-age"},[a("label",{class:{clicked:"1"==e.howGuideStep2},attrs:{for:"howUse1"}},[e._v("1")]),a("label",{class:{clicked:"2"==e.howGuideStep2},attrs:{for:"howUse2"}},[e._v("2")]),a("label",{class:{clicked:"3"==e.howGuideStep2},attrs:{for:"howUse3"}},[e._v("3")]),a("label",{class:{clicked:"4"==e.howGuideStep2},attrs:{for:"howUse4"}},[e._v("4")]),a("label",{class:{clicked:"5"==e.howGuideStep2},attrs:{for:"howUse5"}},[e._v("5")])])]),a("div",{staticClass:"step2 form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.howGuideStep2,expression:"howGuideStep2"}],attrs:{type:"radio",name:"erkan",id:"howUse1",value:"1"},domProps:{checked:e._q(e.howGuideStep2,"1")},on:{change:function(t){e.howGuideStep2="1"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howGuideStep2,expression:"howGuideStep2"}],attrs:{type:"radio",name:"erkan",id:"howUse2",value:"2"},domProps:{checked:e._q(e.howGuideStep2,"2")},on:{change:function(t){e.howGuideStep2="2"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howGuideStep2,expression:"howGuideStep2"}],attrs:{type:"radio",name:"erkan",id:"howUse3",value:"3"},domProps:{checked:e._q(e.howGuideStep2,"3")},on:{change:function(t){e.howGuideStep2="3"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howGuideStep2,expression:"howGuideStep2"}],attrs:{type:"radio",name:"erkan",id:"howUse4",value:"4"},domProps:{checked:e._q(e.howGuideStep2,"4")},on:{change:function(t){e.howGuideStep2="4"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howGuideStep2,expression:"howGuideStep2"}],attrs:{type:"radio",name:"erkan",id:"howUse5",value:"5"},domProps:{checked:e._q(e.howGuideStep2,"5")},on:{change:function(t){e.howGuideStep2="5"}}})])]),a("div",{staticClass:"button"},[a("router-link",{class:e.classBind(),attrs:{to:"/restoration"}},[e._v("DEVAM")])],1)])])],1)},H=[],V={name:"guide",data:function(){return{title:"DİJİTAL REHBER KULLANDINIZ MI ?",howGuide:"",howGuideStep2:"",showStep2:!1}},methods:{guide:function(e){"yes"==e&&(this.title="PEKİ MEMNUN KALDINIZ MI?",this.showStep2=!0,this.howGuide="")},classBind:function(){return""!=this.howGuide||""!=this.howGuideStep2?"":"disable"}},components:{LeftImage:A}},Z=V,K=(a("f2a0"),Object(l["a"])(Z,Y,H,!1,null,"3502fbce",null));K.options.__file="Guide.vue";var W=K.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey"},[a("LeftImage"),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("h1",[e._v(e._s(e.title))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ask-age"},[a("div",{staticClass:"ask-age"},[a("label",{class:{clicked:"1"==e.howRestoration},attrs:{for:"howUse1"}},[e._v("1")]),a("label",{class:{clicked:"2"==e.howRestoration},attrs:{for:"howUse2"}},[e._v("2")]),a("label",{class:{clicked:"3"==e.howRestoration},attrs:{for:"howUse3"}},[e._v("3")]),a("label",{class:{clicked:"4"==e.howRestoration},attrs:{for:"howUse4"}},[e._v("4")]),a("label",{class:{clicked:"5"==e.howRestoration},attrs:{for:"howUse5"}},[e._v("5")])])]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.howRestoration,expression:"howRestoration"}],attrs:{type:"radio",name:"erkan",id:"howUse1",value:"1"},domProps:{checked:e._q(e.howRestoration,"1")},on:{change:function(t){e.howRestoration="1"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howRestoration,expression:"howRestoration"}],attrs:{type:"radio",name:"erkan",id:"howUse2",value:"2"},domProps:{checked:e._q(e.howRestoration,"2")},on:{change:function(t){e.howRestoration="2"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howRestoration,expression:"howRestoration"}],attrs:{type:"radio",name:"erkan",id:"howUse3",value:"3"},domProps:{checked:e._q(e.howRestoration,"3")},on:{change:function(t){e.howRestoration="3"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howRestoration,expression:"howRestoration"}],attrs:{type:"radio",name:"erkan",id:"howUse4",value:"4"},domProps:{checked:e._q(e.howRestoration,"4")},on:{change:function(t){e.howRestoration="4"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howRestoration,expression:"howRestoration"}],attrs:{type:"radio",name:"erkan",id:"howUse5",value:"5"},domProps:{checked:e._q(e.howRestoration,"5")},on:{change:function(t){e.howRestoration="5"}}})])]),a("div",{staticClass:"button"},[a("router-link",{class:e.classBind(),attrs:{to:"/discovery"}},[e._v("DEVAM")])],1)])])],1)},J=[],z={name:"restoration",data:function(){return{title:"RESTORASYON'U BEĞENDİNİZ Mİ ?",howRestoration:""}},methods:{classBind:function(){return""!=this.howRestoration?"":"disable"}},components:{LeftImage:A}},Q=z,X=(a("9744"),Object(l["a"])(Q,F,J,!1,null,"d1f859b0",null));X.options.__file="Restoration.vue";var ee=X.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey"},[a("LeftImage"),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("h1",[e._v(e._s(e.title))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ask-age"},[a("div",{staticClass:"ask-age"},[a("label",{class:{clicked:"kilise"==e.howDiscovery},attrs:{for:"howUse1"}},[e._v("KİLİSE")]),a("label",{class:{clicked:"cami"==e.howDiscovery},attrs:{for:"howUse2"}},[e._v("CAMİ")]),a("label",{class:{clicked:"saray"==e.howDiscovery},attrs:{for:"howUse3"}},[e._v("SARAY")]),a("label",{class:{clicked:"tarihi"==e.howDiscovery},attrs:{for:"howUse4"}},[e._v("TARİHİ")])])]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.howDiscovery,expression:"howDiscovery"}],attrs:{type:"radio",name:"erkan",id:"howUse1",value:"kilise"},domProps:{checked:e._q(e.howDiscovery,"kilise")},on:{change:function(t){e.howDiscovery="kilise"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howDiscovery,expression:"howDiscovery"}],attrs:{type:"radio",name:"erkan",id:"howUse2",value:"cami"},domProps:{checked:e._q(e.howDiscovery,"cami")},on:{change:function(t){e.howDiscovery="cami"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howDiscovery,expression:"howDiscovery"}],attrs:{type:"radio",name:"erkan",id:"howUse3",value:"saray"},domProps:{checked:e._q(e.howDiscovery,"saray")},on:{change:function(t){e.howDiscovery="saray"}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.howDiscovery,expression:"howDiscovery"}],attrs:{type:"radio",name:"erkan",id:"howUse4",value:"tarihi"},domProps:{checked:e._q(e.howDiscovery,"tarihi")},on:{change:function(t){e.howDiscovery="tarihi"}}})])]),a("div",{staticClass:"button"},[a("router-link",{class:e.classBind(),attrs:{to:"/result"}},[e._v("DEVAM")])],1)])])],1)},ae=[],oe={name:"restoration",data:function(){return{title:"KEŞİF ZAMANI",howDiscovery:""}},methods:{classBind:function(){return""!=this.howDiscovery?"":"disable"}},components:{LeftImage:A}},ie=oe,se=(a("0f26"),Object(l["a"])(ie,te,ae,!1,null,"61494846",null));se.options.__file="Discovery.vue";var ne=se.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey"},[a("LeftImage"),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("h1",[e._v(e._s(e.title))])]),e._m(0)])])],1)},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("Result page")])])}],le={name:"result",data:function(){return{title:"SONUÇ"}},components:{LeftImage:A}},de=le,ue=Object(l["a"])(de,re,ce,!1,null,null,null);ue.options.__file="Result.vue";var me=ue.exports;o["a"].use(m["a"]);var he=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g,meta:{transitionName:"slide"}},{path:"/age",name:"age",component:E,meta:{transitionName:"slide"}},{path:"/gender",name:"gender",component:L,meta:{transitionName:"slide"}},{path:"/smile",name:"smile",component:T,meta:{transitionName:"slide"}},{path:"/guide",name:"guide",component:W,meta:{transitionName:"slide"}},{path:"/restoration",name:"Restoration",component:ee,meta:{transitionName:"slide"}},{path:"/discovery",name:"Discovery",component:ne,meta:{transitionName:"slide"}},{path:"/result",name:"Result",component:me,meta:{transitionName:"slide"}}]}),ve=a("9483");Object(ve["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:he,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var o=a("2856"),i=a.n(o);i.a},"6f8b":function(e,t,a){"use strict";var o=a("ce2a"),i=a.n(o);i.a},"7fbe":function(e,t,a){e.exports=a.p+"img/5.9edba7c2.svg"},"961c":function(e,t,a){},9744:function(e,t,a){"use strict";var o=a("1a11"),i=a.n(o);i.a},c078:function(e,t,a){},ce2a:function(e,t,a){},d41c:function(e,t,a){e.exports=a.p+"img/man.ed52f75d.svg"},e8ee:function(e,t,a){e.exports=a.p+"img/4.6c03e7b6.svg"},f2a0:function(e,t,a){"use strict";var o=a("30ef"),i=a.n(o);i.a},ff03:function(e,t,a){"use strict";var o=a("961c"),i=a.n(o);i.a}});
//# sourceMappingURL=app.030f44fb.js.map