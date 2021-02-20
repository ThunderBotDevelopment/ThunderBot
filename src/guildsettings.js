module.exports = function (client, db, emebdColor, MessageEmbed) {
    var loading = "<a:thunderbot_loading:786855945422241792>";
    var settingList = [
      "lol"
    ];
    var settings = {
      isSetting: function(setting) {
        return(settingList.includes(setting));
      },
      set: function(setting,value,guild) {
        if (this.isSetting(setting)) {
          db.set('guildsettings.'+guild+'.'+setting,value);
          return(value);
        } else {
          return false;
        }
      },
      get: function(setting,guild) {
        if (this.isSetting(setting)) {
          return(db.get('guildsettings.'+guild+'.'+setting) || null);
        } else {
          return false;
        }
      }
    };
    var module = {
      settings: settings
    };
    return module;
};