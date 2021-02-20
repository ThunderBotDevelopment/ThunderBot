const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'meme',
  aliases: [],
	description: "",
  async	execute(message, args) {
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone elses avatar.');
		}

		return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}

	return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
	}
};
