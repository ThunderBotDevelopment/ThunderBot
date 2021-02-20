const Discord = require('discord.js');
const options = require('../options.js');

module.exports = {
	name: 'embed',
  aliases: ["embed-that-shit"],
	description: "",
	async execute(message, args) {
		if (options.splitArgs(message.content).length < 3) {
	console.log("GGG")
	const embed = new Discord.MessageEmbed()
		 // Set the title of the field
		 .setTitle("Error")
		 .setDescription("You must include 3 arguments:\n`<title>` - The card's title\n`<text>` - The card's main text\n`<color>` (optional) - The hexadecimal value of a color, including the `#`\nYou can use quotes " + '`"`' + " when a title or body has spaces.\n\nExample: " + '`!embed "Announcement" "I just had to announce this." #FFFFFF`')
		 .setColor(0xfcba03)


	message.channel.send(embed)
} else {
		 const embed = new Discord.MessageEmbed()
	      // Set the title of the field
	      .setTitle(options.splitArgs(message.content)[1])
        .setDescription(options.splitArgs(message.content)[2])
	      .setColor(options.splitArgs(message.content)[3] ? options.splitArgs(message.content)[3] : emebdColor)
        .setFooter("ThunderBot")
		 message.delete({ timeout: 0 })
		   .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds`))
		   .catch(console.error);

	   message.channel.send(embed)
	 }
	}
};

