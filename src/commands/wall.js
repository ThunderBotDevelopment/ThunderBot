const wall = require('../wall.js');
const options = require('../options.js');
const Discord = require('discord.js');

module.exports = {
	name: 'deprecated/wall',
  aliases: [],
	description: "",
	async execute(message, args) {
		message.channel.send(require('../wall.js'));
	}
};