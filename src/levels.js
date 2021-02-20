var main = function (client, bot, db, emebdColor, MessageEmbed) {
  var GuildApi = require('./guildapi.js');
  var UserApi = require('./userapi.js');
  var Xp = require('./xp.js');
var guildSettings = new GuildApi.GuildApi(db);
var userSettings = new UserApi.UserApi(db);
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === 'undefined') {
    stroke = false;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}

    var embedColor = emebdColor;
    var Discord = require('discord.js');
    var Canvas = require('canvas');
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
    var percentOf = function(a,b) {
      return(100-a/b*100);
    };
    var getLevel = function(xp) {
     var arr = [];
var levelReq = 140;
for (var i = 0; i < 100; i++) {
  arr.push(Math.floor(levelReq));
  levelReq = levelReq * 1.35;
}
var level = 0;
var keepgoing = true;
var out;
for (var i = 0; i < arr.length; i++) {
  if (xp < arr[i]) {
    if (keepgoing) {
      keepgoing = false;
      out = i;
    }
  }
}
return out+1;
    }
    var getLevelReq = function(level) {
     var arr = [];
var levelReq = 140;
for (var i = 0; i < 100; i++) {
  arr.push(Math.floor(levelReq));
  levelReq = levelReq * 1.35;
}
return arr[level-1]
}
    var cooldown = new Set();
    var cooldowntimer = {};
    var xp = {
      addXp: function(amount, user, guild) {
        if (db.get('xp.'+guild+'.'+user) == null || db.get('xp.'+guild+'.'+user) == undefined) {
          db.set('xp.'+guild+'.'+user,0)
        }
        db.set('xp.'+guild+'.'+user,parseInt(db.get('xp.'+guild+'.'+user))+amount);
      },
      getRank: function(user, guild) {
var maxSpeed = db.get('xp.'+guild);
var sortable = [];
for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});
var out = 0;
for (var i = 0; i < sortable.length; i++) {
  if (sortable[i][0] == user) {
    out = i;
  }
}
return out+1;
      },
      removeXp: function(amount, user, guild) {
        if (parseInt(db.get('xp.'+guild+'.'+user))-amount < 0) {
          db.set('xp.'+guild+'.'+user,0);
        } else {
          db.set('xp.'+guild+'.'+user,parseInt(db.get('xp.'+guild+'.'+user))-amount);
        }
      },
      setXp: function(amount,user,guild) {
        db.set('xp.'+guild+'.'+user,amount);
      },
      getXp: function(user,guild) {
        if (db.get('xp.'+guild+'.'+user) == null || db.get('xp.'+guild+'.'+user) == undefined) {
          db.set('xp.'+guild+'.'+user,0)
        }
        return(db.get('xp.'+guild+'.'+user));
      }
    };
    var module = {
      xp: xp,
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
                if (cooldown.has(message.author.id+''+message.guild.id)) {

            } else {
              var previousLevel = getLevel(xp.getXp(message.author.id,message.guild.id));
              xp.addXp(getRandom(14,28),message.author.id,message.guild.id);
              db.set('cache.'+message.author.id,{
                avatar: message.author.displayAvatarURL({
                  dynamic: true
                }),
                tag: message.author.tag
              });
              var currentLevel = getLevel(xp.getXp(message.author.id,message.guild.id));
              if (currentLevel > previousLevel) {
                if (guildSettings.getGuild(message.guild.id).get('levelmsgs')) {
                  if (guildSettings.getGuild(message.guild.id).get('levelchannel') == "" || guildSettings.getGuild(message.guild.id).get('levelchannel') == null || guildSettings.getGuild(message.guild.id).get('levelchannel') == "current") {
                message.channel.send("⬆️ Level UP!  <@"+message.author.id+"> is now at level "+currentLevel)
                } else {
                  client.channels.cache.get(guildSettings.getGuild(message.guild.id).get('levelchannel')).send("⬆️ Level UP!  <@"+message.author.id+"> is now at level "+currentLevel)
                }
                }
              }
              cooldown.add(message.author.id+''+message.guild.id);
              setTimeout(() => {
                cooldown.delete(message.author.id+''+message.guild.id);
              }, 60000);
              cooldowntimer[message.author.id+''+message.guild.id] = Date.now() + 60000;
            }


        if (db.get("prefix")[message.guild.id] == null) {
            db.set('prefix.' + message.guild.id,'!');
        }
            
        var prefix = db.get('prefix')[message.guild.id];
        var p = prefix;

      switch (splitArgs(message.content.toLowerCase())[0]) {
    /*    case prefix+'oldXP':
        var user;
if (message.mentions.users.size) {
  user = message.mentions.users.first();
} else {
  user = message.author;
}
	var canvas = Canvas.createCanvas(700, 250);
	var ctx = canvas.getContext('2d');

	var background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
  
	ctx.fillText(user.tag, canvas.width / 2.7, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${xp.getXp(user.id,message.guild.id)} XP`, canvas.width / 2.7, canvas.height / 1.8);
  
  
	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Level ${getLevel(xp.getXp(user.id,message.guild.id))} - #${xp.getRank(user.id,message.guild.id)}`, canvas.width / 2.7, canvas.height / 1.2 );

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	var avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);
          break;
          */
        case prefix+'card':
        var user;
if (message.mentions.members.size) {
  user = message.mentions.members.first();
} else {
  user = message.member;
}
	var canvas = Canvas.createCanvas(850, 300);
	var ctx = canvas.getContext('2d');


  var wallpaper = splitArgs(message.content)[1] || "default";

	var background = await Canvas.loadImage('./misc/'+wallpaper+'.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'rgba(1,1,1,0.3)';
 // ctx.fillRect(25,25,canvas.width-50,canvas.height-50);

  roundRect(ctx,25,25,canvas.width-50,canvas.height-50,20,true,false);
//	ctx.strokeStyle = '#74037b';
//	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	// Slightly smaller text placed above the member's display name
	ctx.font = '29px sans-serif';
  ctx.textAlign = "left";
	ctx.fillStyle = '#ffffff';
  
	ctx.fillText("Sample Card#1234", 250+25, 190+25);


	ctx.font = '29px sans-serif';
  ctx.textAlign = "right";
	ctx.fillStyle = '#ffffff';
  

  var next = "10k/15k"
	ctx.fillText(next, 798, 190+25);
  ctx.textAlign = "left";

	// Add an exclamation point here and below

  // preview:
  // 6,969 XP
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`10,000 XP`, 275, canvas.height / 2.1+25);

  
	// Add an exclamation point here and below

  // preview:
  // Level 69
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Level 1`,275, canvas.height / 4 +25);

  ctx.textAlign = "right";
	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`#1`, 798, canvas.height / 4+25 );


  ctx.strokeStyle = 'rgba(255,255,255,0.3)'
ctx.beginPath()
ctx.lineTo(798, 213+25)
ctx.lineTo(250+25, 213+25)
ctx.lineWidth = "18";
ctx.stroke()


  ctx.strokeStyle = 'rgba(0,0,0,0.95)'
ctx.beginPath()
ctx.lineTo(total*7.98, 213+25)
ctx.lineTo(250+25, 213+25)
ctx.lineWidth = "18";
ctx.stroke()

	ctx.beginPath();
  // 125, 125, 100, 0
	ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	var avatar = await Canvas.loadImage('./misc/burple.png');

	ctx.drawImage(avatar, 50, 50, 200, 200);

	var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);

          break;



        case prefix+'level':
        case prefix+'rank':
        case prefix+'xp':
        var user;
if (message.mentions.members.size) {
  user = message.mentions.members.first();
} else {
  user = message.member;
}
	var canvas = Canvas.createCanvas(850, 300);
	var ctx = canvas.getContext('2d');


  if (userSettings.getUser(user.id).get('background')) {
    if (userSettings.getUser(user.id).get('background') == "default") {
      var ddd = undefined;
    } else {
      var ddd = userSettings.getUser(user.id).get('background');
    }
    var wallpaper = ddd || guildSettings.getGuild(message.guild.id).get('background') || "default";
  } else {
    var wallpaper = guildSettings.getGuild(message.guild.id).get('background') || "default";
    userSettings.getUser(user.id).set('background','default')
  }

	var background = await Canvas.loadImage('./misc/'+wallpaper+'.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'rgba(1,1,1,0.3)';
 // ctx.fillRect(25,25,canvas.width-50,canvas.height-50);

  roundRect(ctx,25,25,canvas.width-50,canvas.height-50,20,true,false);
	//ctx.strokeStyle = '#74037b';
	//ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '29px sans-serif';
  ctx.textAlign = "left";
	ctx.fillStyle = '#ffffff';
  
	ctx.fillText(user.user.tag, 250+25, 190+25);


	ctx.font = '29px sans-serif';
  ctx.textAlign = "right";
	ctx.fillStyle = '#ffffff';
  
if (getLevel(xp.getXp(user.id,message.guild.id)) == 1) {
  var first = xp.getXp(user.id,message.guild.id);
} else {
var first = xp.getXp(user.id,message.guild.id) - getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))-1);
}
var second = getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))) - getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))-1);


  if (second > 1000) {
    if (second > 10000) {

        if (second > 1000000) {
    var next = Math.round(first/1000000)+"m/"+Math.round(second/1000000)+"m";

      } else {
    var next = Math.round(first/1000)+"k/"+Math.round(second/1000)+"k";
    }
    } else {
                  var next = Math.round(first/100)/10+"k/"+Math.round(second/100)/10+"k";

      

    }
  } else {
    var next = first+"/"+second;
  }
	ctx.fillText(next, 798, 190+25);
  ctx.textAlign = "left";

	// Add an exclamation point here and below

  // preview:
  // 6,969 XP
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${xp.getXp(user.id,message.guild.id).toLocaleString()} XP`, 275, canvas.height / 2.1+25);

  
	// Add an exclamation point here and below

  // preview:
  // Level 69
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Level ${getLevel(xp.getXp(user.id,message.guild.id))}`,275, canvas.height / 4 +25);

  ctx.textAlign = "right";
	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`#${xp.getRank(user.id,message.guild.id)}`, 798, canvas.height / 4+25 );


  ctx.strokeStyle = 'rgba(255,255,255,0.3)'
