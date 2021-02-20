const Discord = require('discord.js');
const fetch = require('node-fetch');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'woof',
  aliases: ['dog','doggo','doggy','doggy-dog'],
	description: "",
  async	execute(message, args) {
    if (guildSettings.getGuild(message.guild.id).get('dogs')) {
	const file = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
	message.channel.send(new Discord.MessageEmbed().setImage(file.message).setColor(options.emebdColor).setTitle("Woof! 🐶"));
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Feature Disabled")
        .setDescription("This feature was disabled by a server administrator. You can turn it back on in the settings menu or ThunderBot Dashboard.")
      );
    }
	}
};