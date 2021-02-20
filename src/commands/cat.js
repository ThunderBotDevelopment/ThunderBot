const Discord = require('discord.js');
const fetch = require('node-fetch');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'meow',
  aliases: ['cat','kitten','kitty','kitty-cat'],
	description: "",
  async	execute(message, args) {
    if (guildSettings.getGuild(message.guild.id).get('cats')) {
	const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
	message.channel.send(new Discord.MessageEmbed().setImage(file).setColor(options.emebdColor).setTitle("Meow! 😺"));
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Feature Disabled")
        .setDescription("This feature was disabled by a server administrator. You can turn it back on in the settings menu or ThunderBot Dashboard.")
      );
    }
	}
};