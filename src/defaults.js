const Discord = require('discord.js');
const options = require('./options.js');
var GuildApi = require('./guildapi.js');
var db = require('quick.db');
var settings = new GuildApi.GuildApi(db);
const settingList = options.settingsList;
var getValue = (type,value) => {
  if (type == "number" || type == "string") {
    return value;
  } else {
    if (type = "toggle") {
      console.log(type,value)
      if (value == false || value == "false") {
        return "<:disabled:797242628809818163> __Disabled__";
      } else {
        return "<:enabled:797242633122480158> __Enabled__";
      }
    }
  }
}
module.exports = (guild) => {
        var q = "";
        var h = [];
        var ok = Object.keys(settingList);
        var ov = Object.values(settingList);
        for (var i = 0; i < ok.length; i++) {
          if (ok[i] == "prefix") {
            var currentVal = db.get('prefix.'+guild);
          } else {
            var currentVal = getValue(ov[i].type,settings.getGuild(guild).basicGet(ok[i])) || "__Current value is coming soon.__";
            if (settings.getGuild(guild).basicGet(ok[i]) == null || settings.getGuild(guild).basicGet(ok[i]) == undefined) {
              settings.getGuild(guild).set(ok[i],ov[i].preset)
            }
          }
        
    }
};