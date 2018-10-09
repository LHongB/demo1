let env = require('env')
var helper = {
  getEnv:function(){
    return env.env;    
  },
  // 是否登录
  isLogin:function(){
    var user = this.logging();
    if(user && user.isLogin){
      return true;
    }
    return false;
  },
  // 是否授权
  isGrant:function(){
    var user = this.logging();
    if(this.isLogin()){
      if(user.is_grant){
        return true;
      }
    }
    return false;
  },
  // 用户登录信息
  logging:function(){
    return wx.getStorageSync('logging');
  },
  refershToken:function(){
    return this.logging() ? this.logging().token : null;
  },
  userInfo:function(){
    if(!userInfo){
      userInfo = wx.getStorageSync('userInfo');
    }
    return userInfo;
  },
  history:function(){
    return wx.getStorageSync('history');
  },
  getUrl:function(){
    
  }
}
module.exports = {
  common:helper,
}