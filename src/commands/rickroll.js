const Discord = require('discord.js');
const options = require('../options.js');
var GuildApi = require('../guildapi.js');
var db = require('quick.db');
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, ...args) {
    await timeout(3000);
    return fn(...args);
}
var guildSettings = new GuildApi.GuildApi(db);
module.exports = {
	name: 'rickroll',
  aliases: ['rick'],
	description: "",
  async	execute(message, args) {
var lyrics = `We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinking of
You wouldn't get this from any other guy
I just wanna tell you how I'm feeling
Gotta make you understand
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it
And if you ask me how I'm feeling
Don't tell me you're too blind to see
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
No, I'm never gonna give you up
No, I'm never gonna let you down
No, I'll never run around and hurt you
Never, ever desert you
We've known each other for so long
Your heart's been aching but
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
No, I'm never gonna give you up
No, I'm never gonna let you down
No, I'll never run around and hurt you
I'll never, ever desert you`.split(/\r?\n/);
message.channel.send("AWAITING RICKROLL LYRICS..").then(async (sentMessage) => {
for (var i = 0; i < lyrics.length; i++) {
  await timeout(3400);
  sentMessage.edit(lyrics[i])
}
});
	}
};