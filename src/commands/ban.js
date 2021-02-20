const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'ban',
  aliases: [],
	description: "",
  async	execute(message, args) {
    if (message.guild.me.hasPermission("BAN_MEMBERS")) {
      if (message.member.hasPermission("BAN_MEMBERS")) {
        if (message.mentions.members.size) {
          if (message.content.includes("&keep-messages")) {
            var msgcount = 0;
          } else {
            var msgcount = 7;
          }
          if (!args[1]) {
            message.mentions.members.first().ban({ reason: message.member.displayName+" ran the ban command. No reason was specified.", days: 7 })
            message.channel.send(new Discord.MessageEmbed().setTitle("Member Banned").setDescription("<@"+message.mentions.users.first().id+"> was banned by <@"+message.author.id+">. No reason was specified.").setColor(options.embedColor));
          } else {
            message.mentions.members.first().ban({ reason: message.member.displayName+" ran the ban command. Reason: "+args[1], days: 7 })
            message.channel.send(new Discord.MessageEmbed().setTitle("Member Banned").setDescription("<@"+message.mentions.users.first().id+"> was banned by <@"+message.author.id+">. Banned: ```"+args[1]+"```").setColor(options.embedColor));
          }
        } else {
          message.channel.send(new Discord.MessageEmbed()
            .setTitle("Error")
            .setDescription("Incorrect command usage. Please mention the member you would like to kick.")
            .setColor(options.embedColor)
          );
        }
      } else {
        message.channel.send(new Discord.MessageEmbed()
          .setTitle("Permissions Denied")
          .setDescription("You don't have the **Ban Members** permission which is needed to run this command.")
          .setColor(options.embedColor)
        );
      }
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Missing Permissions")
        .setDescription("In order to run this command, ThunderBot needs the **Ban Members** permission.")
      );
    }
  }
};