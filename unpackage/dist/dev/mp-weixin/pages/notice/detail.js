"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _component_mp_html = common_vendor.resolveComponent("mp-html");
  (_easycom_uni_tag2 + _easycom_uni_dateformat2 + _component_mp_html)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_dateformat)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      inverted: true,
      text: "置顶",
      type: "error"
    }),
    b: common_vendor.p({
      date: /* @__PURE__ */ new Date(),
      format: "yyyy-MM-dd hh:mm:ss"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f737f11"], ["__file", "/Users/sunling/Documents/develop/js/workspace/uniapp/wallpaper-uniapp/pages/notice/detail.vue"]]);
wx.createPage(MiniProgramPage);
