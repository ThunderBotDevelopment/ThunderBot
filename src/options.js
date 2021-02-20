const { Random } = require("something-random-on-discord");
const random = new Random();

var admins = [
    "748577964311969923",
    "700436934702399509",
    "691701043851034688",
   // "448269422814298112"
];
module.exports = {
  admins: admins,
  "emebdColor": "#fcba03",
  "embedColor": "#fcba03",
  "random": random,
  "getRandom": (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  "splitArgs": function splitArgs(str) {
    var myRegexp = /[^\s"]+|"([^"]*)"/gi;
    var myString = str;
    var myArray = [];
    do {
      var match = myRegexp.exec(myString);
      if (match != null)
      {
          myArray.push(match[1] ? match[1] : match[0]);
      }
    } while (match != null);
    return(myArray);
  },
  "settingsList": {
    "memes": {
      titleCase: "Memes",
      description: "Enables memes in your server",
      preset: true,
      type: "toggle"
    },
    "urban": {
      titleCase: "Urban Dictionary",
      description: "Enables searching the Urban Dictionary",
      preset: true,
      type: "toggle"
    },
    "cats": {
      titleCase: "Cats",
      description: "Enables cats in your server",
      preset: true,
      type: "toggle"
    },
    "dogs": {
      titleCase: "Dogs",
      description: "Enables dogs in your server",
      preset: true,
      type: "toggle"
    },
    "filter": {
      titleCase: "Profanity Filter",
      description: "Enables the English profanity filter in your server",
      preset: false,
      type: "toggle"
    },
    "levelmsgs": {
      titleCase: "Level Up Messages",
      description: "Let people know when they level up",
      preset: true,
      type: "toggle"
    },
    "ff": {
      titleCase: "Family Friendly",
      description: "Keeps the bot's responses family friendly",
      preset: false,
      type: "toggle"
    },
    "anime": {
      titleCase: "Anime",
      description: "Enables anime in your server",
      preset: false,
      type: "toggle"
    },
    "automeme": {
      titleCase: "Auto-Memes",
      description: "Enables aoto-meme in your server",
      preset: false,
      type: "toggle"
    },
    "prefix": {
      titleCase: "Bot Prefix",
      description: "Sets the bot prefix in your server",
      preset: "!",
      type: "string"
    },
    "color": {
      titleCase: "XP Color",
      description: "The color for the XP progress bar",
      preset: "#fcba03",
      type: "string"
    },
    "background": {
      titleCase: "XP Background",
      description: "The color for the XP background",
      preset: "default",
      type: "string"
    }
  }
}