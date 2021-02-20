class BaseStatus {
  constructor(db) {
    this.database = db;
  }
  get users() {
    function fetch(user) {
      return new BaseUser(this.database,user)
    }
  }
  scrapeEffects() {
    var effects = this.database.get('status');
    var ok = Object.keys(effects);
    var ov = Object.values(effects);
    for (var i = 0; i < ok.length; i++) {
      var user = ok[i];
      var effects = ov[i];
      var okk = Object.keys(effects);
      var ovv = Object.values(effects);
      for (var o = 0; o < effects.length; o++) {
        var dbquery = this.database.get('status.'+user+'.'+okk[i])
        if (dbquery > Date.now()) {
          // don't scrape, it's still active
        } else {
          if (dbquery == null) {
            // doesn't exist or was never active
          }
        }
        new BaseUser(this.database,user).effects.get(okk[i])
      }
    }
  }
}
class BaseUser {
  constructor(db, user) {
    this.database = db;
    this.user = user;
  }
  get effects() {
    function get(effect) {
      var value = this.database.get('status.'+this.user+'.'+effect);
      if (value == null) {
        return false;
      }
      if (value > Date.now()) {
        return value - Date.now();
      }
      if (value < Date.now()) {
        this.database.delete('status.'+this.user+'.'+effect);
        return false;
      }
      if (value == undefined) {
        this.database.delete('status.'+this.user+'.'+effect);
        return false;
      }
    }
    function set(effect,endTime) {
      return this.database.set('status.'+this.user+'.'+effect,endTime);
    }
    function expireAfter(effect,time) {
      return this.database.set('status.'+this.user+'.'+effect,Date.now()+time);
    }
  }
}
//module.exports = {BaseStatus:BaseStatus,BaseUser:BaseUser}
module.exports = null;
/* 
 *  THIS IS NOT PRODUCTION READY AND IS NOT COMPLETE
 * 
 *  DO NOT USE IN INDEX.JS
 * 
 * 
 *  -@YodaCode
 * 
 * 
 */