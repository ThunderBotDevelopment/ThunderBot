const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'leaderboard',
  aliases: [],
	description: "",
  async	execute(message, args) {
    message.channel.send(new Discord.MessageEmbed().setTitle("Server Leaderboard").setDescription(`You can access this server's leaderboard [right here](https://thunderbot.cf/leaderboard/${message.guild.id}).`).setColor(options.emebdColor));
	}
};