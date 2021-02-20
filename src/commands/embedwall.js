const wall = require('../embedwall.js');
const options = require('../options.js');
const Discord = require('discord.js');

module.exports = {
	name: 'deprecated/embedwall',
  aliases: ['deprecated/emebdwall'],
	description: "",
	async execute(message, args) {
		message.channel.send(new Discord.MessageEmbed().setColor("#2f3136").setDescription(wall));
	}
};