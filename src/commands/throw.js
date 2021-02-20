const Discord = require('discord.js');
const options = require('../options.js');

module.exports = {
	name: 'throw',
  aliases: [],
	description: "",
	async execute(message, args) {
    throw "This is an error that was created by the throw command. Command runner: "+message.author.tag;
  }
};