const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'anime',
  aliases: [],
	description: "",
  async	execute(message, args) {
    if (guildSettings.getGuild(message.guild.id).get('anime')) {
        var opt = ["pat", "hug", "waifu", "cry", "kiss", "slap", "smug", "punch"];
        let data = await options.random.getAnimeImgURL(args[0] || opt[Math.floor(Math.random() * opt.length)])
        var a = args[0] || opt[Math.floor(Math.random() * opt.length)];
        console.log(data);
        message.channel.send(new Discord.MessageEmbed()
          .setColor(options.emebdColor)
          .setTitle("Anime")
          .setImage(data)
        );
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Feature Disabled")
        .setDescription("This feature was disabled by a server administrator. You can turn it back on in the settings menu or ThunderBot Dashboard.")
      );
    }
	}
};