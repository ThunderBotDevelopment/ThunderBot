const Discord = require('discord.js');
const fetch = require('node-fetch');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'urban',
  aliases: ['urb-dic','urban-dic','urbandic','urbdic'],
	description: "",
  async	execute(message, args) {
    if (guildSettings.getGuild(message.guild.id).get('urban')) {
	if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}
		const query = args.join(" ")

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?term=${query}`).then(response => response.json())
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
		if (!list.length) {
			return message.channel.send(`= No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle("Definition of " + answer.word)
			.setURL(answer.permalink)
      .setDescription(trim(answer.definition, 1024))
      .setFooter("Sent by "+answer.author)
			.addFields(
				{ name: 'Example', value: trim(answer.example, 1024) },
				{ name: '👍', value: `${parseInt(answer.thumbs_up).toLocaleString()}`, inline: true },
				{ name: '👎', value: `${parseInt(answer.thumbs_down).toLocaleString()}`, inline: true },
			);
		message.channel.send(embed);
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Feature Disabled")
        .setDescription("This feature was disabled by a server administrator. You can turn it back on in the settings menu or ThunderBot Dashboard.")
      );
    }
	}
};