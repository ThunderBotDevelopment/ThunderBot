const Discord = require('discord.js');
const options = require('../options.js');
var Xp = require('../xp.js');

module.exports = {
	name: 'xpcard',
  aliases: [],
	description: "",
	async execute(message, args) {
    message.channel.send(await new Xp.RankCard('Your Mom#1234','https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png', 400, options.embedColor, 'default', 1).render())
	}
};