const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
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
        return "<:disabled:797242628809818163> __Disabled__"
      } else {
        return "<:enabled:797242633122480158> __Enabled__";
      }
    }
  }
}
module.exports = {
	name: 'settings',
  aliases: [],
	description: "",
  async	execute(message, args) {
    switch (args[0].toLowerCase()) {
      case 'list':
        var q = "";
        var h = [];
        var ok = Object.keys(settingList);
        var ov = Object.values(settingList);
        for (var i = 0; i < ok.length; i++) {
          if (ok[i] == "prefix") {
            var currentVal = db.get('prefix.'+message.guild.id);
          } else {
            var currentVal = getValue(ov[i].type,settings.getGuild(message.guild.id).get(ok[i])) || "__Current value is coming soon.__";
            if (settings.getGuild(message.guild.id).get(ok[i]) == null || settings.getGuild(message.guild.id).get(ok[i]) == undefined) {
              settings.getGuild(message.guild.id).set(ok[i],ov[i].preset)
            }
          }
          h.push(`**${ov[i].titleCase}** ─ ${currentVal}\n${ov[i].description} ─ *ID* \`${ok[i]}\``);
        }
        message.channel.send(new Discord.MessageEmbed()
          .setDescription(h.join("\n\n")+"\n\nRun `"+db.get('prefix.'+message.guild.id)+"settings set <setting> <value>` to change a setting.")
          .setTitle("Settings for "+message.guild.name)
          .setColor(options.emebdColor)
          .setFooter("ThunderBot")
        );
        break;
    }
	}
};