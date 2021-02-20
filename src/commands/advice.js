const Discord = require('discord.js');
const options = require('../options.js');

module.exports = {
	name: 'advice',
  aliases: [],
	description: "",
	async execute(message, args) {
		let data_advice = await options.random.getAdvice()
    console.log(data_advice);
    message.channel.send(new Discord.MessageEmbed()
      .setColor(options.embedColor)
      .setTitle(data_advice.embed.description)
    );
	}
};