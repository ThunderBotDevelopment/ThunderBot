const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var fetch = require('node-fetch');
var db = require('quick.db');
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'cleanmeme',
  aliases: ['clean-meme','cleanmemes','memeclean','meme-clean','clean-memes','meme-no-nsfw','cm','cmeme'],
	description: "",
  async	execute(message, args) {
    if (guildSettings.getGuild(message.guild.id).get('memes')) {
        const fetch = require("node-fetch");
    const main = await fetch("https://apis.duncte123.me/meme?nsfw=false", {
      headers: {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
      }
    });
    const mat = await main.json();

    if (!mat.success) {
      return console.log("Error 01: Unable to access the json content of API");
    }

    let content = {
      embed: {
        color: "RANDOM",
        title: mat.data.title,
        image: { url: mat.data.image }
      }
    };

    let data = content;
  

      data.embed.color = options.embedColor;
      message.channel.send(data);
    } else {
      message.channel.send(new Discord.MessageEmbed()
        .setColor(options.emebdColor)
        .setTitle("Feature Disabled")
        .setDescription("This feature was disabled by a server administrator. You can turn it back on in the settings menu or ThunderBot Dashboard.")
      );
    }
	}
};