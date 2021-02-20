var Premium = require('./premium.js');
module.exports = function (client, bot, db, emebdColor, MessageEmbed) {
    const Lottery = require('./lottery.js');
    var GuildApi = require('./guildapi.js');
    var UserApi = require('./userapi.js');
    var testers = {
      canary: [
        "748577964311969923"
      ]
    };
var lottery = new Lottery();
var guildSettings = new GuildApi.GuildApi(db);
var userSettings = new UserApi.UserApi(db);
var Canvas = require('canvas');
var Discord = require('discord.js');
const { registerFont } = require('canvas');
registerFont('./fonts/poppins-semibold.ttf', { family: 'sans-serif' });
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
var nextLotto = Date.now() + 7200000;
setInterval(() => {
  var autos = db.get('autos');
  for (var user in autos) {
    if (autos[user] == true) {
      if (inventory.getItem('ticket',user) > 0) {
        inventory.removeItem('ticket',user,1);
        lottery.join(user);
      }
    }
  }
  var winner = lottery.draw();
  if (winner !== undefined) {
    client.channels.cache.get('786666135369285643').send(new MessageEmbed().setColor(emebdColor).setTitle("Lottery Winner").setDescription("<@"+winner+"> won the `$"+lottery.amount.toLocaleString()+"` lottery. There were a total of "+lottery.participants.toLocaleString()+" people who entered.")).then(sentMsg => sentMsg.crosspost());
  } else {
    client.channels.cache.get('786666135369285643').send(new MessageEmbed().setColor(emebdColor).setTitle("No Drawing").setDescription("Nobody won the `$"+lottery.amount.toLocaleString()+"` lottery because nobody entered.")).then(sentMsg => sentMsg.crosspost());
  }
  lottery.reset();
  nextLotto = Date.now() + 7200000;
 }, 7200000);
//}, 10000);
    var percentOf = function(a,b) {
      return(100-a/b*100);
    };
    var sendTip = (channel, prefix, chance = 10) => {
      var tips = [
        "Want exclusive giveaways? Want to participate in the lottery? Join the official ThunderBot server to gain access to special perks. https://discord.gg/6XrEmyR8Qm",
        "If you want to loot boxes daily, make sure you're voting! It takes, like, 30 seconds of your time, but it means a lot to us. https://top.gg/bot/783743297453686795/vote",
        "Visit our docs at https://docs.thunderbot.cf to learn about hidden commands, additional features, and more!",
        "We offer our bot for free, and we rely on donations to keep the bot going. If you donate at https://thunderbot.cf/donate you'd really be helping us out, and if you can provide proof of donation you will recieve a multiplier.",
        "Too lazy to keep typing `"+prefix+"meme`? Try `"+prefix+"auto-meme`! You can cycle through memes by using a reaction, rather than typing.",
        "Want lower cooldowns, loot boxes, special roles, and TONS MORE? Become a supporter on https://patreon.com/thunderbot."
      ];
      if (1 == getRandom(1,chance)) {
        return channel.send(new MessageEmbed()
        .setTitle("**TIP:**")
        .setColor("#7289DA")
        .setDescription(tips[getRandom(0,tips.length-1)])
        );
      } else {
        return false;
      }
    }
    var dropid = "🎈";
    var dropitem = "donut";
    var loading = "<a:thunderbot_loading:786855945422241792>";
    var cooldown = {};
    var cooldowntimer = {};
    var statuseffects = {};
    cooldown.work = new Set();
    cooldowntimer.work = {};
    cooldown.rob = new Set();
    cooldowntimer.rob = {};
    cooldown.peace = new Set();
    cooldowntimer.peace = {};
    cooldown.daily = new Set();
    cooldowntimer.daily = {};
    cooldown.hourly = new Set();
    cooldowntimer.hourly = {};
    cooldown.beg = new Set();
    cooldowntimer.beg = {};
    cooldown.post = new Set();
    cooldowntimer.post = {};
    cooldown.search = new Set();
    cooldowntimer.search = {};
    cooldown.donut = new Set();
    cooldowntimer.donut = {};
    cooldown.drive = new Set();
    cooldowntimer.drive = {};
    cooldown.funny = new Set();
    cooldowntimer.funny = {};
    cooldown.gamble = new Set();
    cooldowntimer.gamble = {};
    var shop = {
      //"dradel": 1000,
      //"cookie": 100,
      "clover": 3000,
      "search": 575,
      "ticket": 5000,
      "wall": 50000,
      "cellphone": 1750,
      "padlock": 5000,
      "security": 500000,
      "shield": 10000,
      "donut": 10,
      //"ticket": 3000,
      "scratcher": 300,
      "car": 45000,
      "pigeon": 4000,
      "bolt": 1000000,
      "bigbox": 5000,
      "fancybox": 10000,
      "cat": 30000
    };
    var sale = {
     // "security": 430000,
     // "shield": 9500,
      "wall": 43000
    };
    var names = [
      "Jack Mehoff",
      "Mike Ock",
      "Allota Fagina",
      "Donald Trump",
      "Homeless Smith",
      "Dick Hertz",
      "Mike Oxlong",
      "Barack Obama",
      "Joe Biden",
      "Hillary Clinton",
      "<@783743297453686795>",
      "Gabe Itch",
      "Sally",
      "Tom Nook",
      "Dank Memer",
      "Your mom",
      "Your dad",
      "Simeon Koch",
      "Janice Cox",
      "Jenna Tailia",
      "Letitia Cannon",
      "Lidia Coles",
      "Finn Cunningham",
      "Paula Conner",
      "Malia Ramirez",
      "Dixie Normous",
      "Mike Rack",
      "E. Norma Stits",
      "E. Norma Scock",
      "Eda Dick",
      "Hugh G. Rection"
    ];
    var cleanNames = [
      "Emrys Hurst",
      "Chester Cantrell",
      "Michalina Parkes",
      "Fionnuala Barber",
      "Kymani Webber",
      "Leslie Davenport",
      "Amin Lucero",
      "Johnny Wilkins",
      "Shaun Tyson",
      "Clara Bouvet",
      "Akshay Ballard",
      "Ashley Mccarthy",
      "Oakley Rodriquez",
      "Mikey Markham",
      "Kenzie Archer",
      "Andy Meadows",
      "Arsalan Mackenzie",
      "Renesmee Morrow",
      "Patrik Oconnell",
      "Lilly-Grace Amos",
      "Dillan Davis",
      "Ho Diaz",
      "Rhiannan Millar",
      "Zubair Valentine",
      "Isra Murray",
      "Ismail Johnson",
      "Tasnim Mellor",
      "Ivan Krueger",
      "Rowena Warren",
      "Katie-Louise Callaghan",
      "Manpreet Merrill",
      "Abigail Barclay",
      "Dion Hail",
      "Lana Appleton",
      "Rebeca Medina",
      "Uwais Meza",
      "Imaad Mcpherson",
      "Aidan Bernal",
      "Harun Frey",
      "William Andrews",
      "Ebony Bautista",
      "Dana Levy",
      "Kim Humphreys",
      "Kayley Velasquez",
      "Aariz Bone",
      "Carolina Raymond",
      "Campbell Cash",
      "Anil Bates",
      "Isla-Rae Fellows",
      "Cydney Vasquez",
      "Nicola Ochoa",
      "Gordon Perez",
      "Shakeel Mcphee",
      "Emmie Carver",
      "Brandon Wiley",
      "Kay Combs",
      "Neive Brandt",
      "Adela Green",
      "Ioana Rich",
      "Leland Juarez",
      "Rukhsar Browning",
      "Jolene Finley",
      "Darsh Phelps",
      "Jameel Caldwell",
      "Jett Trujillo",
      "Saqlain Hodge",
      "Kynan Cruz",
      "Fardeen Lake",
      "Macauly Villalobos"
    ];
    var locations = [
      "bed",
      "attic",
      "car",
      "van",
      "bus",
      "hospital",
      "area51",
      "air",
      "toilet",
      "couch",
      "jacket",
      "sweatshirt",
      "pockets",
      "shoes",
      "plant",
      "grocery store",
      "old lady",
      "trash"
    ];
    var loot_tables = {
      "legendbox": {
        "coin": {
          min: 1000,
          max: 10000
        },
        "scratcher": {
          min: 3,
          max: 5
        },
        "bigbox": {
          min: 0,
          max: 1
        },
        "fancybox": {
          special: function(){
            if (getRandom(1,3) == 3) {
              return(1);
            } else {
              return(0);
            }
          },
          min: 0,
          max: 0
        },
        "bolt": {
          special: function(){
            if (getRandom(1,5) == 5) {
              return(1);
            } else {
              return(0);
            }
          },
          min: 0,
          max: 0
        }
      },
      "dropchest": {
        "coin": {
          min: 0,
          max: 7500
        },
        "scratcher": {
          min: 0,
          max: 1
        },
        "bigbox": {
          special: function(){
            if (getRandom(1,4) == 3) {
              return(1);
            } else {
              return(0);
            }
          },
          min: 0,
          max: 0
        },
        "bolt": {
          special: function(){
            if (getRandom(1,10) == 5) {
              return(1);
            } else {
              return(0);
            }
          },
          min: 0,
          max: 0
        }
      },
      "bigbox": {
        "coin": {
          min: 500,
          max: 3000
        },
        "scratcher": {
          min: 0,
          max: 1
        },
        "clover": {
          min: 0,
          max: 2
        },
        "cookie": {
          min: 0,
          max: 3
        },
        "donut": {
          min: 0,
          max: 10
        }
      },
      "fancybox": {
        "coin": {
          min: 1500,
          max: 7500
        },
        "clover": {
          min: 0,
          max: 3
        },
        "donut": {
          min: 1,
          max: 15
        },
        "bleach": {
          min: 0,
          max: 1
        },
        "bolt": {
          special: function(){
            if (getRandom(1,13) == 13) {
              return(1);
            } else {
              return(0);
            }
          },
          min: 0,
          max: 0
        }
      }
    };
    var pl = {
      "bleach": "Bleaches",
      "trophy": "Trophies"
    };
    var plural = function(item,amount) {
      var am = amount || 2;
      if (am == 1) {
        return(item);
      } else {
        if (Object.keys(pl).includes(item)) {
          return(pl[item]);
        } else {
          return(item+"s");
        }
      }
    };
    var namespace = {
      "wall": {
        name: "Wall",
        shoptitle: "The perfect way to annoy everyone",
        category: "Annoyance",
        emoji: "<:wall:810670752541442059>",
        useFunction(message){
          inventory.removeItem('wall',message.author.id,1);
          message.channel.send(require('./wall.js'));
        },
        resale: function(){
          return({
            price: 1000,
            message: "Yes because a wall can easily be sold that's exactly how things work.",
            send: true
          })
        }
      },
      "cat": {
        name: "Cat",
        shoptitle: "Meow! Meow!",
        category: "Pet",
        emoji: ":cat:",
        useFunction: function(message){
          var subcommand = splitArgs(message.content)[2];
          if (subcommand == "name") {
            if (splitArgs(message.content).length > 3) {
              return 
            } else {
              message.channel.send("Well, what are you going to name it?")
            }
          }
          message.channel.send("**__`EMBED RENDER ERROR ! || NOT_FOUND ITEM_CAT`__**");
        },
        resale: function(){
          return({
            price: 0,
            message: "WTF NO YOU DID NOT THAT'S NOT HOW IT WORKS YOU CAN'T SELL CATS! You're sick.",
            send: true,
          })
        }
      },
      "security": {
        name: "SimpliSafe Home Security",
        shoptitle: "Protect yourself from robbers forever",
        category: "Security",
        emoji: "<:security:809871861843230770>",
        useFunction: function(message){
          message.channel.send("You're earnings are secured!");
        },
        resale: function(){
          return({
            price: 3000,
            message: "null",
            send: false,
          })
        }
      },
      "shield": {
        name: "Shield",
        shoptitle: "Lower your chances of being robbed",
        category: "Security",
        emoji: "🛡",
        useFunction: function(message){
          message.channel.send("You're earnings are *more* secured!");
        },
        resale: function(){
          return({
            price: 1000,
            message: "null",
            send: false,
          })
        }
      },
      "padlock": {
        name: "Padlock",
        shoptitle: "Protect yourself from robbers, but you can only use it once",
        category: "Security",
        emoji: "🔒",
        useFunction: function(message){
          message.channel.send("It's all locked up!");
        },
        resale: function(){
          return({
            price: 300,
            message: "I mean I guess somebody else can use it.",
            send: true,
          })
        }
      },
      "dradel": {
        name: "Dradel",
        shoptitle: "A Hanukkah tradition!",
        category: "Collectable",
        emoji: "<:dradel:789161315616292914>",
        useFunction: function(message){
          var opts = ["Gimel","Hey","Nun","Shin"];
          var spun = opts[getRandom(opts.length)-1];
          message.channel.send("Spinning dradel...");
          setTimeout(function(){ message.channel.send("You spun "+spun+"!") },getRandom(1,5000));
        },
        resale: function(){
          return({
            price: 500,
            message: "none",
            send: false
          })
        }
      },
      "dropchest": {
        name: "Drop Chest",
        shoptitle: "A loot box dropped at random",
        category: "Loot Box",
        emoji: "<:dropchest:795461625229869066>",
        useFunction: function(message){
          var loot = loot_tables["dropchest"];
          var items = Object.keys(loot);
          var values = [];
          var output = [];
          for (var i = 0; i < items.length; i++) {
            if (loot[items[i]].special == undefined) {
              values.push(getRandom(loot[items[i]].min,loot[items[i]].max))
            } else {
              values.push(loot[items[i]].special())
            }
          }
          for (var i = 0; i < values.length; i++) {
            if (values[i] > 0) {
              if (items[i] == "coin") {
                wallet.addMoney(values[i],message.author.id);
              } else {
                inventory.addItem(items[i],message.author.id,values[i]);
              }
              output.push("**"+values[i]+" "+plural(items[i],values[i]).toLowerCase()+"**");
            }
          }
          message.channel.send("You found "+output.join(", ")+" in your **<:dropchest:795461625229869066> Drop Chest**");
          inventory.removeItem('dropchest',message.author.id)
        }
      },
      "legendbox": {
        name: "Legendary Box",
        shoptitle: "A supporter-exclusive box",
        category: "Loot Box",
        emoji: "<:legendchest:795459257243795496>",
        useFunction: function(message){
          var loot = loot_tables["legendbox"];
          var items = Object.keys(loot);
          var values = [];
          var output = [];
          for (var i = 0; i < items.length; i++) {
            if (loot[items[i]].special == undefined) {
              values.push(getRandom(loot[items[i]].min,loot[items[i]].max))
            } else {
              values.push(loot[items[i]].special())
            }
          }
          for (var i = 0; i < values.length; i++) {
            if (values[i] > 0) {
              if (items[i] == "coin") {
                wallet.addMoney(values[i],message.author.id);
              } else {
                inventory.addItem(items[i],message.author.id,values[i]);
              }
              output.push("**"+values[i]+" "+plural(items[i],values[i]).toLowerCase()+"**");
            }
          }
          message.channel.send("You found "+output.join(", ")+" in your **<:legendchest:795459257243795496> Legendary Box**");
          inventory.removeItem('legendbox',message.author.id)
        }
      },
      "bigbox": {
        name: "Big Box",
        shoptitle: "A common loot box",
        category: "Loot Box",
        emoji: "<:thunderbot_package:787750791531462696>",
        useFunction: function(message){
          var loot = loot_tables["bigbox"];
          var items = Object.keys(loot);
          var values = [];
          var output = [];
          for (var i = 0; i < items.length; i++) {
            if (loot[items[i]].special == undefined) {
              values.push(getRandom(loot[items[i]].min,loot[items[i]].max))
            } else {
              values.push(loot[items[i]].special())
            }
          }
          for (var i = 0; i < values.length; i++) {
            if (values[i] > 0) {
              if (items[i] == "coin") {
                wallet.addMoney(values[i],message.author.id);
              } else {
                inventory.addItem(items[i],message.author.id,values[i]);
              }
              output.push("**"+values[i]+" "+plural(items[i],values[i]).toLowerCase()+"**");
            }
          }
          message.channel.send("You found "+output.join(", ")+" in your **<:thunderbot_package:787750791531462696> Big Box**");
          inventory.removeItem('bigbox',message.author.id)
        },
        resale: function(){
          return({
            price: 500,
            message: "none",
            send: false
          })
        }
      },
      "fancybox": {
        name: "Fancy Box",
        shoptitle: "An uncommon loot box",
        category: "Loot Box",
        emoji: "<:thunderbox_fancy:787886574452736021>",
        useFunction: function(message){
          var loot = loot_tables["fancybox"];
          var items = Object.keys(loot);
          var values = [];
          var output = [];
          for (var i = 0; i < items.length; i++) {
            if (loot[items[i]].special == undefined) {
              values.push(getRandom(loot[items[i]].min,loot[items[i]].max))
            } else {
              values.push(loot[items[i]].special())
            }
          }
          for (var i = 0; i < values.length; i++) {
            if (values[i] > 0) {
              if (items[i] == "coin") {
                wallet.addMoney(values[i],message.author.id);
              } else {
                inventory.addItem(items[i],message.author.id,values[i]);
              }
              output.push("**"+values[i]+" "+plural(items[i],values[i])+"**");
            }
          }
          message.channel.send("You found "+output.join(", ")+" in your **<:thunderbox_fancy:787886574452736021> Fancy Box**");
          inventory.removeItem('fancybox',message.author.id)
        },
        resale: function(){
          return({
            price: 1500,
            message: "none",
            send: false
          })
        }
      },
      "cookie": {
        name: "Gingerbread Cookie",
        shoptitle: "Why not show a little holiday spirit? (Limited time item)",
        category: "Power-Up",
        emoji: "<:thunderbot_gingerbread:787030222745894952>",
        useFunction: function(message){
          message.channel.send("Yum yum yum!");
          inventory.removeItem('cookie',message.author.id);
        },
        resale: function(){
          return({
            price: 100,
            message: "People ***love*** gingerbread cookies!",
            send: true
          })
        }
      },
      "scratcher": {
        name: "ThunderBall Scratcher",
        shoptitle: "Win up to 100k!",
        category: "Lottery",
        emoji: "<:scratcher:794691237121753089>",
        useFunction: function(message){
          inventory.removeItem('scratcher',message.author.id);
          var score = getRandom(1,100);
          var cash = 0;
          if (score > 90) {
            if (score > 95) {
              if (score == 97) {
                wallet.addMoney(100000,message.author.id);
                return message.channel.send("**YOU WON THE BIG BUCKS!! 100k HAS BEEN PLACED IN YOUR WALLET!**");
              } else {
                cash = 50000;
              }
            } else {
              cash = 30000; 
            }
          } else {
            if (score > 60) {
              cash = getRandom(0,20000);
            } else {
              return message.channel.send("Your scratcher was unsuccessful. You got **0 coins**.");
            }
          }
          message.channel.send("You got a payout of **"+cash+" coins**.")
          wallet.addMoney(cash,message.author.id);
        },
        resale: function(){
          return({
            price: 0,
            message: "I don't think anyone wants to buy your losing scratchers.",
            send: true
          })
        }
      },
      "ticket": {
        name: "ThunderBall Lottery Ticket",
        shoptitle: "Buy a lotto ticket!",
        category: "Lottery",
        emoji: "<:lotto:794690214122749982>",
        useFunction: function(message){
          lottery.join(message.author.id, 1000);
          message.channel.send("You entered the lottery! Don't want to do it manually? Run `"+db.get('prefix.'+message.guild.id)+"autolottery` to enter automatically.");
          console.log(lottery);
          inventory.removeItem('ticket',message.author.id,1);
        },
        resale: function(){
          return({
            price: 0,
            message: "I don't think anyone really want's to buy your losing lottery tickets.",
            send: true
          })
        }
      },
      "bolt" : {
        name: "Lightning Bolt",
        shoptitle: "Yeah this is how you flex on other people that aren't rich.",
        category: "Collectable",
        emoji: ":zap:",
        useFunction: function(message){
          if (message.mentions.users.size) {
            var flexOn = "<@"+message.mentions.users.first().id+">";
            if (inventory.getItem('bolt',message.mentions.users.first().id) > 0) {
              message.channel.send("Well, they have a **:zap: Lightning Bolt** too, so it's not that big of a deal.");
            } else {
              message.channel.send("Wow, look at that! <@"+message.author.id+"> has a **:zap: Lightning Bolt**, and you don't, "+flexOn+"!");
            }
          } else {
            message.channel.send("Who do you want to flex on? Try again.");
          }
        },
        resale: function(){
          return({
            price: 500000,
            message: "none",
            send: false
          })
        }
      },
      "trophy": {
        name: "Trophy",
        category: "Collectable",
        shoptitle: "This item cannot be bought in the shop.",
        emoji: ":trophy:",
        useFunction: function(message){
          message.channel.send("You can't use a trophy, it just sits there.");
        },
        resale: function(){
          return({
            price: 3000,
            message: "Say goodbye!",
            send: false
          })
        }
      },
      "car": {
        name: "Car",
        category: "Tool",
        shoptitle: "Be an Uber driver!",
        emoji: ":red_car:",
        useFunction: function(message){
          var name = () => {
            if (guildSettings.getGuild(message.guild.id).get('ff')) {
              return cleanNames[getRandom(1,names.length)-1]
            } else {
              return names[getRandom(1,names.length)-1]
            }
          };
          if (inventory.getItem('cellphone',message.author.id) > 0) {
            if (cooldown.drive.has(message.author.id)) {
              var time = parseInt(cooldowntimer.drive[message.author.id])-Date.now();
              message.channel.send("Looks like nobody needs a ride right now. Try again in **" + Math.floor(time/1000) + " seconds**.");
            } else {
              var coinsToEarn = getRandom(4599,9500);
              db.set('bal.'+message.author.id,parseInt(db.get('bal.'+message.author.id))+coinsToEarn);
              message.channel.send("You drove **"+name()+"** and earned **" + coinsToEarn + " coins**!")
              cooldown.drive.add(message.author.id);
              setTimeout(() => {
                cooldown.drive.delete(message.author.id);
              }, 45000);
              cooldowntimer.drive[message.author.id] = Date.now() + 45000;
            }
          } else {
            message.channel.send("You don't have a cellphone! You need one to be an Uber driver.")
          }

        },
        resale: function(){
          return({
            price: 10000,
            messages: "Car values go down as soon as you drive them off the lot.",
            send: true
          })
        }
      },
      "bleach": {
        name: "Bleach",
        category: "Power-Up",
        shoptitle: "Risk everything for #1 Trending? Yeah, let's do it!",
        emoji: "<:thunderbot_bleach:786681999867117569>",
        useFunction: function(message){
          if(getRandom(1,3) == 3) {
            message.channel.send("**GUYS LOOK HERE! #1 TRENDING IS <@"+message.author.id+">!!** You survived, and lived to get $300k. You also get a trophy.");
            wallet.addMoney(300000,message.author.id);
            inventory.addItem('trophy',message.author.id);
          } else {
            message.channel.send("You drank some **<:thunderbot_bleach:786681999867117569> Bleach** and **☠ Died**. Don't say I didn't warn you.");
            inventory.removeItem('bleach',message.author.id)
            wallet.setMoney(0,message.author.id);
          }
        },
        resale: function(){
          return({
            price: 4000,
            message: "No message.",
            send: false
          })
        }
      },
      "pigeon": {
        name: "Pigeon",
        category: "Collectable",
        shoptitle: "Well, who doesn't want a pigeon?",
        emoji: "<:thunderbot_pigeon:786289472325156895>",
        useFunction: function(message){
          if (getRandom(1,3) == 2) {
            message.channel.send("You tried to use the pigeon, but it flew away, and now you don't have it anymore. Also, it pooped on your head.");
            inventory.removeItem('pigeon',message.author.id);
          } else {
            message.channel.send("You can't use a pigeon lol.");
          }
        },
        resale: function(){
          return({
            price: 300,
            message: "Wow, someone actually bought it.",
            send: true
          });
        }
      },
      "donut": {
        name: "Donut",
        category: "Power-Up",
        shoptitle: "A food item that could give you anywhere from 5 to 20 coins.",
        emoji: ":doughnut:",
        useFunction: function(message){
          if (cooldown.donut.has(message.author.id)) {
            var time = parseInt(cooldowntimer.donut[message.author.id])-Date.now();
            message.channel.send("You're too full! You can eat again in **" + Math.floor(time/1000) + " seconds**.");
          } else {
            var rs = getRandom(5,20);
            message.channel.send("You ate a **:doughnut: Donut** and earned **"+rs+" coins**.");
            inventory.removeItem('donut',message.author.id);
            wallet.addMoney(rs,message.author.id);
            cooldown.donut.add(message.author.id);
            setTimeout(() => {
              cooldown.donut.delete(message.author.id);
            }, 20000);
            cooldowntimer.donut[message.author.id] = Date.now() + 20000;

          }
        },
        resale: function(){
          return({
            price: 0,
            message: "Ew nobody wants a stale donut.",
            send: true
          })
        }
      },
      "search": {
        name: "Magnifying Glass",
        category: "Tool",
        shoptitle: "Be a detective and find coins in the most random of places.",
        emoji: "<:thunderbot_search:786362327736778792>",
        useFunction: function(message){
          if (cooldown.search.has(message.author.id)) {
            var time = parseInt(cooldowntimer.search[message.author.id])-Date.now();
            message.channel.send("You're tired out from searching. You can search again in **" + Math.floor(time/1000) + " seconds**.");
          } else {

            var searched = locations[getRandom(1,locations.length)-1].toUpperCase();
            if (getRandom(1,6) == 3) {
              var coinsfound = getRandom(1800,3000);
            } else {
              var coinsfound = getRandom(100,1300);
            }
            wallet.addMoney(coinsfound,message.author.id);
            message.channel.send("You searched the **`"+searched+"`** and found **"+coinsfound+" coins**.");
            cooldown.search.add(message.author.id);
            setTimeout(() => {
              cooldown.search.delete(message.author.id);
            }, 40000);
            cooldowntimer.search[message.author.id] = Date.now() + 40000;
          }
        },
        resale: function(){
          return({
            price: 200,
            message: "",
            send: false
          })
        }
      },
      "cellphone": {
        name: "Cell Phone",
        category: "Tool",
        shoptitle: "Post to Instagram and make some cash!",
        emoji: "<:thunderbot_cellphone:786688128974716948>",
        useFunction: function(message){
          if (inventory.getItem('cellphone',message.author.id) > 0) {
            if (cooldown.post.has(message.author.id)) {
              var time = parseInt(cooldowntimer.post[message.author.id])-Date.now();
              message.channel.send("Don't post to often! You can post again in **" + Math.floor(time/1000) + " seconds**.");
            } else {
              var coinsToEarn = getRandom(500,4000);
              db.set('bal.'+message.author.id,parseInt(db.get('bal.'+message.author.id))+coinsToEarn);
              wallet.addMoney(coinsToEarn,message.author.id);
              message.channel.send("You posted to your Instagram and got **" + coinsToEarn + " coins** from the ads.")
              cooldown.post.add(message.author.id);
              setTimeout(() => {
                cooldown.post.delete(message.author.id);
              }, 45000);
              cooldowntimer.post[message.author.id] = Date.now() + 45000;
            }
          } else {
            message.channel.send("You don't have a cellphone! Buy one to post to your Instagram.")
          }
        },
        resale: function(){
          return({
            price: 6000,
            message: "Someone bought your used phone.",
            send: true
          });
        }
      },
      "clover": {
        name: "Clover",
        category: "Power-Up",
        shoptitle: "Increases luck when gambling!",
        emoji: "<:thunderbot_clover:786338462738939905>",
        useFunction: function(message){
          if (effects.has('lucky',message.author)) {
            message.channel.send("You already have a clover boost.");
          } else {
            message.channel.send("You've used a **<:thunderbot_clover:786338462738939905> Clover**. Recieve an increase in luck for 30 seconds.");
            effects.add('lucky',message.author.id,30000);
            inventory.removeItem('clover',message.author.id);
          }
        },
        resale: function(){
          return({
            price: 1,
            message: "Nobody else believes in good luck, so they only bought it for 1 coin.",
            send: true
          });
        }
      }
    };
    var pets = {
      set: function(user,pet){
        db.set('pets.'+user,pet)
      },
      get: function(user){
        return(db.get('pets.'+user))
      },
      check: function(user,pet){
        return(db.get('pets.'+user) == pet)
      },
      
    };
    var inventory = {
      addItem: function(item, id, amount){
        var amm = amount|| 1;
        var itemContext = db.get('inventory.'+id+'.'+item);
        if (itemContext == null || itemContext == undefined) {
          db.set('inventory.'+id+'.'+item,amm);
          return db.get('inventory.'+id+'.'+item)
        } else {
          db.set('inventory.'+id+'.'+item,db.get('inventory.'+id+'.'+item)+amm);
          return db.get('inventory.'+id+'.'+item)
        }
      },
      removeItem: function(item, id, amount){
        var amm = amount|| 1;
        var itemContext = db.get('inventory.'+id+'.'+item);
        if (itemContext == null || itemContext == undefined) {
          db.set('inventory.'+id+'.'+item,0);
        } else {
          if (db.get('inventory.'+id+'.'+item) < amm) {
            db.set('inventory.'+id+'.'+item,0);
          } else {
            db.set('inventory.'+id+'.'+item,db.get('inventory.'+id+'.'+item)-amm);
          }
        }
      },
      getItem: function(item, id){
        if (db.get('inventory.'+id+'.'+item) == null || db.get('inventory.'+id+'.'+item) == undefined) {
          return 0;
          db.set('inventory.'+id+'.'+item,0);
        } else {
          return db.get('inventory.'+id+'.'+item);
        }
      }
    };
    var effects = {
      add: function(effect, user, time) {
        if (statuseffects[user] == undefined) {
          statuseffects[user] = [];
        }
        statuseffects[user].push(effect);
        var q = statuseffects[user].length-1;
        setTimeout(function(){ statuseffects[user].splice(q) },time);
      },
      removeAll: function() {
        statuseffects[user].length = 0;
      },
      has: function(effect, user) {
        if (statuseffects[user] == undefined) {
          statuseffects[user] = [];
        }
        return(statuseffects[user].includes(effect));
      }
    };
    var wallet = {
      addMoney: function(amount, user) {
        db.set('bal.'+user,parseInt(db.get('bal.'+user))+amount);
      },
      subtractMoney: function(amount, user) {
        if (parseInt(db.get('bal.'+user))-amount < 0) {
          db.set('bal.'+user,0);
        } else {
          db.set('bal.'+user,parseInt(db.get('bal.'+user))-amount);
        }
      },
      setMoney: function(amount,user) {
        db.set('bal.'+user,amount);
      },
      getMoney: function(user) {
        return(db.get('bal.'+user));
      }
    };
    var module = {
      drop: () => {
        return(dropid);
      },
      namespace: namespace,
      inventory: inventory,
      wallet: wallet,
      effects: effects,
      voteReward: function(vote){
        client.users.fetch(vote.user).then(user => {
          if (vote.isWeekend) {
            try {
              user.send("Thanks for voting for **<:thunderbot:787071827431653416>ThunderBot**! Here's your vote reward:\n\n**1x** <:thunderbox_fancy:787886574452736021> Fancy Box - *`fancybox`* (Because it's the weekend.)");
              inventory.addItem('fancybox',vote.user);
            } catch(err) {
              console.error(err);
            }
          } else {
            try {
              user.send("Thanks for voting for **<:thunderbot:787071827431653416>ThunderBot**! Here's your vote reward:\n\n**1x** <:thunderbot_package:787750791531462696> Big Box - *`bigbox`*");
              inventory.addItem('bigbox',vote.user);
            } catch(err) {
              console.error(err);
            }
          }
        }).catch(err => {
          console.error(err);
        });
      }
    };
    var admins = [ "748577964311969923", "448269422814298112", "691701043851034688", "700436934702399509" ];
    module.about = "Yeah. Pretty lame.";
    var splitArgs = (str) => { // modern javascript
      var myRegexp = /[^\s"]+|"([^"]*)"/gi; //#StackOverflowFTW
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
    };
    if (db.get("bal") == null) {
      db.set("bal",{});
    }
    var getRandom = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    client.on('message', async message => {
        if(message.author.id == client.user.id) {
            return;
        }
        if(message.channel.type == 'dm') {
            return;
        }
        if (db.get("prefix")[message.guild.id] == null) {
            db.set('prefix.' + message.guild.id,'!');
        }
            
        var prefix = db.get('prefix')[message.guild.id];
        var p = prefix;
        if (!message.content.startsWith(p)) return;
        
    if (message.channel.id == "783747271693959199") {
      return message.channel.send("Please run all bot commands in <#783749811588956220> or <#789203099956936724>.");
    }
      switch (splitArgs(message.content.toLowerCase())[0]) {
        case prefix+'autolottery':
          db.set('autos.'+message.author.id,true);
          message.channel.send(new MessageEmbed().setColor(emebdColor).setTitle("Auto Lottery Enabled").setDescription("Auto lottery has been enabled. You can disable it with `"+prefix+"disableautolottery`"));
          break;
        case prefix+'rob':
          if (cooldown.rob.has(message.author.id)) {
            var time = (parseInt(cooldowntimer.rob[message.author.id])-Date.now())/1000;
            return message.channel.send("You can't rob that quickly! Wait "+Math.floor(time)+" more seconds.");
          }
          if (!testers.canary.includes(message.author.id)) {
          //  return message.channel.send("Looks like you've stumbled upon a in-development feature! This feature is for our testers only, and is currently in: **`Canary Stage 1`**");
          }
          if (!message.mentions.members.size) {
            return message.channel.send("You must mention someone you'd like to rob.");
          }
          if (message.mentions.members.first().id == message.author.id) {
            return message.channel.send("You can't rob yourself!");
          }
          if (message.mentions.members.first().bot) {
            return message.channel.send("You can't rob bots!");
          }
          if (wallet.getMoney(message.author.id) < 500) {
            return message.channel.send("You must have at least 500 coins to try and rob somebody.");
          }
          if (wallet.getMoney(message.mentions.members.first().id) < 500) {
            return message.channel.send("<@"+message.mentions.members.first().id+"> doesn't even have 500 coins, it's not worth it man.");
          }
          if (userSettings.getUser(message.mentions.members.first().id).get('peace')) {
            return message.channel.send("<@"+message.mentions.members.first().id+"> is in Peace Mode. They're probably meditating, so leave them alone!");
          }
          if (userSettings.getUser(message.author.id).get('peace')) {
            return message.channel.send("You're in Peace Mode! If you want to attack, you have to lower your own shields first.");
          }
          if (inventory.getItem("security",message.mentions.members.first().id)) {
            return message.channel.send("It looks like <@"+message.mentions.members.first().id+"> has a **<:security:809871861843230770> SimpliSafe Home Security**, so you can't rob them!");
          }
          if (inventory.getItem("shield",message.mentions.members.first().id)) {
            var multi = 3;
          } else {
            var multi = 1;
          }
          if (inventory.getItem("padlock",message.mentions.members.first().id)) {
            message.channel.send("Uh oh! They had a padlock, so you couldn't get in. The police are coming after you!");
            inventory.removeItem("padlock",message.mentions.members.first().id);
                    cooldown.rob.add(message.author.id);
          setTimeout(() => {
            cooldown.rob.delete(message.author.id);
          }, 60000);
          cooldowntimer.rob[message.author.id] = Date.now() + 60000;
          return;
}
          if (getRandom(1,13*multi) == 2) {
            var ccc = wallet.getMoney(message.mentions.members.first().id);
            console.log(ccc, "all");
            wallet.setMoney(0,message.mentions.members.first().id);
            wallet.addMoney(ccc,message.author.id);
            message.channel.send("You stole **"+ccc+" coins** from <@"+message.mentions.members.first().id+">, now __run the police are coming!__")
                    cooldown.rob.add(message.author.id);
          setTimeout(() => {
            cooldown.rob.delete(message.author.id);
          }, 60000);
          cooldowntimer.rob[message.author.id] = Date.now() + 60000;
          return;
}
          if (getRandom(1,8*multi) == 2) {
            var ccc = Math.floor(wallet.getMoney(message.mentions.members.first().id) / 4);
            console.log(ccc, "one fourth");
            wallet.subtractMoney(ccc,message.mentions.members.first().id);
            wallet.addMoney(ccc,message.author.id);
            message.channel.send("You stole **"+ccc+" coins** from <@"+message.mentions.members.first().id+">, now __run the police are coming!__")
                    cooldown.rob.add(message.author.id);
          setTimeout(() => {
            cooldown.rob.delete(message.author.id);
          }, 60000);
          cooldowntimer.rob[message.author.id] = Date.now() + 60000;
          return;
}
          if (getRandom(1,4*multi) == 2) {
            var ccc = Math.floor(wallet.getMoney(message.mentions.members.first().id) / 6);
            console.log(ccc, "one sixth");
            wallet.subtractMoney(ccc,message.mentions.members.first().id);
            wallet.addMoney(ccc,message.author.id);
            message.channel.send("You stole **"+ccc+" coins** from <@"+message.mentions.members.first().id+">, now __run the police are coming!__")
                    cooldown.rob.add(message.author.id);
          setTimeout(() => {
            cooldown.rob.delete(message.author.id);
          }, 60000);
          cooldowntimer.rob[message.author.id] = Date.now() + 60000;
          return;
}
          message.channel.send("The police caught you and you had to pay 500 coins to get out of jail.");
          cooldown.rob.add(message.author.id);
          setTimeout(() => {
            cooldown.rob.delete(message.author.id);
          }, 60000);
          cooldowntimer.rob[message.author.id] = Date.now() + 60000;
          wallet.subtractMoney(500,message.author.id);
          break;
        case prefix+'peace':
        if (cooldown.peace.has(message.author.id)) {
          return message.channel.send("You can only toggle peace mode every hour.");
        }
          if (splitArgs(message.content).length > 1) {
            var arg = splitArgs(message.content)[1]
            if (arg == "on" || arg == "true" || arg == "enabled" || arg == "yes") {
              userSettings.getUser(message.author.id).set('peace',true);
              message.channel.send("Peace mode has been turned on.");
            } else {
              userSettings.getUser(message.author.id).set('peace',false);
              message.channel.send("Peace mode has been turned off.");
            }
                    cooldown.peace.add(message.author.id);
          setTimeout(() => {
            cooldown.peace.delete(message.author.id);
          }, 60000*60);
          cooldowntimer.peace[message.author.id] = Date.now() + 60000*60;
          } else {
            message.channel.send("You must specify weather you want to turn peace mode on or off.");
          }
          break;
        case prefix+'disableautolottery':
          db.set('autos.'+message.author.id,false);
          message.channel.send(new MessageEmbed().setColor(emebdColor).setTitle("Auto Lottery Disabled").setDescription("Auto lottery has been disabled. You can enable it with `"+prefix+"autolottery`"));
          break;
        case prefix+'bal':
          if (message.mentions.users.size) {
            if (db.get("bal")[message.mentions.users.first().id] == null) {
              db.set('bal.'+message.mentions.users.first().id,0);
            }
            var bal = db.get("bal")[message.mentions.users.first().id];
            message.channel.send("<@" + message.mentions.users.first().id + ">'s current balance is **" + bal + " coins**.");
          } else {
            if (db.get("bal")[message.author.id] == null) {
              db.set('bal.'+message.author.id,0);
            }
            var bal = db.get("bal")[message.author.id];
            message.channel.send("Your current balance is **" + bal + " coins**.");
          }
          break;
        case prefix+'maths':
                //if (message.mentions.users.first().id) {
          var user = message.mentions.users.first() || message.author;
        //} else { 
         // var user = message.author;
        //}
	var canvas = Canvas.createCanvas(500, 324);
	var ctx = canvas.getContext('2d');

	//const background = await Canvas.loadImage('./wallpaper.jpg');
  var background = await Canvas.loadImage('https://pi998nv7pc.execute-api.us-east-1.amazonaws.com/production/svg?tex=x=5');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	//ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${message.author.displayName}!`);
	ctx.fillStyle = '#ffffff';
	//ctx.fillText(`${message.author.username}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(315, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	var avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 215, 25, 200, 200);

  var hand = await Canvas.loadImage('./facepalm.png');
	ctx.drawImage(hand, 0, 0, 500, 324);

	var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'facepalm.png');

	message.channel.send(attachment);
          break;
        case prefix+'nitro':
          var ncode = "https://discord.com/gifts/";
          for (var i = 0; i < 16; i++) {
            if (getRandom(1,2) == 1) {
              ncode = ncode + Math.random().toString(36).substr(2,5).substring(0,1).toUpperCase();
            } else {
              ncode = ncode + Math.random().toString(36).substr(2,5).substring(0,1).toLowerCase();
            }
          }
          message.channel.send(ncode);
          break;
        case prefix+'dick':
        if (guildSettings.getGuild(message.guild.id).get('ff') == false) {
          if (message.mentions.users.first()) {
            message.channel.send("<@"+message.mentions.users.first().id+">'s dick:\n**8"+"=".repeat(getRandom(0,10))+">**");
          } else {
            message.channel.send("<@"+message.author.id+">'s dick:\n**8"+"=".repeat(getRandom(0,10))+">**");
          }
        }
          break;
        case prefix+'pp':
        if (guildSettings.getGuild(message.guild.id).get('ff') == false) {
          if (message.mentions.users.first()) {
            message.channel.send("<@"+message.mentions.users.first().id+">'s pp:\n**8"+"=".repeat(getRandom(0,10))+">**");
          } else {
            message.channel.send("<@"+message.author.id+">'s pp:\n**8"+"=".repeat(getRandom(0,10))+">**");
          }
        }
          break;
        case prefix+'rich':
          message.channel.send(new MessageEmbed()
            .setColor(emebdColor)
            .setTitle("Privileged Gateway Intent")
            .setDescription("The `"+prefix+"rich` command requires caching all of the members of a server, which the bot cannot do until it is verified by Discord.")
          );
          break;
        case prefix+'claim':
          if (splitArgs(message.content)[1]) {
            switch (splitArgs(message.content)[1].toLowerCase()) {
              case dropid.toLowerCase():
                message.channel.send("You claimed the drop. Run `"+prefix+"use "+dropitem+"` to open it.");
                client.channels.cache.get('786666135369285643').send('<@'+message.author.id+'> claimed the drop.');
                dropid = "🎈";
                inventory.addItem(dropitem,message.author.id,1);
                break;
              default:
                message.channel.send("Invalid claim code.")
                break;
            }
          } else {
            return message.channel.send("You must provide a claim code.")
          }
          break;
        case prefix+'lottery-stats':
        case prefix+'lotterystats':
          var embed = new MessageEmbed();
          embed.setColor(emebdColor);
          embed.setTitle("Lottery Stats");
          embed.addFields([
            { name: "Participants", value: "`"+lottery.participants.toLocaleString()+"`", inline: true },
            { name: "Prize", value: "`"+lottery.amount.toLocaleString()+" coins`", inline: true },
            { name: "Next Drawing", value: "`"+Math.floor(((nextLotto)-Date.now())/60/1000)+" minutes`", inline: true }
          ]);
          message.channel.send(embed);
          break;
        case prefix+'admin':
          if (admins.includes(message.author.id) && splitArgs(message.content)[1]) {
            switch (splitArgs(message.content)[1].toLowerCase()) {
              case 'lottery':
                message.channel.send("Coming soon.");
                break;
              case 'premium': 
                switch (splitArgs(message.content)[2].toLowerCase()) {
                  case 'add':
                    if (message.mentions.users.size) {
                      if (new Premium.User(message.mentions.users.first().id).premium) {
                        message.channel.send("User already has premium.");
                      } else {
                        new Premium.User(message.mentions.users.first().id).setPremium('Infinity')
                      }
                    } else {
                      message.channel.send("Please mention the user you would like to give premium.");
                    }
                    break;
                  case 'remove':
                  case 'delete':
                    if (message.mentions.users.size) {
                      if (new Premium.User(message.mentions.users.first().id).premium) {
                        new Premium.User(message.mentions.users.first().id).removePremium();
                        message.channel.send("<@"+message.mentions.users.first().id+"> no longer has premium.");

                      } else {
                        message.channel.send("That user does not have premium.");
                      }
                    } else {
                      message.channel.send("Please mention the user you would like to remove premium.");
                    }
                    break;
                  default:
                    message.channel.send("Subcommand not found.");
                }
                break;
              case 'status':
                if (splitArgs(message.content).length > 2) {
                  switch (splitArgs(message.content)[2]) {
                    case 'yellow':
                      client.channels.cache.get('796546467040985128').setName('Status: 🟡');
                      message.channel.send("Status set to 🟡.");
                      break;
                    case 'green':
                      client.channels.cache.get('796546467040985128').setName('Status: 🟢');
                      message.channel.send("Status set to 🟢.");
                      break;
                    case 'red':
                      client.channels.cache.get('796546467040985128').setName('Status: 🔴');
                      message.channel.send("Status set to 🔴.");
                      break;
                    default:
                      message.channel.send('Invalid bot status.');
                      break;
                  }
                } else {
                  return message.channel.send("Invalid usage. Please select the status you would like.");
                }
                break;
              case 'canceldrop':
                dropid = "🎈";
                dropitem = "donut";
                client.channels.cache.get('786666135369285643').send('Drop ended.')
                break;
              case 'customdrop':
                if (splitArgs(message.content).length > 3) {
                  if (namespace[splitArgs(message.content)[2]]) {
                    if (parseInt(splitArgs(message.content)[3]) < 401) {
                      message.channel.send("You just dropped a "+namespace[splitArgs(message.content)[2]].emoji+" **"+namespace[splitArgs(message.content)[2]].name+"** that will expire in **"+parseInt(splitArgs(message.content)[3])+" minutes**.");
                      dropid = 'TB'+getRandom(1000,9999);
                      dropitem = namespace[splitArgs(message.content)[2]].name.toLowerCase()+'';
                      client.channels.cache.get('786666135369285643').send("<@&786670454525263902> **LOOT DROP! A "+namespace[splitArgs(message.content)[2]].emoji+" "+namespace[splitArgs(message.content)[2]].name+" WAS JUST DROPPED AND WILL EXPIRE IN "+parseInt(splitArgs(message.content)[3])+" MINUTES (at time of posting). RUN `!claim "+dropid+"` TO CLAIM IT!**\nDrop ID: `"+dropid+'`')

                      setTimeout(() => {
                        if (dropitem == "donut") {
                          return;
                        }
                        dropid = "🎈";
                        dropitem = "donut";
                        client.channels.cache.get('786666135369285643').send('Drop ended.')
                      },parseInt(splitArgs(message.content)[3])*60000);
                    } else {
                      return message.channel.send("Invalid time. Must be under 6 hours.")
                    }
                  } else {
                    return message.channel.send("Invalid item.")
                  }
                } else {
                  return message.channel.send("Please specify an item and how many minutes it will last. Example: `!admin customdrop fancybox 10`")
                }
                break;
              case 'drop':
                message.channel.send("You just dropped a <:dropchest:795461625229869066> **Drop Chest**.");
                dropid = 'TB'+getRandom(1000,9999);
                dropitem = 'dropchest'
                client.channels.cache.get('786666135369285643').send('<@&786670454525263902> **<:dropchest:795461625229869066> LOOT DROP! RUN `!claim '+dropid+'` TO CLAIM IT!**\nDrop ID: `'+dropid+'`')
                break;
              case 'legendarydrop':
                message.channel.send("You just dropped a <:legendchest:795459257243795496> **Legendary Box**.");
                dropid = 'TB'+getRandom(1000,9999);
                dropitem = 'legendbox';
                client.channels.cache.get('786666135369285643').send('<@&786670454525263902> **<:legendchest:795459257243795496> LEGENDARY LOOT DROP! RUN `!claim '+dropid+'` TO CLAIM IT!**\nDrop ID: `'+dropid+'`')
                break;
              default:
                message.channel.send("Admin function `"+splitArgs(message.content)[1]+"` not found.");
                break;
            }
          } else {
            if (admins.includes(message.author.id)) {
              message.channel.send("Please specify an admin function.")
            } else {
              message.channel.send("You do not have permission to run admin functions.")
            }
          }
          break;
        case prefix+'setbal':
          if (admins.includes(message.author.id)) {
            if (message.mentions.users.size) {
              db.set('bal.'+message.mentions.users.first().id
    ,splitArgs(message.content)[2])
              var bal = db.get("bal")[message.mentions.users.first().id
    ];
              message.channel.send("<@"+message.mentions.users.first().id+">'s new balance is **" + bal + " coins**.");
            } else {
              db.set('bal.'+message.author.id
    ,splitArgs(message.content)[1])
              var bal = db.get("bal")[message.author.id
    ];
              message.channel.send("Your new balance is **" + bal + " coins**.");
            }
          } else {
            message.channel.send("You can't change someone's balance, silly!");
          }
          break;
        case prefix+'work':
          if (cooldown.work.has(message.author.id)) {
            var time = parseInt(cooldowntimer.work[message.author.id])-Date.now();
            message.channel.send("Don't overwork yourself! You can work again in **" + Math.floor(time/1000/60) + " minutes**.");
          } else {
            var coinsToEarn = getRandom(100,1000);
            wallet.addMoney(coinsToEarn,message.author.id);
            message.channel.send("Hard work will be rewarded! You earned **" + coinsToEarn + " coins**!")
            cooldown.work.add(message.author.id);
            setTimeout(() => {
              cooldown.work.delete(message.author.id);
            }, 3600000);
            cooldowntimer.work[message.author.id] = Date.now() + 3600000;

          }
          break;
        case prefix+'hourly':
        if (new Premium.User(message.author.id).premium) {
          if (cooldown.hourly.has(message.author.id)) {
            var time = parseInt(cooldowntimer.hourly[message.author.id])-Date.now();
            message.channel.send("You can only claim your hourly coins, well, every hour. Please wait **" + Math.floor(time/1000/60) + " minutes**.");
          } else {
            var coinsToEarn = getRandom(700,2000);
            wallet.addMoney(coinsToEarn,message.author.id);
            message.channel.send("Here's your premium hourly bonus: You earned **" + coinsToEarn + " coins**!")
            cooldown.hourly.add(message.author.id);
            setTimeout(() => {
              cooldown.hourly.delete(message.author.id);
            }, 3600000);
            cooldowntimer.hourly[message.author.id] = Date.now() + 3600000;
          }
        } else {
          message.channel.send("This feature is for **permium users only**. To get premium, visit our website: https://thunderbot.cf/premium")
        }
        case prefix+'daily':
        if (new Premium.User(message.author.id).premium) {
          if (cooldown.hourly.has(message.author.id)) {
            var time = parseInt(cooldowntimer.daily[message.author.id])-Date.now();
            message.channel.send("You can only claim your daily coins, well, every day. Please wait **" + Math.floor(time/1000/60) + " minutes**.");
          } else {
            var coinsToEarn = getRandom(1000,2300);
            wallet.addMoney(coinsToEarn,message.author.id);
            message.channel.send("Here's your premium daily bonus: You earned **" + coinsToEarn + " coins**!")
            cooldown.daily.add(message.author.id);
            setTimeout(() => {
              cooldown.daily.delete(message.author.id);
            }, 3600000*24);
            cooldowntimer.daily[message.author.id] = Date.now() + 3600000*24;
          }
        } else {
          message.channel.send("This feature is for **permium users only**. To get premium, visit our website: https://thunderbot.cf/premium")
        }
          break;
        case prefix+'beg':
          var name = () => {
            if (guildSettings.getGuild(message.guild.id).get('ff')) {
              return cleanNames[getRandom(1,names.length)-1]
            } else {
              return names[getRandom(1,names.length)-1]
            }
          };
          if (cooldown.beg.has(message.author.id)) {
            var time = parseInt(cooldowntimer.beg[message.author.id])-Date.now();
            message.channel.send("Stop begging for money! You can beg again in **" + Math.floor(time/1000) + " seconds**.");
          } else {
            sendTip(message.channel,p);
            var coinsToEarn = getRandom(0,500);
            db.set('bal.'+message.author.id,parseInt(db.get('bal.'+message.author.id))+coinsToEarn);
            message.channel.send("**" + name() + "** donated **" + coinsToEarn + " coins**!")
            cooldown.beg.add(message.author.id);
            wallet.addMoney(coinsToEarn,message.authorid);
            setTimeout(() => {
              cooldown.beg.delete(message.author.id);
            }, 30000);
            cooldowntimer.beg[message.author.id] = Date.now() + 30000;
          }
          break;
          /*
        case bot.prefix+'post':
          if (inventory.getItem('cellphone',message.author.id) > 0) {
            if (cooldown.post.has(message.author.id)) {
              var time = parseInt(cooldowntimer.post[message.author.id])-Date.now();
              message.channel.send("Don't post to often! You can post again in **" + Math.floor(time/1000) + " seconds**.");
            } else {
              var coinsToEarn = getRandom(500,4000);
              db.set('bal.'+message.author.id,parseInt(db.get('bal.'+message.author.id))+coinsToEarn);
              message.channel.send("You posted to your Instagram and got **" + coinsToEarn + " coins** from the ads.")
              cooldown.post.add(message.author.id);
              setTimeout(() => {
                cooldown.post.delete(message.author.id);
              }, 45000);
              cooldowntimer.post[message.author.id] = Date.now() + 45000;
            }
          } else {
            message.channel.send("You don't have a cellphone! Buy one to post to your Instagram.")
          }
          break;
          */
        case prefix+'give':
          if (message.mentions.users.size) {
            if (db.get('bal.'+message.author.id) >= splitArgs(message.content)[2] && splitArgs(message.content)[2] >= 0) {
              db.set('bal.'+message.author.id,parseInt(db.get('bal.'+message.author.id))-parseInt(splitArgs(message.content)[2]));
              db.set('bal.'+message.mentions.users.first().id,parseInt(db.get('bal.'+message.mentions.users.first().id))+parseInt(splitArgs(message.content)[2])); 
              sendTip(message.channel,p);   
              message.channel.send("You gave <@"+message.mentions.users.first().id+"> **"+splitArgs(message.content)[2] + " coins**.")      
            } else {
              message.channel.send("You turn your pockets inside out, only to realize you don't have enough money.")
            }
          } else {
            message.channel.send("Who do you want to give money to? Try again.")
          }
          break;
        case prefix+'inv':
          if (message.mentions.users.size) {
            if (db.get('inventory.'+message.mentions.users.first().id) == null || db.get('inventory.'+message.mentions.users.first().id) == undefined) {
              message.channel.send(new MessageEmbed()
              .setColor(emebdColor)
              .setTitle(message.mentions.users.first().username+"'s Inventory")
              .setDescription("Lol you don't have anything.")
              );
            } else {
              var ov = Object.values(db.get('inventory.'+message.mentions.users.first().id));
              var ok = Object.keys(db.get('inventory.'+message.mentions.users.first().id));
              var list = [];
              for (var i = 0; i < Object.values(db.get('inventory.'+message.mentions.users.first().id)).length; i++) {
                if (parseInt(ov[i]) == 0) {
                  // Lol do nothing
                } else {
                  try {
                    list.push(namespace[ok[i]].emoji+" **"+namespace[ok[i]].name+"** ─ "+ov[i]+'\n*ID* `'+ok[i]+'` ─ '+namespace[ok[i]].category);
                  } catch(e) {
                    // big error :0
                  }
                }
              }
              var  msg = "";
              for (var i = 0; i < list.length; i++) {
                msg = msg + list[i]+'\n';
              }
              if (list.length == 0) {
                msg = "Lol you don't have anything.";
              }
              sendTip(message.channel,p);
              message.channel.send(new MessageEmbed()
              .setColor(emebdColor)
              .setTitle(message.mentions.users.first().username+"'s Inventory")
              .setDescription(msg)
              );
            }
          } else {
            if (db.get('inventory.'+message.author.id) == null || db.get('inventory.'+message.author.id) == undefined) {
              message.channel.send(new MessageEmbed()
              .setColor(emebdColor)
              .setTitle(message.author.username+"'s Inventory")
              .setDescription("Lol you don't have anything.")
              );
            } else {
              var ov = Object.values(db.get('inventory.'+message.author.id));
              var ok = Object.keys(db.get('inventory.'+message.author.id));
              var list = [];
              for (var i = 0; i < Object.values(db.get('inventory.'+message.author.id)).length; i++) {
                if (parseInt(ov[i]) == 0) {
                  // Lol do nothing
                } else {
                  //list.push(JSON.stringify(namespace[ok[i]]));
                  try {
                    list.push(namespace[ok[i]].emoji+" **"+namespace[ok[i]].name+"** ─ "+ov[i]+'\n*ID* `'+ok[i]+'` ─ '+namespace[ok[i]].category);
                  } catch(e) {
                    // another big boi error
                  }
                }
              }
              var  msg = "";
              for (var i = 0; i < list.length; i++) {
                msg = msg + list[i]+'\n';
              }
              if (list.length == 0) {
                msg = "Lol you don't have anything.";
              }
              message.channel.send(new MessageEmbed()
              .setColor(emebdColor)
              .setTitle(message.author.username+"'s Inventory")
              .setDescription(msg)
              );
            }
          }
          break;
        case prefix+'shop':
          var ov = Object.values(shop);
          var ok = Object.keys(shop);
          var list = [];
          var flash = [];
          for (var i = 0; i < ok.length; i++) {
            if (Object.keys(sale).includes(ok[i])) {
              flash.push(namespace[ok[i]].emoji+" **"+namespace[ok[i]].name+"** ─ ~~" + ov[i] + "~~ __"+sale[ok[i]]+" coins__ (**"+Math.ceil(percentOf(parseInt(sale[ok[i]]),parseInt(ov[i])))+"% off**) ─ "+namespace[ok[i]].category+"\n"+namespace[ok[i]].shoptitle + " ─ *ID* `"+ok[i]+"`")
            } else {
              list.push(namespace[ok[i]].emoji+" **"+namespace[ok[i]].name+"** ─ __" + ov[i] + " coins__ ─ "+namespace[ok[i]].category+"\n"+namespace[ok[i]].shoptitle + " ─ *ID* `"+ok[i]+"`")

            }
          }
          var msg = "";
          if (list.length == 0) {
            msg = "Looks like we're out of stock.";
          } else {
            if (splitArgs(message.content).length > 1) {
              if (parseInt(splitArgs(message.content)[1]) == splitArgs(message.content)[1]) {
                var page = parseInt(splitArgs(message.content)[1]);
                
              } else {
                if (splitArgs(message.content)[1] == "blackmarket") {
                  message.channel.send("Coming soon!");
                  return message.delete();
                } else {
                  return message.channel.send("Lol if you're getting a specific page at least put a number.");
                }
              }
            } else {
              var page = 1;
            }
            var itemsonpage = 6;
            var realitemsonpage = itemsonpage-flash.length;
            var flashitemsonpage = flash.length;
            var q = realitemsonpage;
            var startingpoint = realitemsonpage*page-q;
            var out = [];
            var out2 = [];
            msg = "";
            var title = "SHOP ITEMS";
            if (flashitemsonpage > 0) {
              msg = msg + "**🚨 FLASH SALE! LIMITED TIME! 🚨**\n";
              var title = "OTHER SHOP ITEMS";
            }
            for (var i = 0; i < flashitemsonpage; i++) {
              out.push(flash[i]);
              msg = msg + out.join("\n\n");
            }
            msg = msg + "\n\n**🛒 "+title+" 🛒**\n";
            for (var i = startingpoint; i < startingpoint+realitemsonpage; i++) {
              out2.push(list[i]);
            }
            msg = msg+out2.join("\n\n");
          }
          if (page > Math.ceil(list.length/realitemsonpage)) {
            if (page == 69) {
              if (guildSettings.getGuild(message.guild.id).get('ff') == false) {
              if (cooldown.funny.has(message.author.id)) {
                var time = parseInt(cooldowntimer.funny[message.author.id])-Date.now();
                message.channel.send("Can't be horny all the time. Try again in **" + Math.floor(time/1000) + " seconds**.");
              } else {
                message.channel.send("Lol funny number. Here take 69 coins.");
                cooldown.funny.add(message.author.id);
                setTimeout(() => {
                  cooldown.funny.delete(message.author.id);
                }, 69000);
                cooldowntimer.funny[message.author.id] = Date.now() + 69000;
              }
              wallet.addMoney(69,message.author.id);
              } else {
                message.channel.send("Page not found.")
              }
            } else {
              message.channel.send("Page not found.")
            }
          } else {
            sendTip(message.channel,p);
            message.channel.send(new MessageEmbed()
              .setColor(emebdColor)
              .setTitle("ThunderShop")
              .setDescription(msg)
              .setFooter("ThunderShop ─ Page "+page+" of "+Math.ceil(list.length/realitemsonpage))
            );
          }
          break;
        case prefix+'buy':
          if (splitArgs(message.content).length < 2) {
            message.channel.send("Well, what are you buying? Try again.");
          } else {
            var ov = Object.values(shop);
            var ok = Object.keys(shop);
            var desired = splitArgs(message.content)[1].toLowerCase();
            if (ok.includes(desired)) {
              if (splitArgs(message.content).length == 3 && splitArgs(message.content)[2] > 1) {
                var requested = parseInt(splitArgs(message.content)[2]);
                if (parseInt(wallet.getMoney(message.author)) >= parseInt(shop[desired]*requested)) {
                  wallet.subtractMoney(shop[desired]*requested,message.author);
                  inventory.addItem(desired,message.author,requested);
                  sendTip(message.channel,p);
                  message.channel.send("You just purchased "+ requested +" **"+namespace[desired].emoji+" "+namespace[desired].name + "s** for **"+shop[desired]*requested+" coins**.");
                } else {
                  message.channel.send("These items cost **"+shop[desired]*requested+" coins**, but you only have **"+wallet.getMoney(message.author)+" coins**.");
                }
              } else {
                if (parseInt(wallet.getMoney(message.author)) >= parseInt(shop[desired])) {
                  wallet.subtractMoney(shop[desired],message.author);
                  inventory.addItem(desired,message.author);
                  message.channel.send("You just purchased a **"+namespace[desired].emoji+" "+namespace[desired].name + "** for **"+shop[desired]+" coins**.");
                } else {
                  message.channel.send("This item costs **"+shop[desired]+" coins**, but you only have **"+wallet.getMoney(message.author)+" coins**.");
                }
              }
            } else {
              message.channel.send("We don't have that item! Try again.")
            }
          }
          break;
        case prefix+'gamble':
          if (cooldown.gamble.has(message.author.id)) {
            var time = parseInt(cooldowntimer.gamble[message.author.id])-Date.now();
            message.channel.send("Woah woah woah! Stop gambling. Try again in **" + Math.floor(time/1000) + " seconds**.");
          } else {
            if (splitArgs(message.content).length > 1 && parseInt(splitArgs(message.content)[1]) > 0 || splitArgs(message.content)[1] == "all") {
              if (splitArgs(message.content)[1] == "all") {
                var moneys = wallet.getMoney(message.author);
                var botroll = getRandom(1,6)+getRandom(1,6);
                  if (effects.has('lucky',message.author.id)) {
                    var personroll = getRandom(3,6)+getRandom(2,6);
                  } else {
                    var personroll = getRandom(1,6)+getRandom(1,6);
                  }
                  sendTip(message.channel,p);
                  if (botroll == personroll) {
                    message.channel.send(new MessageEmbed()
                    .setColor(emebdColor)
                    .setTitle("It's a tie!")
                    .setDescription("You kept your **"+moneys+" coins**.\n\n**🎲 Bot rolled:** "+botroll+"\n**🎲 You rolled:** "+personroll)
                    );
                  } else {
                    if (botroll > personroll) {
                      message.channel.send(new MessageEmbed()
                      .setColor("#eb4034")
                      .setTitle("Bot wins!")
                      .setDescription("You lost **"+moneys+" coins**.\n\n**🎲 Bot rolled:** "+botroll+"\n**🎲 You rolled:** "+personroll)
                      );
                      wallet.subtractMoney(moneys,message.author.id);
                    } else {
                      if (botroll < personroll) {
                        message.channel.send(new MessageEmbed()
                        .setColor("#32a852")
                        .setTitle("You win!")
                        .setDescription("You won **"+moneys+" coins**.\n\n**🎲 Bot rolled:** "+botroll+"\n**🎲 You rolled:** "+personroll)
                        );
                        wallet.addMoney(moneys,message.author.id);
                      }
                    }
                  }
              } else {
                if (parseInt(splitArgs(message.content)[1]) > 200000) {
                  message.channel.send("You can't gamble more than 200k!")
                } else {
                  if (wallet.getMoney(message.author.id) >= parseInt(splitArgs(message.content)[1])) {
                    var botroll = getRandom(1,6)+getRandom(1,6);
                    if (effects.has('lucky',message.author.id)) {
                      var personroll = getRandom(3,6)+getRandom(2,6);
                    } else {
                      var personroll = getRandom(1,6)+getRandom(1,6);
                    }
                    sendTip(message.channel,p);
                    if (botroll == personroll) {
                      message.channel.send(new MessageEmbed()
                      .setColor(emebdColor)
                      .setTitle("It's a tie!")
                      .setDescription("You kept your **"+splitArgs(message.content)[1]+" coins**.\n\n**🎲 Bot rolled:** "+botroll+"\n**🎲 You rolled:** "+personroll)
                      );
                    } else {
                      if (botroll > personroll) {
                        message.channel.send(new MessageEmbed()
                        .setColor("#eb4034")
                        .setTitle("Bot wins!")
                        .setDescription("You lost **"+splitArgs(message.content)[1]+" coins**.\n\n**🎲 Bot rolled:** "+botroll+"\n**🎲 You rolled:** "+personroll)
                        );
                        wallet.subtractMoney(parseInt(splitArgs(message.content)[1]),message.author.id);
                      } else {
                        if (botroll < personroll) {
                          message.channel.send(new MessageEmbed()
                          .setColor("#32a852")
                          .setTitle("You win!")
                          .setDescription("You won **"+splitArgs(message.content)[1]+" coins**.\n\n**🎲 Bot rolled:** "+botroll+"\n**🎲 You rolled:** "+personroll)
                          );
                          wallet.addMoney(parseInt(splitArgs(message.content)[1]),message.author.id);
                        }
                      }
                    }
                  } else {
                    message.channel.send("You don't even have that kind of money! Try again.")
                  }
                }
              }
            } else {
              message.channel.send("How much do you want to bet? Try again.")
            }
            cooldown.gamble.add(message.author.id);
            setTimeout(() => {
              cooldown.gamble.delete(message.author.id);
            }, 10000);
            cooldowntimer.gamble[message.author.id] = Date.now() + 10000;
          }
          break;
        case prefix+'vote':
          sendTip(message.channel,p);
          message.channel.send(new MessageEmbed()
          .setTitle("Vote for ThunderBot")
          .setDescription("Go to https://top.gg/bot/783743297453686795/vote to vote for ThunderBot, and get a **<:thunderbot_package:787750791531462696> Big Box**. Voting not only gives you special perks, but it helps support the development and growth of ThunderBot. It only takes a few clicks, but it means a lot to us.")
          .setColor(emebdColor)
          );
          break;
        case prefix+'use':
          var ok = Object.keys(namespace);
          if (inventory.getItem(splitArgs(message.content.toLowerCase())[1],message.author.id) > 0 ) {
            sendTip(message.channel,p);
            namespace[splitArgs(message.content.toLowerCase())[1]].useFunction(message);
          } else {
            if (!ok.includes(splitArgs(message.content.toLowerCase())[1])) {
              message.channel.send("Lol that item doesn't even exist.");
            } else {
              message.channel.send("You don't have that item.");
            }
          }
          break;
        case prefix+'gift':
          if (inventory.getItem(splitArgs(message.content)[2],message.author.id) > 0) {
            if (splitArgs(message.content).length == 4 && splitArgs(message.content)[3] > 1) {
              var desired = parseInt(splitArgs(message.content)[3]);
              if (inventory.getItem(splitArgs(message.content)[2],message.author.id) >= desired) {
                inventory.removeItem(splitArgs(message.content)[2],message.author.id,desired);
                inventory.addItem(splitArgs(message.content)[2],message.mentions.users.first().id,desired);
                sendTip(message.channel,p);
                message.channel.send("You gave <@"+message.mentions.users.first().id+"> "+desired+" **"+namespace[splitArgs(message.content)[2]].emoji+" "+plural(namespace[splitArgs(message.content)[2]].name)+"**.");
              } else {
                message.channel.send("You're trying to send "+desired+" **"+namespace[splitArgs(message.content)[2]].emoji+" "+plural(namespace[splitArgs(message.content)[2]]).name+"**, but you only have "+inventory.getItem(splitArgs(message.content)[2],message.author.id)+".")
              }
            } else {
              inventory.removeItem(splitArgs(message.content)[2],message.author.id);
              inventory.addItem(splitArgs(message.content)[2],message.mentions.users.first().id);
              message.channel.send("You gave <@"+message.mentions.users.first().id+"> a **"+namespace[splitArgs(message.content)[2]].emoji+" "+namespace[splitArgs(message.content)[2]].name+"**.");
            }
          } else {
            if (splitArgs(message.content).length > 1) {
            message.channel.send("Lol you don't even have that item!");
            } else {
              message.channel.send("Incorrect command usage. Usage:\n`"+prefix+"gift <@user> <itemID> [amount]`");
            }
          }
          break;
        case prefix+'sell':
          if (inventory.getItem(splitArgs(message.content)[1],message.author.id) > 0) {
            if (splitArgs(message.content).length == 3) {
              if (splitArgs(message.content)[2] == "all") {
                var howmany = inventory.getItem(splitArgs(message.content)[1],message.author.id);
                  inventory.removeItem(splitArgs(message.content)[1],message.author.id,inventory.getItem(splitArgs(message.content)[1],message.author.id));
                  var q = namespace[splitArgs(message.content)[1]].resale();
                  coins = q.price;
                  sendTip(message.channel,p);
                  wallet.addMoney(coins,message.author);
                  message.channel.send("You sold " + howmany + " **"+namespace[splitArgs(message.content)[1]].emoji+" "+plural(namespace[splitArgs(message.content)[1]].name)+"** for **"+coins*howmany+" coins**.");
                    if (q.send == true) {
                      message.channel.send(q.message);
                    }              } else {
                if (parseInt(splitArgs(message.content)[2]) == 0) {
                  message.channel.send("No, that's not how this works.");
                } else {
                  if (inventory.getItem(splitArgs(message.content)[1],message.author.id) >= parseInt(splitArgs(message.content)[2])) {
                    inventory.removeItem(splitArgs(message.content)[1],message.author.id,parseInt(splitArgs(message.content)[2]));
                    var q = namespace[splitArgs(message.content)[1]].resale();
                    coins = q.price;
                    message.channel.send("You sold " + parseInt(splitArgs(message.content)[2]) + " **"+namespace[splitArgs(message.content)[1]].emoji+" "+plural(namespace[splitArgs(message.content)[1]].name)+"** for **"+coins*parseInt(splitArgs(message.content)[2])+" coins**.");
                    if (q.send == true) {
                      message.channel.send(q.message);
                    }
                  } else {
                    message.channel.send("You don't have that many **"+namespace[splitArgs(message.content)[1]].emoji+" "+plural(namespace[splitArgs(message.content)[1]].name)+"**.")
                  }
                }
              }
            } else {
              inventory.removeItem(splitArgs(message.content)[1],message.author.id);
              var q = namespace[splitArgs(message.content)[1]].resale();
              coins = q.price;
              sendTip(message.channel,p);
              message.channel.send("You sold a **"+namespace[splitArgs(message.content)[1]].emoji+" "+namespace[splitArgs(message.content)[1]].name+"** for **"+coins+" coins**.");
                    if (q.send == true) {
                      message.channel.send(q.message);
                    }            }
          } else {
            message.channel.send("Lol you don't even have that item!");
          }
          break;
        case bot.prefix+'load':
          message.channel.send(loading);
          break;
        case bot.prefix+'lottery':
          if (message.channel.guild.id == "783745418391322715") {
            message.channel.send(new MessageEmbed()
            .setTitle("ThunderBot Lottery")
            .setDescription("The daily lottery drawings happen approx. every 2 hours.\n\n**ThunderBall: **__`$"+lottery.amount.toLocaleString()+"`__\nTo buy a **ThunderBall** lottery ticket, run `!buy ticket`. To see all the lottery commands, run `!help lottery`")
            .setColor(emebdColor)
            .setThumbnail("https://thundebot.yodacode.repl.co/assets/ticket.png")
            );
          } else {
            message.channel.send(new MessageEmbed()
            .setTitle("ThunderBot Lottery")
            .setDescription("To join the ThunderBot lottery, you need to be in thee official ThunderBot Discord server. Here's the link to join: https://discord.gg/6XrEmyR8Qm")
            );
          }
          break;
        default:
          break;
      }
    });
    client.on('message', message => {
    if (message.content.substring(0,11) == "bot!invite ") {
      client.channels.cache.get('783747271693959199').send(new MessageEmbed()
      .setTitle('Invite Log')
      .setDescription('Nice job <@'+message.content.substring(13,13+18)+">, you invited <@"+message.content.substring(35,35+18)+"> to the server and earned **5000 coins**.")
      .setColor(emebdColor)
      );
      wallet.addMoney(5000, message.content.substring(13,13+18));
    }
  });
    return module;
};