webpackJsonp([30,28],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(23),i=a(o),r=n(989),u=a(r),l=n(998),s=a(l),c=n(431),f=a(c);n(430);var v=n(200),d=a(v);n(987),i.default.use(d.default),new i.default({router:u.default,store:s.default,render:function(t){return t(f.default)}}).$mount("#app")},329:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LOGIN="LOGIN",e.LOGOUT="LOGOUT",e.VALIDATE_ERROR="VALIDATE_ERROR",e.PLATFORM="PLATFORM"},384:function(t,e){},397:function(t,e){},421:function(t,e){},422:function(t,e){},423:function(t,e){},424:function(t,e){},425:function(t,e){},426:function(t,e){},427:function(t,e){},428:function(t,e){},429:function(t,e){},430:function(t,e){},431:function(t,e,n){n(397);var a=n(6)(n(1001),n(527),null,null);t.exports=a.exports},527:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{directives:[{name:"show",rawName:"v-show",value:t.show_nav,expression:"show_nav"}],staticClass:"navbar navbar-default",attrs:{id:"nav",role:"navigation"}},[n("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[n("ul",{staticClass:"nav navbar-nav navbar-right"},[n("li",{staticClass:"dropdown"},[t._m(1),t._v(" "),n("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test"}},[t._v("test")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/demo"}},[t._v("demo")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/awesome"}},[t._v("awesome")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/semantic"}},[t._v("semantic")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/alert"}},[t._v("alert")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/vuex"}},[t._v("vuex")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/vuex2"}},[t._v("vuex2")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/websocket"}},[t._v("websocket")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/socket-io"}},[t._v("socket-io")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/vux"}},[t._v("vux")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/webgl"}},[t._v("webgl")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/test/echat"}},[t._v("echat")])],1),t._v(" "),t._m(2),t._v(" "),n("li",[n("router-link",{attrs:{to:"/project"}},[t._v("project")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/project/element"}},[t._v("web端：element")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/project/mint-ui"}},[t._v("mobile端：mint-ui")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/project/gdmap"}},[t._v("高德地图")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/project/canvas"}},[t._v("canvas")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/project/video"}},[t._v("video")])],1),t._v(" "),n("hr"),t._v(" "),t._m(3),t._v(" "),n("li",[n("router-link",{attrs:{to:"/effect"}},[t._v("effect")])],1),t._v(" "),n("li",{on:{click:function(e){t.show_nav=!1}}},[n("router-link",{attrs:{to:"/effect/dynamic_effect"}},[t._v("dynamic_effect")])],1)])])])])])]),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),t._v(" "),n("div")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("a",{staticClass:"navbar-brand",attrs:{href:"#"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t._v("下拉选择 "),n("span",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",[t._v("初步选定UI")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",[t._v("动效")])])}]}},984:function(t,e,n){(function(t){"use strict";var e=function(e){e=e||window.event,e.wheelDelta?(e.wheelDelta>0&&(t("#nav").removeClass("pullup"),t("#nav").addClass("pullin")),e.wheelDelta<0&&(t("#nav").removeClass("pullin"),t("#nav").addClass("pullup"))):e.detail&&(e.detail>0&&(t("#nav").removeClass("pullup"),t("#nav").addClass("pullin")),e.detail<0&&(t("#nav").removeClass("pullin"),t("#nav").addClass("pullup")))};document.addEventListener&&document.addEventListener("DOMMouseScroll",e,!1),window.onmousewheel=document.onmousewheel=e}).call(e,n(25))},986:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.host="http://api.iamsee.com"},987:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(25);a(o);n(428),n(429),n(421),n(384),n(426),n(423),n(745),n(422),n(565),n(424),n(425),n(206),n(491),n(427);n(208)},988:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(990),o=function(t){return n.e(22,function(e){var n=[e(432)];t.apply(null,n)}.bind(this))},i=function(t){return n.e(18,function(e){var n=[e(452)];t.apply(null,n)}.bind(this))},r=function(t){return n.e(24,function(e){var n=[e(457)];t.apply(null,n)}.bind(this))},u=function(t){return n.e(7,function(e){var n=[e(454)];t.apply(null,n)}.bind(this))},l=function(t){return n.e(11,function(e){var n=[e(453)];t.apply(null,n)}.bind(this))},s=function(t){return n.e(6,function(e){var n=[e(460)];t.apply(null,n)}.bind(this))},c=function(t){return n.e(5,function(e){var n=[e(461)];t.apply(null,n)}.bind(this))},f=function(t){return n.e(10,function(e){var n=[e(448)];t.apply(null,n)}.bind(this))},v=function(t){return n.e(9,function(e){var n=[e(466)];t.apply(null,n)}.bind(this))},d=function(t){return n.e(23,function(e){var n=[e(458)];t.apply(null,n)}.bind(this))},p=function(t){return n.e(4,function(e){var n=[e(462)];t.apply(null,n)}.bind(this))},m=function(t){return n.e(3,function(e){var n=[e(463)];t.apply(null,n)}.bind(this))},_=function(t){return n.e(0,function(e){var n=[e(456)];t.apply(null,n)}.bind(this))},h=function(t){return n.e(27,function(e){var n=[e(441)];t.apply(null,n)}.bind(this))},b=function(t){return n.e(8,function(e){var n=[e(440)];t.apply(null,n)}.bind(this))},g=function(t){return n.e(20,function(e){var n=[e(459)];t.apply(null,n)}.bind(this))},y=function(t){return n.e(25,function(e){var n=[e(449)];t.apply(null,n)}.bind(this))},k=function(t){return n.e(16,function(e){var n=[e(442)];t.apply(null,n)}.bind(this))},w=function(t){return n.e(2,function(e){var n=[e(451)];t.apply(null,n)}.bind(this))},E=function(t){return n.e(14,function(e){var n=[e(434)];t.apply(null,n)}.bind(this))},O=function(t){return n.e(1,function(e){var n=[e(433)];t.apply(null,n)}.bind(this))},C=[{name:"Home",path:"/",meta:{title:"home"},component:o},{name:"Test",path:"/test",meta:{title:"test"},component:g,children:[{name:"Demo",path:"demo",meta:{title:"demo"},component:i},{name:"semantic",path:"semantic",meta:{title:"semantic"},component:r},{name:"awesome",path:"awesome",meta:{title:"awesome"},component:u},{name:"alert",path:"alert",meta:{title:"alert"},component:l},{name:"vuex",path:"vuex",meta:{title:"vuex"},component:s},{name:"vuex2",path:"vuex2",meta:{title:"vuex2"},component:c},{name:"websocket",path:"websocket",meta:{title:"websocket"},component:v},{name:"socket-io",path:"socket-io",meta:{title:"socket-io"},component:d},{name:"vux",path:"vux",meta:{title:"vux"},component:p},{name:"webgl",path:"webgl",meta:{title:"webgl"},component:m},{name:"echat",path:"echat",meta:{title:"echat"},component:_}]},{name:"project",path:"/project",meta:{title:"project"},component:y,children:[{name:"element",path:"element",meta:{title:"element"},component:h},{name:"gdmap",path:"gdmap",meta:{title:"gdmap"},component:k},{name:"video",path:"video",meta:{title:"video"},component:w},{name:"mint-ui",path:"mint-ui",meta:{title:"mint-ui"},component:f},{name:"canvas",path:"canvas",meta:{title:"canvas"},component:b},a.router_spa]},{name:"effect",path:"/effect",meta:{title:"effect"},component:E,children:[{name:"dynamic_effect",path:"dynamic_effect",meta:{title:"dynamic_effect"},component:O}]}];console.log(C),e.default=C},989:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(23),i=a(o),r=n(566),u=a(r),l=n(988),s=a(l),c="vue learning";i.default.use(u.default);var f=new u.default({mode:"history",linkActiveClass:"u-link--Active",routes:s.default});f.beforeEach(function(t,e,n){var a="";if("Home"!==t.name){console.log(t.name);for(var o=t.matched.length-1;o>=0;o--)a+=t.matched[o].meta.title+" - "}a+=c,document.title=a,n()}),e.default=f},990:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return n.e(17,function(e){var n=[e(437)];t.apply(null,n)}.bind(this))},o=function(t){return n.e(19,function(e){var n=[e(438)];t.apply(null,n)}.bind(this))},i=function(t){return n.e(12,function(e){var n=[e(439)];t.apply(null,n)}.bind(this))},r=function(t){return n.e(13,function(e){var n=[e(435)];t.apply(null,n)}.bind(this))},u=function(t){return n.e(21,function(e){var n=[e(436)];t.apply(null,n)}.bind(this))};e.router_spa={name:"spa",path:"spa",meta:{title:"spa"},components:{spa_header:a,spa_navbar:o,spa_sidebar:i,spa_content:r,spa_footer:u}}},993:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setApp=e.logout=e.register=e.login=void 0;var o=n(328),i=a(o),r=n(23),u=a(r),l=n(472),s=a(l),c=n(329),f=n(986);u.default.use(s.default);var v=u.default.http;e.login=function(t,e){var n=t.commit;console.log("payload=>"),console.log("undefined"==typeof e?"undefined":(0,i.default)(e)),console.log(e),v.jsonp("http://localhost:5001",e).then(function(t){console.log(t),console.log(t.body.data.name),console.log(t.body.data.token),n(c.LOGIN,{name:t.body.data.name,token:t.body.data.token})},function(t){n(c.VALIDATE_ERROR,[t.data.error])})},e.register=function(t,e){var n=t.commit;v.post(f.host+"/api/register",e).then(function(t){n(c.LOGIN,{name:t.data.name,token:t.data.token})},function(t){n(c.VALIDATE_ERROR,t.data.errors)})},e.logout=function(t){var e=t.commit;e(c.LOGOUT)},e.setApp=function(t,e){var n=t.commit;n(c.PLATFORM,e)}},994:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getValidateError=function(t){return t.validate_errors},e.getName=function(t){return t.name},e.getToken=function(t){return t.token},e.getAuth=function(t){return t.authenticated},e.getApp=function(t){return t.platform}},995:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={message:"hello vuex"},a={getMessage:function(t){return t.message}},o={CHANGEMESSAGE:function(t){t.message="hellw vue change"}},i={CHANGEMESSAGE:function(t){return t.commit("CHANGEMESSAGE")}};e.default={state:n,getters:a,mutations:o,actions:i}},996:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={count:0},a={getCount:function(t){return t.count}},o={INCREMENT:function(t){return t.count++},DECREMENT:function(t){return t.count--}},i={INCREMENT:function(t){return t.commit("INCREMENT")},DECREMENT:function(t){return t.commit("DECREMENT")}};e.default={state:n,getters:a,mutations:o,actions:i}},997:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(979),r=a(i),u=n(329);e.default=(o={},(0,r.default)(o,u.LOGIN,function(t,e){var n=e.name,a=e.token;t.name=n,t.token=a,t.authenticated=!0,localStorage.setItem("jwt-token",a)}),(0,r.default)(o,u.VALIDATE_ERROR,function(t,e){t.validate_errors=e}),(0,r.default)(o,u.LOGOUT,function(t){t.name="",t.token="",t.authenticated=!1,localStorage.removeItem("jwt-token")}),(0,r.default)(o,u.PLATFORM,function(t,e){t.platform=e}),o)},998:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(23),r=o(i),u=n(128),l=o(u),s=n(997),c=o(s),f=n(993),v=a(f),d=n(994),p=a(d),m=n(996),_=o(m),h=n(995),b=o(h);r.default.use(l.default);var g={name:"",token:"",authenticated:!1,validate_errors:{}};e.default=new l.default.Store({state:g,mutations:c.default,actions:v,getters:p,modules:{counter:_.default,change:b.default}})},1001:function(t,e,n){(function(t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(984),e.default={data:function(){return{show_nav:!0,msg:"hello world",transitionName:""}},mounted:function(){t("#nav").on("dblclick",function(){t("#nav").removeClass("pullin"),t("#nav").addClass("pullup")})}}}).call(e,n(25))},1038:function(t,e){}});
//# sourceMappingURL=app.0b8031263722a9f7ecbd.js.map