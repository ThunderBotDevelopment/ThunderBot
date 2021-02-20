const Discord = require('discord.js');

module.exports = {
	name: 'invite',
  aliases: [],
	description: "",
	async execute(message, args) {
		message.channel.send(
      new Discord.MessageEmbed()
      .setTitle("Invite")
      .setDescription("**To add ThunderBot to your own server click on: https://invite.thunderbot.cf**")
      .setColor("0xfcba03")
      .setFooter("ThunderBot")
    );
	}
};

