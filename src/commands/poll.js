const Discord = require('discord.js');
const options = require('../options.js');
var db = require('quick.db');

var alphabet = [
  ":regional_indicator_a:",
  ":regional_indicator_b:",
  ":regional_indicator_c:",
  ":regional_indicator_d:",
  ":regional_indicator_e:",
  ":regional_indicator_f:",
  ":regional_indicator_g:",
  ":regional_indicator_h:",
  ":regional_indicator_i:",
  ":regional_indicator_j:",
  ":regional_indicator_k:",
  ":regional_indicator_l:",
  ":regional_indicator_m:",
  ":regional_indicator_n:",
  ":regional_indicator_o:",
  ":regional_indicator_p:"
]
var reg = [
  "🇦",
  "🇧",
  "🇨",
  "🇩",
  "🇪",
  "🇫",
  "🇬",
  "🇭",
  "🇮",
  "🇯",
  "🇰",
  "🇱",
  "🇲",
  "🇳",
  "🇴",
  "🇵"
]
module.exports = {
	name: 'poll',
  aliases: ['survey','questionnaire'],
	description: "",
  async	execute(message, args) {
    var msg = [];
    if (args.length > 2) {
      if (parseInt(args[1]) == args[1]) {
      for (var i = 2; i < args.length; i++) {
        msg.push(alphabet[i-2] + " " + args[i])
      }
      message.channel.send(new Discord.MessageEmbed()
      .setTitle(args[0])
      .setColor(options.embedColor)
      .setDescription(msg.join("\n"))
      .setFooter("ThunderBot Polls | You have "+args[1]+" vote.")
      ).then(sentMessage => {
      for (var i = 2; i < args.length; i++) {
        sentMessage.react(reg[i-2])
      }
      db.set('polls.'+sentMessage.id,parseInt(args[1]));
      });
      } else {
        message.channel.send("You must specify a number for the amount of choices. Usage:\n`"+prefix+"poll <question> <# of votes> <choices ... >`");
      }
    } else {
      message.channel.send("Please specify a question and possible responses. Usage:\n`"+prefix+"poll <question> <# of votes> <choices ... >`")
    }
	}
};