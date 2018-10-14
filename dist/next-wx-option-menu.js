(function() {
  var global = global || this || window || Function("return this")();
  var nx = global.nx || require("next-js-core2");
  var wx = (global.wx = global.wx);

  var NxWxOptionMenu = nx.declare("nx.WxOptionMenu", {
    statics: {
      show: function() {
        if (global.__WEIXIN_READY___) {
          wx.showOptionMenu();
        } else {
          reject({
            status: "fail",
            msg: "微信SDK还未初始化"
          });
        }
      },
      hide: function() {
        if (global.__WEIXIN_READY___) {
          wx.hideOptionMenu();
        } else {
          reject({
            status: "fail",
            msg: "微信SDK还未初始化"
          });
        }
      },
      visible: function(inValue) {
        return inValue ? this.show() : this.hide();
      }
    }
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = NxWxOptionMenu;
  }
})();