ctx.beginPath()
ctx.lineTo(798, 213+25)
ctx.lineTo(250+25, 213+25)
ctx.lineWidth = "18";
ctx.stroke()
if (getLevel(xp.getXp(user.id,message.guild.id)) == 1) {
  var first = xp.getXp(user.id,message.guild.id);
} else {
var first = xp.getXp(user.id,message.guild.id) - getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))-1);
}
var second = getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))) - getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))-1);

var total = first/second*100;
var aaa;
if (user.displayHexColor == "#000000") {
  aaa = "#7289DA";
} else {
  aaa = user.displayHexColor
}
var clr = userSettings.getUser(user.id).get('color') || guildSettings.getGuild(message.guild.id).get('color') || aaa;
  ctx.strokeStyle = 'rgba('+hexToRgb(clr).r+','+hexToRgb(clr).g+','+hexToRgb(clr).b+',0.95)'
ctx.beginPath()
var kk = total*5.23+275;
if (kk < 276) {
  kk = 276;
}

ctx.lineTo(kk, 213+25)
ctx.lineTo(250+25, 213+25)
ctx.lineWidth = "18";
ctx.stroke()

	ctx.beginPath();
  // 125, 125, 100, 0
	ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	var avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png', size: 512 }));
	ctx.drawImage(avatar, 50, 50, 200, 200);

	var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);
          break;

        case p+'l-link':
        if (message.member.hasPermission("ADMINISTRATOR")) {
          guildSettings.getGuild(message.guild.id).set('levelchannel',message.channel.id+'')
          message.channel.send("The level up channel has been linked to <#"+message.channel.id+">");
        } else {
        message.channel.send(new Discord.MessageEmbed()
          .setTitle("Permissions Denied")
          .setDescription("You don't have the **Administrator** permission which is needed to run this command.")
          .setColor(options.embedColor)
        );

        }
          break;
        case p+'l-reset':
        if (message.member.hasPermission("ADMINISTRATOR")) {
          guildSettings.getGuild(message.guild.id).set('levelchannel','')
          message.channel.send("The level up channel has been reset to wherever the message is sent.");
      } else {
                message.channel.send(new Discord.MessageEmbed()
          .setTitle("Permissions Denied")
          .setDescription("You don't have the **Kick Members** permission which is needed to run this command.")
          .setColor(options.embedColor)
        );

      }
          break;
        case p+'setxp':
          if (message.mentions.members.size) {
            if (message.member.hasPermission("ADMINISTRATOR")) {
              if (splitArgs(message.content).length > 2) {
                if (parseInt(splitArgs(message.content)[2]) == splitArgs(message.content)[2]) {
                  if (parseInt(splitArgs(message.content)[2]) >= 0) {
                  xp.setXp(parseInt(splitArgs(message.content)[2]),message.mentions.members.first().id,message.guild.id);
                  message.channel.send(new Discord.MessageEmbed()
                  .setTitle("XP Set")
                  .setColor(embedColor)
                  .setDescription("<@"+message.mentions.members.first().id+">'s XP has been set to "+parseInt(splitArgs(message.content)[2]).toLocaleString()+".")
                  );
                  } else {
                  message.channel.send("XP amount must be a positive number.");
                  }
                } else {
                  message.channel.send("Invalid XP amount.")
                }
              } else {
                message.channel.send("You must specify an XP amount.")
              }
            } else {
              message.channel.send("You must have **Administrator** permissions to run this command.")
            }
          } else {
          if (message.member.hasPermission("ADMINISTRATOR")) {
              if (splitArgs(message.content).length > 1) {
                if (parseInt(splitArgs(message.content)[1]) == splitArgs(message.content)[1]) {
                  if (parseInt(splitArgs(message.content)[1]) >= 0) {
                  xp.setXp(parseInt(splitArgs(message.content)[1]),message.author.id,message.guild.id);
                  message.channel.send(new Discord.MessageEmbed()
                  .setTitle("XP Set")
                  .setColor(embedColor)
                  .setDescription("<@"+message.author.id+">'s XP has been set to "+parseInt(splitArgs(message.content)[1]).toLocaleString()+".")
                  );
                  } else {
                  message.channel.send("XP amount must be a positive number.");
                  }
                } else {
                  message.channel.send("Invalid XP amount.")
                }
              } else {
                message.channel.send("You must specify an XP amount.")
              }
            } else {
              message.channel.send("You must have **Administrator** permissions to run this command.")
            }
                      }
          break;

        default:
    
          break;
      }
    });
    return module;
};
class RankCard {
  constructor (tag, icon, xp, color, background, rank) {
    this.tag = tag;
    this.avatar = icon;
    this.xp = xp;
    this.color = color;
    this.background = background;
    this.rank = rank;
  }
  async render () {
    var hexToRgb = function(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
var roundRect = function(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === 'undefined') {
    stroke = false;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}

        var getLevel = function(xp) {
     var arr = [];
var levelReq = 130;
for (var i = 0; i < 100; i++) {
  arr.push(Math.floor(levelReq));
  levelReq = levelReq * 1.3;
}
var level = 0;
var keepgoing = true;
var out;
for (var i = 0; i < arr.length; i++) {
  if (xp < arr[i]) {
    if (keepgoing) {
      keepgoing = false;
      out = i;
    }
  }
}
return out+1;
    }
    var getLevelReq = function(level) {
     var arr = [];
var levelReq = 130;
for (var i = 0; i < 100; i++) {
  arr.push(Math.floor(levelReq));
  levelReq = levelReq * 1.3;
}
return arr[level-1]
}


	var canvas = Canvas.createCanvas(850, 300);
	var ctx = canvas.getContext('2d');

  var bbb = this.background || "default";
	var background = await Canvas.loadImage('./misc/'+bbb+'.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'rgba(1,1,1,0.3)';
 // ctx.fillRect(25,25,canvas.width-50,canvas.height-50);

  roundRect(ctx,25,25,canvas.width-50,canvas.height-50,20,true,false);
	//ctx.strokeStyle = '#74037b';
	//ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '29px sans-serif';
  ctx.textAlign = "left";
	ctx.fillStyle = '#ffffff';
  
	ctx.fillText(this.tag || "Unknown User#1234", 250+25, 190+25);


	ctx.font = '29px sans-serif';
  ctx.textAlign = "right";
	ctx.fillStyle = '#ffffff';
  
if (getLevel(this.xp) == 1) {
  var first = this.xp;
} else {
var first = this.xp - getLevelReq(getLevel(this.xp)-1);
}
var second = getLevelReq(getLevel(this.xp));


  if (second > 1000) {
    if (second > 10000) {

        if (second > 1000000) {
    var next = Math.round(first/1000000)+"m/"+Math.round(second/1000000)+"m";

      } else {
    var next = Math.round(first/1000)+"k/"+Math.round(second/1000)+"k";
    }
    } else {
                  var next = Math.round(first/100)/10+"k/"+Math.round(second/100)/10+"k";

      

    }
  } else {
    var next = first+"/"+second;
  }
	ctx.fillText(next, 798, 190+25);
  ctx.textAlign = "left";

	// Add an exclamation point here and below

  // preview:
  // 6,969 XP
	ctx.font = applyText(canvas, `${''}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${this.xp.toLocaleString()} XP`, 275, canvas.height / 2.1+25);

  
	// Add an exclamation point here and below

  // preview:
  // Level 69
	ctx.font = applyText(canvas, `${user.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Level ${getLevel(this.xp)}`,275, canvas.height / 4 +25);

  ctx.textAlign = "right";
	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${''}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`#${this.rank}`, 798, canvas.height / 4+25 );


  ctx.strokeStyle = 'rgba(255,255,255,0.3)'
ctx.beginPath()
ctx.lineTo(798, 213+25)
ctx.lineTo(250+25, 213+25)
ctx.lineWidth = "18";
ctx.stroke()
if (getLevel(this.xp) == 1) {
  var first = this.xp;
} else {
var first = this.xp - getLevelReq(getLevel(this.xp)-1);
}
var second = getLevelReq(getLevel(this.xp));

var total = first/second*100;
var clr = this.color || "#ffffff";
  ctx.strokeStyle = 'rgba('+hexToRgb(clr).r+','+hexToRgb(clr).g+','+hexToRgb(clr).b+',0.95)'
ctx.beginPath()
var kk = total*5.23+275;
if (kk < 276) {
  kk = 276;
}

ctx.lineTo(kk, 213+25)
ctx.lineTo(250+25, 213+25)
ctx.lineWidth = "18";
ctx.stroke()

	ctx.beginPath();
  // 125, 125, 100, 0
	ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	var avatar = await Canvas.loadImage(this.avatar);
	ctx.drawImage(avatar, 50, 50, 200, 200);


	return canvas.toBuffer();

  }
}
module.exports = {
  main: main,
  RankCard: RankCard
}
