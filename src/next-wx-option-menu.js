(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx = global.wx;

  var NxWxOptionMenu = nx.declare('nx.WxOptionMenu', {
    statics: {
      show: function(){
        wx.ready(function(){
          wx.showOptionMenu();
        });
      },
      hide: function(){
        wx.ready(function(){
          wx.hideOptionMenu();
        });
      },
      visible: function(inValue){
        return inValue ? this.show(): this.hide();
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxOptionMenu;
  }

}());
