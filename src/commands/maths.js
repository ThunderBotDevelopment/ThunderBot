const Discord = require('discord.js');
const options = require('../options.js');
var base64 = require('../base64.js');
var fetch = require('node-fetch');
module.exports = {
	name: 'solve',
  aliases: ['evaluate','simplify'],
	description: "",
  async	execute(message, args) {
    if (args.length) {
      message.channel.send("Working on that...");
      setTimeout(() => { message.channel.startTyping(); },100);
      fetch('https://mathapiendpoint.yodacode.repl.co/question/' + encodeURIComponent(args.join(" "))).then(async (text) => {
        var data = await text.text();
        var b = Buffer.from(data, 'base64');
        console.log(data);
        message.channel.send("Here you go:", new Discord.MessageAttachment(b, 'math.png'))
      }).catch(error => {
        message.channel.send("We couldn't figure that one out.");
      });
      message.channel.stopTyping();
    } else {
      message.channel.send("You must specify an expression or an equation.");
    }
	}
};