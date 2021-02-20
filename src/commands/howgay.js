const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');

var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'howgay',
  aliases: [],
	description: "",
	async execute(message, args) {
    if (guildSettings.getGuild(message.guild.id).get('ff') == false) {
    if (message.mentions.users.first()) {
      const user = message.mentions.users.first().id;
      if (message.mentions.users.first().username == "Dank Memer") {
        message.channel.send(new Discord.MessageEmbed().setTitle('Gay R8er Machine').setDescription("I can conclude that <@"+user+"> is 42069% gay :gay_pride_flag:.").setColor(options.embedColor));
      } else {
        message.channel.send(new Discord.MessageEmbed().setTitle('Gay R8er Machine').setDescription("I can conclude that <@"+user+"> is "+options.getRandom(0,100)+"% gay :gay_pride_flag:.").setColor(options.embedColor));
      }
    } else {
      const user = message.author.id;
      message.channel.send(new Discord.MessageEmbed().setTitle('Gay R8er Machine').setDescription("I can conclude that <@"+user+"> is "+options.getRandom(0,100)+"% gay. :gay_pride_flag:").setColor(options.embedColor));
    }
    }
  }
};