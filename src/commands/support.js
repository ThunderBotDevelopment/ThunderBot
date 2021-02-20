const Discord = require('discord.js');

module.exports = {
	name: 'support',
  aliases: ["server", "discord"],
	description: "",
	async execute(message, args) {
		message.channel.send("**Join our Discord server here: https://discord.gg/pmxAxN2nSk**");
	}
};