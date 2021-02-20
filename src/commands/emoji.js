const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'emoji',
  aliases: ['emote'],
	description: "",
  async	execute(message, args) {
    var id = message.content.trim().substring(message.content.length-19,message.content.length-1)
    console.log(id);
    if (message.content.includes("<a:")) {
            message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setImage("https://cdn.discordapp.com/emojis/"+id+".gif?v=1")
        .setFooter("ThunderBot Emoji - S.A")
      );
      message.delete();

    } else {
      if (message.content.includes("<:")) {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setImage("https://cdn.discordapp.com/emojis/"+id+".png?v=1")
        .setFooter("ThunderBot Emoji - S")
      );
     message.delete();
      } else {
    if (args[1] == "a") {
            message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setImage("https://cdn.discordapp.com/emojis/"+args[0]+".gif?v=1")
        .setFooter("ThunderBot Emoji - ID.A")
      );
      message.delete();

    } else {
      if (args.length > 0) {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setImage("https://cdn.discordapp.com/emojis/"+args[0]+".png?v=1")
        .setFooter("ThunderBot Emoji - ID")
      );
      message.delete();
    } else {
      message.channel.send(new Discord.MessageEmbed()
      .setTitle("Error")
      .setColor(options.emebdColor)
      .setDescription("Command usage:\n`!emote <emoji>`")
      );
    }
    }

      }
    }
	}
};