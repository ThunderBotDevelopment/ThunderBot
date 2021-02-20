const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'kick',
  aliases: [],
	description: "",
  async	execute(message, args) {
    if (message.guild.me.hasPermission("KICK_MEMBERS")) {
      if (message.member.hasPermission("KICK_MEMBERS")) {
        if (message.mentions.members.size) {
          if (!args[1]) {
            message.mentions.members.first().kick(message.member.displayName+" ran the kick command. No reason was specified.")
            message.channel.send(new Discord.MessageEmbed().setTitle("Member Kicked").setDescription("<@"+message.mentions.users.first().id+"> was kicked by <@"+message.author.id+">. No reason was specified.").setColor(options.embedColor));
          } else {
            message.mentions.members.first().kick(message.member.displayName+" ran the kick command. Reason: "+args[1])
            message.channel.send(new Discord.MessageEmbed().setTitle("Member Kicked").setDescription("<@"+message.mentions.users.first().id+"> was kicked by <@"+message.author.id+">. Reason: ```"+args[1]+"```").setColor(options.embedColor));
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
          .setDescription("You don't have the **Kick Members** permission which is needed to run this command.")
          .setColor(options.embedColor)
        );
      }
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Missing Permissions")
        .setDescription("In order to run this command, ThunderBot needs the **Kick Members** permission.")
      );
    }
	}
};