exports.ids = [3];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("c1c73aea", content, true, context)
};

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arm.00d502d.png";

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/intel.cd36dcc.png";

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/huawei.ae936d2.png";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qualcomm.835e306.png";

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_263a1c98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_263a1c98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_263a1c98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_263a1c98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_263a1c98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_263a1c98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(131);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(132);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(133);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(134);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(135);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(99);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
exports.push([module.i, ".banner-sec[data-v-263a1c98],.news-sec[data-v-263a1c98]{height:480px}.overview[data-v-263a1c98]{overflow:hidden;display:flex}.banner-sec[data-v-263a1c98]{min-width:270px;margin-right:94px;background-origin:content-box;background-clip:content-box}.banner-item img[data-v-263a1c98]{display:block;width:100%;height:100%}[data-v-263a1c98] .layui-carousel{margin-top:20px}[data-v-263a1c98] .layui-carousel .el-carousel__item h3{color:#475669;font-size:14px;opacity:.75;line-height:150px;margin:0}[data-v-263a1c98] .layui-carousel .el-carousel__item:nth-child(2n){background-color:#99a9bf}[data-v-263a1c98] .layui-carousel .el-carousel__item:nth-child(odd){background-color:#d3dce6}[data-v-263a1c98] .layui-carousel .el-carousel__indicators--horizontal{right:0;left:auto;transform:none}[data-v-263a1c98] .layui-carousel .el-carousel__indicator--horizontal.is-active .el-carousel__button{background-color:#c30026}[data-v-263a1c98] .layui-carousel .el-carousel__button{width:8px;height:8px;background-color:#fff;border-radius:0;border:1px solid #d9d9d9}.section[data-v-263a1c98]{margin-bottom:60px}.news-sec-wrap[data-v-263a1c98]{position:relative}.news-sec-item[data-v-263a1c98]{padding:20px 0;overflow:hidden}.news-sec-img[data-v-263a1c98]{float:left;width:100px;height:62px;margin-right:10px}.news-sec-img img[data-v-263a1c98]{width:100%;height:100%;vertical-align:top}.news-sec-item-detail[data-v-263a1c98]{max-height:62px;overflow:hidden}.news-sec-item-title[data-v-263a1c98]{font-size:16px;font-weight:700;margin-bottom:10px}.news-sec-item-desc[data-v-263a1c98]{font-size:12px;color:#000;opacity:.7;overflow:hidden;text-overflow:ellipsis;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.news-sec .check-more-news[data-v-263a1c98]{position:absolute;right:0;bottom:0;font-size:12px;opacity:.7;color:#000}.industry[data-v-263a1c98]{display:flex}.industry .activity-sec[data-v-263a1c98]{min-width:270px;margin-right:94px}.industry .recommend[data-v-263a1c98]{flex:1}.industry .recommend-img[data-v-263a1c98]{width:100%;height:134px;vertical-align:top}.industry .recommend-title[data-v-263a1c98]{position:relative;font-size:19px;font-family:Microsoft YaHei;font-weight:700;color:#4b3131;padding:16px 12px}.industry .recommend-title[data-v-263a1c98]:before{left:-10px;top:16px;content:\"“\"}.industry .recommend-title[data-v-263a1c98]:after,.industry .recommend-title[data-v-263a1c98]:before{position:absolute;display:block;color:#c30026;font-family:Microsoft YaHei;font-weight:700}.industry .recommend-title[data-v-263a1c98]:after{right:-10px;bottom:16px;content:\"”\"}.industry .activity-list[data-v-263a1c98]{padding-left:16px}.industry .activity-item[data-v-263a1c98]{list-style-type:square;color:#c30026}.industry .activity-item a[data-v-263a1c98]{font-size:14px;line-height:30px}.industry .publish-sec .publish-item[data-v-263a1c98]{padding:24px 0}.industry .publish-sec .publish-item-title[data-v-263a1c98]{font-size:16px;font-weight:700;margin-bottom:10px}.industry .publish-sec .publish-item-desc[data-v-263a1c98]{font-size:12px;color:#000;opacity:.7;overflow:hidden;text-overflow:ellipsis;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.interests-list[data-v-263a1c98]{display:flex;justify-content:space-around;padding:18px 24px;border:1px solid #e8e8e8;text-align:center;margin-bottom:24px}.interests-item[data-v-263a1c98]{display:inline-block;vertical-align:top;width:200px;padding:0 15px}.interests-item-img[data-v-263a1c98]{width:70px;height:70px;margin:0 auto 18px}.interests-item-desc[data-v-263a1c98]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.interests-item:first-child .interests-item-img[data-v-263a1c98]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50%/100% 100%}.interests-item:nth-child(2) .interests-item-img[data-v-263a1c98]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50%/100% 100%}.interests-item:nth-child(3) .interests-item-img[data-v-263a1c98]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 50%/100% 100%}.interests-item:nth-child(4) .interests-item-img[data-v-263a1c98]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat 50%/100% 100%}.interests-item:nth-child(5) .interests-item-img[data-v-263a1c98]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat 50%/100% 100%}.interests .join[data-v-263a1c98]{display:block;width:214px;height:40px;background:#c30026;border-radius:2px;line-height:40px;text-align:center;color:#fff;font-size:20px;margin:0 auto}.members-list[data-v-263a1c98]{display:flex;justify-content:space-between}.members-item[data-v-263a1c98]{vertical-align:top;width:292px;margin-right:100px}.members-item-img[data-v-263a1c98]{position:relative}.members-item-img img[data-v-263a1c98]{display:block;width:292px;height:78px;margin-bottom:18px}.members-item-img[data-v-263a1c98]:after{display:block;content:\"\";position:absolute;right:0;top:0;width:37px;height:23px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 50%/100% 100%}.members-item-name[data-v-263a1c98]{text-align:center;font-weight:700;font-size:16px}.cooperation-list[data-v-263a1c98]{display:flex;justify-content:flex-start;align-items:center}.cooperation-item[data-v-263a1c98]{margin-right:44px}.friendly-links .link-list[data-v-263a1c98]{display:flex;justify-content:flex-start;align-items:center}.friendly-links .link-item[data-v-263a1c98]{margin-right:52px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/interests_icon1.5d32d31.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/interests_icon2.7944a9f.png";

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/interests_icon3.f46dc3c.png";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/interests_icon4.706787a.png";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/interests_icon5.904db4d.png";

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=263a1c98&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('nuxt-link',{staticClass:"login",attrs:{"to":"login"}},[_vm._v("成员登录")]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"overview section\" data-v-263a1c98>","</section>",[_vm._ssrNode("<div class=\"banner-sec\" data-v-263a1c98>","</div>",[_vm._ssrNode("<h4 class=\"common-title line\" data-v-263a1c98>联盟简介</h4> "),_vm._ssrNode("<div id=\"banner\" class=\"layui-carousel\" data-v-263a1c98>","</div>",[_c('el-carousel',{attrs:{"trigger":"click","arrow":"never","height":"370px"}},_vm._l((4),function(item){return _c('el-carousel-item',{key:item},[_c('h3',{staticClass:"small"},[_vm._v(_vm._s(item))])])}),1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"news-sec\" data-v-263a1c98>","</div>",[_vm._ssrNode("<h4 class=\"common-title line\" data-v-263a1c98>联盟新闻</h4> "),_vm._ssrNode("<div class=\"news-sec-wrap\" data-v-263a1c98>","</div>",[_vm._ssrNode("<ul class=\"news-sec-list\" data-v-263a1c98><li class=\"news-sec-item\" data-v-263a1c98><div class=\"news-sec-img\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" alt data-v-263a1c98></div> <div class=\"news-sec-item-detail\" data-v-263a1c98><h4 class=\"news-sec-item-title layui-elip\" data-v-263a1c98>美国国民警卫队队长发声：不容忍种族、歧视种族仇恨</h4> <p class=\"news-sec-item-desc\" data-v-263a1c98>美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。</p></div></li> <li class=\"news-sec-item\" data-v-263a1c98><div class=\"news-sec-img\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" alt data-v-263a1c98></div> <div class=\"news-sec-item-detail\" data-v-263a1c98><h4 class=\"news-sec-item-title layui-elip\" data-v-263a1c98>美国国民警卫队队长发声：不容忍种族、歧视种族仇恨</h4> <p class=\"news-sec-item-desc\" data-v-263a1c98>美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。</p></div></li> <li class=\"news-sec-item\" data-v-263a1c98><div class=\"news-sec-img\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" alt data-v-263a1c98></div> <div class=\"news-sec-item-detail\" data-v-263a1c98><h4 class=\"news-sec-item-title layui-elip\" data-v-263a1c98>美国国民警卫队队长发声：不容忍种族、歧视种族仇恨</h4> <p class=\"news-sec-item-desc\" data-v-263a1c98>美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。</p></div></li> <li class=\"news-sec-item\" data-v-263a1c98><div class=\"news-sec-img\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" alt data-v-263a1c98></div> <div class=\"news-sec-item-detail\" data-v-263a1c98><h4 class=\"news-sec-item-title layui-elip\" data-v-263a1c98>美国国民警卫队队长发声：不容忍种族、歧视种族仇恨</h4> <p class=\"news-sec-item-desc\" data-v-263a1c98>美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航空、东方航空。</p></div></li></ul> "),_c('nuxt-link',{staticClass:"check-more-news",attrs:{"to":"/news"}},[_vm._v("查看更多")])],2)],2)],2),_vm._ssrNode(" <section class=\"section industry\" data-v-263a1c98><div class=\"activity-sec\" data-v-263a1c98><h4 class=\"common-title\" data-v-263a1c98>联盟活动</h4> <div class=\"recommend\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" alt class=\"recommend-img\" data-v-263a1c98> <h4 class=\"recommend-title layui-elip\" data-v-263a1c98>全乱了！广东击退北京改变CBA季后赛形势 多少队要变招</h4></div> <ul class=\"activity-list\" data-v-263a1c98><li class=\"activity-item\" data-v-263a1c98><a href class=\"layui-elip\" data-v-263a1c98>董子健为老婆孙怡庆生：没有错过12点</a></li> <li class=\"activity-item\" data-v-263a1c98><a href class=\"layui-elip\" data-v-263a1c98>李现发飙喊话代拍：演员的基本素养呢?</a></li> <li class=\"activity-item\" data-v-263a1c98><a href class=\"layui-elip\" data-v-263a1c98>杨丞琳谢李荣浩为自己庆生</a></li> <li class=\"activity-item\" data-v-263a1c98><a href class=\"layui-elip\" data-v-263a1c98>成龙与范冰冰李冰冰同框旧照曝光</a></li></ul></div> <div class=\"publish-sec\" data-v-263a1c98><h4 class=\"common-title line\" data-v-263a1c98>行业发布</h4> <ul class=\"publish-list\" data-v-263a1c98><li class=\"publish-item\" data-v-263a1c98><a href data-v-263a1c98><h4 class=\"publish-item-title layui-elip\" data-v-263a1c98>美国国民警卫队队长发声：不容忍种族、歧视种族仇恨</h4> <p class=\"publish-item-desc\" data-v-263a1c98>\n              美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航\n              空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航\n              空、东方航空。\n            </p></a></li> <li class=\"publish-item\" data-v-263a1c98><a href data-v-263a1c98><h4 class=\"publish-item-title layui-elip\" data-v-263a1c98>美国国民警卫队队长发声：不容忍种族、歧视种族仇恨</h4> <p class=\"publish-item-desc\" data-v-263a1c98>\n              美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航\n              空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航\n              空、东方航空。\n            </p></a></li> <li class=\"publish-item\" data-v-263a1c98><a href data-v-263a1c98><h4 class=\"publish-item-title layui-elip\" data-v-263a1c98>美国国民警卫队队长发声：不容忍种族、歧视种族仇恨</h4> <p class=\"publish-item-desc\" data-v-263a1c98>\n              美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航\n              空、东方航空。美国运输部当地时间3日发布命令，宣布将从本月16日起暂停所有中国航空公司执飞的中美定期客运航班，涉及中国国际航空、首都航\n              空、东方航空。\n            </p></a></li></ul></div></section> "),_vm._ssrNode("<section class=\"section interests\" data-v-263a1c98>","</section>",[_vm._ssrNode("<h4 class=\"common-title\" data-v-263a1c98>联盟成员权益</h4> <ul class=\"interests-list\" data-v-263a1c98><li class=\"interests-item\" data-v-263a1c98><div class=\"interests-item-img\" data-v-263a1c98></div> <p class=\"interests-item-desc\" data-v-263a1c98>1次/年的定向测试</p></li> <li class=\"interests-item\" data-v-263a1c98><div class=\"interests-item-img\" data-v-263a1c98></div> <p class=\"interests-item-desc\" data-v-263a1c98>2次/年的定制测试报告</p></li> <li class=\"interests-item\" data-v-263a1c98><div class=\"interests-item-img\" data-v-263a1c98></div> <p class=\"interests-item-desc\" data-v-263a1c98>成员新机上市提前协调跑分数据， 确保上市后分数与实际相符</p></li> <li class=\"interests-item\" data-v-263a1c98><div class=\"interests-item-img\" data-v-263a1c98></div> <p class=\"interests-item-desc\" data-v-263a1c98>联盟实验室可参与 会员单位新机前期设计，给予建议联盟实验室可参与</p></li> <li class=\"interests-item\" data-v-263a1c98><div class=\"interests-item-img\" data-v-263a1c98></div> <p class=\"interests-item-desc\" data-v-263a1c98>针对会员单位提供数据 核对VIP通道</p></li></ul> "),_c('nuxt-link',{staticClass:"join",attrs:{"to":"/login"}},[_vm._v("加入联盟")])],2),_vm._ssrNode(" <section class=\"section members\" data-v-263a1c98><h4 class=\"common-title\" data-v-263a1c98>会员单位</h4> <ul class=\"members-list\" data-v-263a1c98><li class=\"members-item\" data-v-263a1c98><div class=\"members-item-img\" data-v-263a1c98><img src=\"https://cdnmusic.migu.cn/tycms_picture/20/07/206/200724132019447_1400x350_2446.jpg\" alt class=\"members-item-avatar\" data-v-263a1c98></div> <p class=\"members-item-name\" data-v-263a1c98>理事长单位：鲁大师</p></li> <li class=\"members-item\" data-v-263a1c98><div class=\"members-item-img\" data-v-263a1c98><img src=\"https://cdnmusic.migu.cn/tycms_picture/20/07/206/200724132019447_1400x350_2446.jpg\" alt class=\"members-item-avatar\" data-v-263a1c98></div> <p class=\"members-item-name\" data-v-263a1c98>理事长单位：鲁大师</p></li> <li class=\"members-item\" data-v-263a1c98><div class=\"members-item-img\" data-v-263a1c98><img src=\"https://cdnmusic.migu.cn/tycms_picture/20/07/206/200724132019447_1400x350_2446.jpg\" alt class=\"members-item-avatar\" data-v-263a1c98></div> <p class=\"members-item-name\" data-v-263a1c98>理事长单位：鲁大师</p></li></ul></section> <section class=\"section cooperation\" data-v-263a1c98><h4 class=\"common-title\" data-v-263a1c98>合作伙伴</h4> <ul class=\"cooperation-list\" data-v-263a1c98><li class=\"cooperation-item\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(126)))+" alt data-v-263a1c98></li> <li class=\"cooperation-item\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(127)))+" alt data-v-263a1c98></li> <li class=\"cooperation-item\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt data-v-263a1c98></li> <li class=\"cooperation-item\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(128)))+" alt data-v-263a1c98></li> <li class=\"cooperation-item\" data-v-263a1c98><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt data-v-263a1c98></li></ul></section> <section class=\"section friendly-links\" data-v-263a1c98><h4 class=\"common-title\" data-v-263a1c98>友情链接</h4> <ul class=\"link-list\" data-v-263a1c98><li class=\"link-item\" data-v-263a1c98><a href data-v-263a1c98>天津小飞鸟科技</a></li> <li class=\"link-item\" data-v-263a1c98><a href data-v-263a1c98>成都奇鲁科技有限公司</a></li> <li class=\"link-item\" data-v-263a1c98><a href data-v-263a1c98>成都奇鲁科技有限公司</a></li> <li class=\"link-item\" data-v-263a1c98><a href data-v-263a1c98>成都奇鲁科技有限公司</a></li> <li class=\"link-item\" data-v-263a1c98><a href data-v-263a1c98>成都奇鲁科技有限公司</a></li></ul></section>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=263a1c98&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          title: "中国"
        });
      }, 1000);
    });
  },

  layout: "common",

  mounted() {
    document.title = this.title;
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(129)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "263a1c98",
  "1e8772ec"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/amd.0499b6a.png";

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAXCAYAAACMLIalAAADXUlEQVRIS82XXWgUVxTH/+fuppqNUBoQcWckuDuzKoG+lKLurB+bB8VCH3xR24cW+tCnaqw+2IcKlj6JHygGX+xLRYS82KK0iFFaw86G2tCC1H7s3hhsZ6ISCJZu1Ky785dJshKja0yKuvdpZjjnnt89587/niuYMn5Y2L4AGF0w9dvLeW4pZYevlWqxhID0mak9AD8hYbwciCejiMAHpGu1V9gvrpHaBfDQq4KZHldBdolr2H8CWNYoUCL8XXKGVRFIpFGgICiHmWLDAE2C1IP6i+Q3oY1SspXE0ungBLtBDEL4hkCtI/ntuL3IdgItAO9R2IVAqo/5KkaFahWATL1k1IMa+beZ8Xe0HsubdieJI1MnEGG/5+lVW4BqzrS+ErLk+AM7r7W3v3bnzthdhNtB5GPHK5yoFzhv2u+TOAVAptvULZ+ibFs9VOjOm2Yr0eyDmD/pXKmSK9cO6V9+MpZ1VBBcJGVHZqjQlY+nllP4B8GTGV9/ONO2cA3rEiAdzw0FsMfx9YbQwTWTp0H13oQzDzu+3n0uHo+1qthVUJIiwaa0N3C+L269G4icBVCCsFIH6qrj6XXj8xrJI4DqnA1UgKCacG4O3nCNZAegLgG8Uar8177x9u1R10geBNTucMKyBHbWG9A5I/WpgIefnSEWHF+PS1DOtM8IsXkWUEAg/GKNp/eFqp837WKU6FzpF7/7cUni7Wig+salRPCg7BVjWaCSM6zjAukQJZ89DaxaDaoRdd9Ne95Ib1vb4milSRMSmxVUmJkeXyf2AUEIsv6f6z/3v4Wm8i27n8Cbk+XUjq/tiXJYFwiMZHy97VnZ6kkkXo+VI+dArHma3cw6FXCjc1NfqDm7RvJzQH1Zexfh+bSnN01A2YNAcMrxB/Z+b1nzmu/JiqlB51O1BCpwQOwA6p+zM0OB3c7kyi8vtldEIvhViHm1YKEWZTy9vSYHAvVR2i+cvBJPph+Icmf6A+eUKQrGok2Vtmjr4MjYLasXkFD4Hg0R7Ex7xaM1OQCYdnzdlzdSHxD8+oVAhZOK4AqA+yTWPhmEeUD+BrgIkCwEvQLeJSU8BeZ00D9H+eay1v/n03BdQrhdGrGf+q3hOk8IOhumRwfgQXAs7RUPPNY2vLrbzGgpOzz86DbzEMipg/ihBNtyAAAAAElFTkSuQmCC"

/***/ })

};;
//# sourceMappingURL=index.js.map