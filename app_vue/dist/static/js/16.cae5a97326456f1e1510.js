webpackJsonp([16,28],{369:function(t,n,o){n=t.exports=o(7)(),n.push([t.id,"#map-container{height:100%;position:absolute;width:100%}.amap-logo{right:0!important;left:auto!important;display:none}.amap-copyright{right:-170px!important;left:auto!important}","",{version:3,sources:["/./src/components/project/gdmap.vue"],names:[],mappings:"AACA,eAAgB,YAAY,AAAC,kBAAmB,AAAE,UAAW,CAC5D,AACD,WACE,kBAAoB,AACpB,oBAAsB,AACtB,YAAc,CACf,AACD,gBACE,uBAAyB,AACzB,mBAAsB,CACvB",file:"gdmap.vue",sourcesContent:["\n#map-container {height:100%; position: absolute;  width:100%;\n}\n.amap-logo {\n  right: 0 !important;\n  left: auto !important;\n  display: none;\n}\n.amap-copyright {\n  right: -170px !important;\n  left: auto !important;\n}\n"],sourceRoot:"webpack://"}])},407:function(t,n,o){var e=o(369);"string"==typeof e&&(e=[[t.id,e,""]]);o(8)(e,{});e.locals&&(t.exports=e.locals)},442:function(t,n,o){o(407);var e=o(6)(o(1012),o(537),null,null);t.exports=e.exports},537:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c||n;return t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{attrs:{id:"map-container"}})])}]}},1012:function(t,n,o){(function(t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("h1").css("display","none"),n.default={data:function(){return{map:null,location:[]}},mounted:function(){this.initMap(),this.initLocation(),this.setZoomAndCenter()},methods:{initMap:function(){var t=new AMap.Map("map-container",{resizeEnable:!0});this.map=t,t.setMapStyle("blue_night"),t.plugin(["AMap.ToolBar","AMap.Autocomplete","AMap.PlaceSearch"],function(){t.addControl(new AMap.ToolBar)});var n=["bg","road","building","point"];t.setFeatures(n)},initLocation:function(){function t(t){var n=["定位成功"];n.push("经度："+t.position.getLng()),n.push("纬度："+t.position.getLat()),this.location=[t.position.getLng(),t.position.getLat()],t.accuracy&&n.push("精度："+t.accuracy+" 米"),n.push("是否经过偏移："+(t.isConverted?"是":"否")),setTimeout(function(){o.setZoom(11)},2e3)}function n(t){}var o=this.map;o.plugin("AMap.Geolocation",function(){var e=new AMap.Geolocation({enableHighAccuracy:!0,buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0,buttonPosition:"RB"});o.addControl(e),e.getCurrentPosition(),AMap.event.addListener(e,"complete",t),AMap.event.addListener(e,"error",n)})},setZoomAndCenter:function(){}}}}).call(n,o(25))}});
//# sourceMappingURL=16.cae5a97326456f1e1510.js.map