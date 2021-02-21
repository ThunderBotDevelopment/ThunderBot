const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'dashboard',
  aliases: ['dash'],
	description: "",
  async	execute(message, args) {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Server Dashboard")
        .setDescription(`Access the dashboard for all your servers that use ThunderBot [right here](https://discord.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=https%3A%2F%2Fthunderbot.cf%2Fauthorized&response_type=code&scope=guilds%20identify)!`)
      );
	}
};