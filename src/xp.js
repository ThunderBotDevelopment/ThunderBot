var Discord = require('discord.js');
var Canvas = require('canvas');
var db = require('quick.db');
const { registerFont } = require('canvas');
registerFont('./fonts/poppins-semibold.ttf', { family: 'sans-serif' });
const applyText = (canvas, text) => {
  const ctx = canvas.getContext('2d');
  let fontSize = 70;
  do {
    ctx.font = `${fontSize -= 10}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 300);
  return ctx.font;
};
class Utility {
  static hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  static roundRect(ctx, x, y, width, height, radius, fill, stroke) {
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
  static getLevel(xp) {
    var arr = [];
    var levelReq = 130;
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
  static getLevelReq(level) {
    var arr = [];
    var levelReq = 130;
    for (var i = 0; i < 100; i++) {
      arr.push(Math.floor(levelReq));
      levelReq = levelReq * 1.35;
    }
    return arr[level-1]
  }
}
const { getLevelReq, getLevel, hexToRgb, roundRect } = Utility;
class RankCard {
  constructor (tag, icon, xp, color, background, rank) {
    this.tag = tag || "User#1234";
    this.avatar = icon || "https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png";
    this.xp = xp || 0;
    this.color = color || "#ffffff";
    this.background = background || "default";
    this.rank = rank || 1;
  }
  setTag (data) {
    this.tag = data;
  }
  setAvatar (data) {
    this.avatar = data;
  }
  setXp (data) {
    this.xp = data;
  }
  setColor (data) {
    this.color = data;
  }
  setBackground (data) {
    this.background = data;
  }
  setRank (data) {
    this.rank = data;
  }
  async render () {
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
    console.log("FIRST"+ first);
    var second = getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))) - getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))-1);
    if (second > 1000) {
      if (second > 10000) {
        if (second > 1000000) {
          console.log("millions")
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
    ctx.font = applyText(canvas, `${''}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`Level ${getLevel(this.xp)}`,275, canvas.height / 4 +25);
    ctx.textAlign = "right";
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
    console.log("FIRST"+ first);
    var second = getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))) - getLevelReq(getLevel(xp.getXp(user.id,message.guild.id))-1);
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
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    var avatar = await Canvas.loadImage(this.avatar);
    ctx.drawImage(avatar, 50, 50, 200, 200);
    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'thunderbot-xp-card.png');
    return attachment;
  }
}
class Xp {
  static getGuild(guild) {
    return db.get('xp.'+guild);
  }
  static addXp(amount, user, guild) {
    if (db.get('xp.'+guild+'.'+user) == null || db.get('xp.'+guild+'.'+user) == undefined) {
      db.set('xp.'+guild+'.'+user,0)
    }
    db.set('xp.'+guild+'.'+user,parseInt(db.get('xp.'+guild+'.'+user))+amount);
  }
  static getRank(user, guild) {
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
  }
  static removeXp(amount, user, guild) {
    if (parseInt(db.get('xp.'+guild+'.'+user))-amount < 0) {
      db.set('xp.'+guild+'.'+user,0);
    } else {
      db.set('xp.'+guild+'.'+user,parseInt(db.get('xp.'+guild+'.'+user))-amount);
    }
  }
  static setXp(amount,user,guild) {
    db.set('xp.'+guild+'.'+user,amount);
  }
  static getXp(user,guild) {
    if (db.get('xp.'+guild+'.'+user) == null || db.get('xp.'+guild+'.'+user) == undefined) {
      db.set('xp.'+guild+'.'+user,0)
    }
    return(db.get('xp.'+guild+'.'+user));
  }
}
class Member {
  constructor (guildid,userid) {
    this.guild = guildid;
    this.user = userid;
  }
  get id() {
    return this.user;
  }
  get guild () {
    return new Guild(this.guild);
  }
  get xp() {
    return Xp.getXp(this.user,this.guild);
  }
  set xp(xp) {
    return Xp.setXp(xp,this.user,this.guild);
  }
  getXp() {
    return Xp.getXp(this.user,this.guild);
  }
  setXp(xp) {
    return Xp.setXp(xp,this.user,this.guild);
  }
  addXp(xp) {
    return Xp.addXp(xp,this.user,this.guild);
  }
  removeXp(xp) {
    return Xp.removeXp(xp,this.user,this.guild);
  }
  getRank() {
    return Xp.getRank(this.user,this.guild);
  }
  getLevel() {
    return Utility.getLevel(Xp.getXp(this.user,this.guild));
  }
}
class Guild {
  constructor (id) {
    this.id = id;
  }
  getUser (id) {
    return new Member(this.id,id);
  }
  getAllUsers () {
    var data = Xp.getGuild(this.id);
    if (data) {
      var mappedHash = Object.keys( data ).sort(function( a, b ) {
        return data[ b ] - data[ a ];
      }).map(function( sortedKey ) {
        var a = {}
        a[sortedKey] = data[ sortedKey ];
        return a;
      });
      return mappedHash;
    } else {
      return null;
    }
  }
  async getLeaderboardDisplay (client) {
    var data = Xp.getGuild(this.id);
    if (data) {
      var mappedHash = Object.keys( data ).sort(function( a, b ) {
        return data[ b ] - data[ a ];
      }).map(function( sortedKey ) {
        var a = {}
        a[sortedKey] = data[ sortedKey ];
        return a;
      });
      var output = [];
      var guild = await client.guilds.fetch(this.id).catch(error => {
        return null;
      });
      for (var i = 0; i < mappedHash.length; i++) {
        output.push({
          avatar: guild.members.cache.get(Object.keys(mappedHash[i])[0]).user.displayAvatarURL,
          tag: guild.members.cache.get(Object.keys(mappedHash[i])[0]).user.tag,
          xp: Object.values(mappedHash[i])[0]
        })
      }
      return output;
    } else {
      return null;
    }
  }
}
module.exports = {
  RankCard: RankCard,
  Utility: Utility,
  Guild: Guild,
  Member: Member,
  Database: Xp
}