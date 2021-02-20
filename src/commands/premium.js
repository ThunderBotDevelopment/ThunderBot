const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var Premium = require('../premium.js');
var db = require('quick.db');
function getReadableDate(d){var dn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var mn=["January","February","March","April","May","June","July","August","September","October","November","December"];var curr_day=d.getDay();var curr_date=d.getDate();var sup="";if(curr_date==1||curr_date==21||curr_date==31){sup="st"}else if(curr_date==2||curr_date==22){sup="nd"}else if(curr_date==3||curr_date==23){sup="rd"}else{sup="th"}var curr_month=d.getMonth();var curr_year=d.getFullYear();return(dn[curr_day]+", "+mn[curr_month]+" "+curr_date+sup+", "+curr_year)}
module.exports = {
	name: 'premium',
  aliases: ['p-claim'],
	description: "",
  async	execute(message, args) {
    if (args[0].toLowerCase() == "send") {
      if (options.admins.includes(message.author.id)) {
        if (message.mentions.users.size) {
          if (args[1].toLowerCase() == "year" || args[1].toLowerCase() == "month") {
            var premiumcode = "tb"+options.getRandom(10000,9999999);
            db.set('premiumcodes.'+premiumcode,args[1].toLowerCase());
            message.mentions.users.first().send(new Discord.MessageEmbed()
              .setColor(options.emebdColor)
              .setTitle("ThunderBot Premium")
              .setDescription("You have been given a code for 1 "+args[1].toLowerCase()+" ofThunderBot Premium. To claim it, run __`!premium claim "+premiumcode+"`__\n(This is the only command that works in DMs.)")
              .setFooter("ThunderBot")
            );
            message.author.send(new Discord.MessageEmbed()
              .setColor(options.emebdColor)
              .setTitle("ThunderBot Premium")
              .setDescription("You gave <@"+message.mentions.users.first().id+"> 1 "+args[1].toLowerCase()+" of ThunderBot Premium. Claim Code: __`"+premiumcode+"`__.\n\n(The following message is a preview of what the recipient recieved.)")
              .setFooter("ThunderBot")
            );
            message.author.send(new Discord.MessageEmbed()
              .setColor(options.emebdColor)
              .setTitle("ThunderBot Premium")
              .setDescription("You have been given a code for 1 "+args[1].toLowerCase()+" ofThunderBot Premium. To claim it, run __`!premium claim "+premiumcode+"`__\n(This is the only command that works in DMs.)")
              .setFooter("ThunderBot")
            );
          } else {
            return message.channel.send("You must say weather it is for a month or for a year.");
          }
        } else {
          return message.channel.send("You must mention someone to give premium to.");
        }
      } else {
        return message.channel.send("You are not authorized to use this command.");
      }
    }
    if (args[0].toLowerCase() == "claim") {
      if (Object.keys(db.get('premiumcodes')).includes(args[1].toLowerCase())) {
        if (new Premium.User(message.author.id).premium) {
          if (new Premium.User(message.author.id).premiumExpiration == "Infinity") {
            return message.channel.send("You already have ThunderBot Premium, silly! And, yours never expires, so you don't have to worry about claiming it or buying it.");
          }
        }
        if (db.get('premiumcodes')[args[1].toLowerCase()].toLowerCase() == "year") {
          new Premium.User(message.author.id).addPremium(31557600000);
        } else if (db.get('premiumcodes')[args[1].toLowerCase()].toLowerCase() == "month") {
          new Premium.User(message.author.id).addPremium(2629800000);
        } else {
          return;
        }
        message.channel.send(new Discord.MessageEmbed()
          .setTitle("Premium Claimed!")
          .setColor(options.emebdColor)
          .setDescription("<@"+message.author.id+"> just claimed **1 "+db.get('premiumcodes')[args[1].toLowerCase()]+"** of ThunderBot Premium! Your Premium will expire on:  __`"+getReadableDate(new Date(new Premium.User(message.author.id).premiumExpiration))+"`__")
        );
        db.delete('premiumcodes.'+args[1].toLowerCase());
      } else {
        message.channel.send(new Discord.MessageEmbed()
          .setColor(options.emebdColor)
          .setTitle("Invalid Code")
          .setDescription("Invalid Premium claim code.")
        );
      }
	  }
  }
};