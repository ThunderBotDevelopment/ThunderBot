'use strict';

const options = require('./options.js');
var memes = [];
var colors = require('colors/safe'); // Used for stylizing the console output
console.log(colors.bold(colors.yellow("THUNDERBOT IS STARTING...")));
function progress(){process.stdout.write(colors.bold(colors.brightYellow("█")));}
var emojis = {
  simp: "<:simp:786986171762081802>",
  fuck: "<:fuck:786986205748133988>",
  yes: "<:yes:786986754032402523>",
  python: "<:PSG:575678912588283904>",
  zero: "<:u0:660367586927706132>",
  no: "<:no:786986760974237808>",
  coin: "<a:thundercoin:787534767972155393>",
  rickroll: "<a:thunderbot_rickroll:787406758473105408>",
  loading: "<a:thunderbot_loading:786855945422241792>"
}
var bot = {
	prefix: "!"
}
var admins = [
    "748577964311969923",
    "700436934702399509",
    "691701043851034688",
   // "448269422814298112"
];
const fetch = require('node-fetch');
const Premium = require('./premium.js');
var emebdColor = "#fcba03";
var Filter = require('bad-words'); progress();
var filter = new Filter();
filter.addWords('wap','sexual','abortion');
filter.removeWords('god','fart','poop','turd','damn');
const db = require('quick.db'); progress();
const { Client, MessageEmbed } = require('discord.js'); progress();
var GuildApi = require('./guildapi.js');
var guildSettings = new GuildApi.GuildApi(db);
var UserApi = require('./userapi.js');
var userSettings = new UserApi.UserApi(db);

var Canvas = require('canvas');
const { registerFont } = require('canvas');
registerFont('./fonts/poppins-semibold.ttf', { family: 'sans-serif' });
const Discord = require('discord.js'); progress();
const fs = require('fs'); progress();
let giveMeAJoke = require('give-me-a-joke'); progress();
const client = new Discord.Client();
const boardGames = require('./boardGames.js')
const tttGames = [] // Array of all active Tic Tac Toe games
let wiggleEnabled = true; // dont fucking change this plz
var aq3FH5opV3chafi6hqvKR9yjRfTeltX5AdDB163P = {
  exit: process.exit,
  restart: function(){setTimeout(function () {
    process.on("exit", function () {
      require("child_process").spawn(process.argv.shift(), process.argv, {
          cwd: process.cwd(),
          detached : true,
          stdio: "inherit"
      });
    });
    process.exit();
    }, 5000);
  }
};
var time = [];
const crypto = require('crypto'); progress();
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);
	return ctx.font;
};


const vm = require('vm');

var votes = require('./votereward.js')(db);
var onvote = function(user) {
  client.channels.cache.get('794703260136767518').send(new MessageEmbed()
  .setDescription("<@"+user+"> just voted.")
  .setColor(emebdColor)
  );
  var id = ""+user
  console.log("ON VOTE CALLED WITH ID "+id);
  client.guilds.fetch('783745418391322715').then(guild => {
    //if (guild.members.cache.has(id)) {
      console.log("HAS MEMBER")
      guild.members.fetch(id).then(member => {
        guild.roles.fetch('787823501649772564').then(role => {
          member.roles.add(role);
          console.log("ROLE ADDED")
        }).catch(err => {
          console.log("ERROR A");
        });
      }).catch(err => {
        console.log("ERROR B");
      });
  }).catch(err => {
    console.log(err)
  });
  votes.vote(id);
}
var prunerole = function(id) {
  console.log("PRUNING ROLE ID "+id)
  try {
  client.guilds.fetch('783745418391322715').then(guild => {
      guild.members.fetch(id).then(member => {
        guild.roles.fetch('787823501649772564').then(role => {
          if (member.roles.cache.has('787823501649772564')) {
            member.roles.remove(role);
          }
        }).catch(console.error);
      }).catch(console.error);
  }).catch(console.error);
  } catch (e) {
    console.error(e);
  }
}
process.exit = function(){
  return false;
}
var express = require('express'); progress();
var app = express();
app.use(express.static('website'));
const Topgg = require('@top-gg/sdk')
const webhook = new Topgg.Webhook('password')
const guildsettings = require('./guildsettings.js')(client, db, emebdColor, MessageEmbed);
const economy = require('./economy.js')(client,bot,db,emebdColor,MessageEmbed); progress();
const levels = require('./levels.js').main(client,bot,db,emebdColor,MessageEmbed); progress();
const { RankCard } = require('./xp.js');
const Xp = require('./xp.js');
app.post('/dblwebhook', webhook.middleware(), (req, res) => {
  console.log(req.vote);
  economy.voteReward(req.vote);
  onvote(req.vote.user);
  var today = new Date,
  date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
if (today.getMinutes() < 10) var time = today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
else time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var av = "{" + date + " " + time + "}, @" + req.vote.user + " > Just voted\n";
fs.appendFile("votelog.txt", av, e => {
    console.error(e)
});})
const auth = require('./auth')
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/website/index.html');
});
app.get('/send/*', (req, res) => {
  res.send("Sent!");
   client.channels.cache.get("786663896018714674").send("```"+decodeURI(req.path.substring(6))+"```");
});
app.post('/kofiwebhook', (req, res) => {
  console.log(req.body);
  res.send("Confirmed!")
})
const url_new = require('url');
var connections = {};
connections.functions = {
  generateID: function(){
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    return crypto.createHash('sha1').update(current_date + random).digest('hex');
  }
}
connections.active = {};
app.get('/authorized', (req, res) => {
		let responseCode = 404;
	 let content = '404 Error';
	 const urlObj = url_new.parse(req.url, true);
		content = fs.readFileSync('./website/authorized.html');
	  if (urlObj.query.code) {
		    const accessCode = urlObj.query.code;
		    const data = {
    			  client_id: '783743297453686795',
    			  client_secret: 'G3eTz_qfuW7fvicuBPnON7kRbJCekGn1',
    			  grant_type: 'authorization_code',
    			  redirect_uri: 'https://thundebot.yodacode.repl.co/authorized',
    			  code: accessCode,
    			  scope: 'identify guilds email',
		    };
    var q;
		fetch('https://discord.com/api/oauth2/token', {
			method: 'POST',
			body: new URLSearchParams(data),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then(discordRes => discordRes.json())
			.then(info => {
				console.log(info);
				return info;
			})
			.then(info => fetch('https://discord.com/api/users/@me', {
				headers: {
					authorization: `${info.token_type} ${info.access_token}`,
				},
			}))
			.then(userRes => userRes.json())
			.then(data => {
        console.log(data, "DATA");
        q = data;
          	var connectionID = connections.functions.generateID();
  connections.active[connectionID] = data;
console.log(content.toString());
      content = content.toString().replace('%%connectionID%%','"'+connectionID+'"')
		responseCode = 200;
	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});
	res.write(content);
	res.end();
      });
	} else {
          content = content.toString().replace('%%connectionID%%','false')
		responseCode = 200;
	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});
	res.write(content);
	res.end();
  }
})
app.get('/auditlogs', (req, res) => {
  res.sendFile(__dirname+'/log.txt')
})
app.get('/votelog', (req, res) => {
  res.sendFile(__dirname + '/votelog.txt');
});
app.get('/vote/*', (req, res) => {
  res.send("Voted as " + req.path.substring(6));
    onvote(req.path.substring(6)+'');
  var voteuser = req.path.substring(6);
    economy.voteReward({ user: voteuser });
  var today = new Date,
    date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
if (today.getMinutes() < 10) var time = today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds();
else time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var av = "{" + date + " " + time + "}, @" + voteuser + " > Just voted\n";
fs.appendFile("votelog.txt", av, e => {
    console.error(e)
})
});
app.get('/pfix/*', (req, res) => {
    var prefix = db.get('prefix')[req.path.substring(6)] || "!";
  res.send(prefix);
});
app.get('/status', (req, res) => {
  res.sendFile(__dirname + '/website/status.html');
});
var http = require('http').createServer(app); progress();
var io = require('socket.io')(http, {
  cors: {
    origin: "https://thunderbot.cf",
    methods: ["GET", "POST"]
  }
}); progress();
io.emit('reload');
io.on('connection', (socket) => {
  console.log('a user connected');
  var id = socket.id;
  socket.on('server', (message) => {
    io.to(id).emit("private", "you said "+message)
  })
  socket.on('oauth', (object) => {
    		    const accessCode = object.code;
		    const data = {
    			  client_id: '783743297453686795',
    			  client_secret: 'G3eTz_qfuW7fvicuBPnON7kRbJCekGn1',
    			  grant_type: 'authorization_code',
    			  redirect_uri: 'https://thunderbot.cf/authorized',
    			  code: accessCode,
    			  scope: 'identify email guilds'
        };
        var q;
		fetch('https://discord.com/api/oauth2/token', {
			method: 'POST',
			body: new URLSearchParams(data),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then(discordRes => discordRes.json())
			.then(info => {
				console.log(info);
				return info;
			})
			.then(info => fetch('https://discord.com/api/users/@me', {
				headers: {
					authorization: `${info.token_type} ${info.access_token}`,
				},
			}))
			.then(userRes => userRes.json())
			.then(data => {
        q = data;
        if (data && data.email) {
        db.set('email.'+data.id,data.email);
        }
        console.log(q);
          	var connectionID = connections.functions.generateID();
  connections.active[connectionID] = data;
io.to(id).emit('oauth', connectionID)
      });
  })
  socket.on('userdata', (message) => {
    io.to(id).emit("userdata", connections.active[message])
  });
  socket.on('avatar', (message) => {
    client.users.fetch(connections.active[message].id).then(user => {
      io.to(id).emit("avatar", user.displayAvatarURL())
    });
  });
  socket.on('customevent', () => {
    
      io.to(id).emit("customevent", "hello i am responding");
  });
  socket.on('getleaderboard', async (guild) => {
    if (client.guilds.cache.get(guild+'')) {
      var xp = db.get('xp.'+guild);
      var out = {};
      for (var user in xp) {
        var cache = db.get('cache.'+user);
        if (cache !== null && cache !== undefined && cache.avatar) {
          console.log("custom");
          out[user] = {
            xp: xp[user],
            avatar: cache.avatar,
            tag: cache.tag
          }
        } else {
          console.log("og");
          out[user] = {
            xp: xp[user],
            avatar: "https://thunderbot.cf/images/default-avatar.png",
            tag: user+""
          }
        }
      }
      io.to(id).emit("getleaderboard", out);
    } else {
      io.to(id).emit("getleaderboard", "No such guild");
    }
    
  });
  socket.on('updatesettings', (object) => {
    if (Object.keys(connections.active).includes(object.auth)) {
      client.guilds.fetch(object.id).then(guild => {
        guild.members.fetch(connections.active[object.auth].id).then(member => {
          console.log("member is in guild at index.js:311")
          var ok = Object.keys(object.settings);
          var ov = Object.values(object.settings);
          for (var i = 0; i< ok.length; i++) {
            console.log("setting "+ok[i]+" is being set to "+ok[i])
            if (ok[i] == "prefix") {
              console.log("turns out its a prefix")
              db.set('prefix.'+object.id,ov[i]);
              client.channels.cache.get('797708904623767574').send("<pfix "+object.id+" "+ov[i])
            } else {
              guildSettings.getGuild(object.id).set(ok[i],ov[i]);
            }
            console.log("still active");
            io.to(id).emit('updatesetings',{
              status: "completed"
            })
          }
        }).catch(error => {
          io.to(id).emit('updatesettings',{
            status: "failed",
            error: "Member is not in guild"
          })
        })
      }).catch(error => {
        io.to(id).emit('updatesettings',{
          status: "failed",
          error: "Invalid guild or bot is not in guild"
        })
      })
    } else {
      io.to(id).emit('updatesettings', {
        status: "failed",
        error: "Invalid authorization"
      })
    }
  })
  socket.on('updateusersettings', (object) => {
    if (Object.keys(connections.active).includes(object.auth)) {
          var ok = Object.keys(object.settings);
          var ov = Object.values(object.settings);
          for (var i = 0; i< ok.length; i++) {
            console.log("setting "+ok[i]+" is being set to "+ov[i])
              userSettings.getUser(object.id).set(ok[i],ov[i]);
        
            console.log("still active");
            io.to(id).emit('updateusersetings',{
              status: "completed"
            })
          }
    } else {
      io.to(id).emit('updateusersettings', {
        status: "failed",
        error: "Invalid authorization"
      })
    }
  })
  socket.on('guilds', async (message) => {
    console.log("FETCHING GUILDS")
    if (connections.active[message]) {
      var user = connections.active[message].id;
    } else {
      var user = 0;
    }
    console.log("HAS ID "+user)
    var guildObject = {};
    let guildlist = client.guilds.cache;
    guildlist.each(async guild => {
      var a = new Promise(async (resolve, reject) => {
        try {
        var member = await guild.members.fetch(user+'');
        if (member.hasPermission("MANAGE_GUILD") || member.hasPermission("ADMINISTRATOR")) {
        guildObject[guild.id] = {
          avatar: guild.iconURL(),
          name: guild.name
        }
        resolve(guild.id);
        }
        } catch (err) {
          //
        }
      });
      await a.then(() => {}).catch(() => {});
      /*
      guild.members.fetch(user+'').then(member => {
        if (member.hasPermission("MANAGE_GUILD") || member.hasPermission("ADMINISTRATOR")) {
        guildObject[guild.id] = {
          avatar: guild.iconURL(),
          name: guild.name
        }
        }
        
      }).catch(error => {
        console.error(error);
        console.log("not in guild")
      })*/
    });
  //  }).then(() => {
    setTimeout(() => {
          console.log("EMITTING SOCKET!");
    console.log(guildObject)
    io.to(id).emit("guilds", guildObject)

    }, 2500);
  //  });

  });
  socket.on('getsettings', (guild) => {
    var ff = guildSettings.getGuild(guild).getAll();
    if (client.guilds.cache.get(guild)) {
      if (client.guilds.cache.get(guild).owner) {
      ff.premium = userSettings.getUser(client.guilds.cache.get(guild).owner.id).get('premium');
      }
    }
    io.to(id).emit("getsettings",ff);
  })
  socket.on('getusersettings', (user) => {
    var q = userSettings.getUser(user).getAll();
    console.log(q)
    q.premium = new Premium.User(user).premium;
    io.to(id).emit("getusersettings",q);
  })
  socket.on('server', (message) => {
    io.to(id).emit("private", "you said "+message)
  })
  socket.on('getprefix', (message) => {
    console.log('getting prefix for guild '+message)
    console.log(db.get('prefix')[message+''])
    io.to(id).emit("getprefix",db.get('prefix')[message+''])
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
try {
http.listen(process.env.PORT, () => { // Listen on port 3201 for the web dashboard
  console.log('Web dashboard loaded on *:'+process.env.PORT);
});
} catch (err) { console.log(); }
const https = require('https'); progress();
var search = require('youtube-search'); progress();
client.on('error',console.error);
const ReactionRole = require("reaction-role"); progress()
const system = new ReactionRole(process.env.OkEten);
const isImageUrl = require('is-image-url'); progress();

if (db.get("prefix") == null) {
    db.set("prefix",{});
}; progress();
process.stdout.write(colors.bold(colors.brightYellow("████████")))
console.log(colors.green(" ✅  READY"));
let header = "blank";
	var games = {
		active: [],
		players: []
	};
	function getScores() {
		var data;
		try {
		  data = fs.readFileSync('./highscores.json', 'utf8')
		} catch (err) {
		  console.error(err);
			data = err;
		}
	var out;
	try {
		out = JSON.parse(data)
	} catch (err) {
		out = err;
	}
	return(out);
	}



	function getProfane() {
		var data;
		try {
		  data = fs.readFileSync('./profane.json', 'utf8')
		} catch (err) {
		  console.error(err);
			data = err;
		}
	var out;
	try {
		out = JSON.parse(data)
	} catch (err) {
		out = err;
		console.log(err);
	}
	return(out);
	}
	function setScores(scores,callback) {
		fs.writeFile('./highscores.json', JSON.stringify(scores), function (err) {
	  if (err) {
		console.log(err);
	  callback(err);
	}
	});
	}
	function setProfane(scores,callback) {
		fs.writeFile('./profane.json', JSON.stringify(scores), function (err) {
	  if (err) {
		console.log(err);
	  callback(err);
	}
	});
	}
function getTextChannels(c) {
	var tr;
	for (var i = 0; i < c.channels.cache.length; i++) {
		if (c.channels.cache[i].type == "text") {
			tr.push(c.channels.cache[i]);
		}
	}
	return(c.channels.cache);
}
var bugnum = 1;
let  umsg;
let msglist = [
	"Start of message history for this runtime"
];
var testobject = {
	info: "Start of message object history for this runtime"
}
let msgobjectlist = [
	testobject
];
let rvar = "var";
let annCh = "null";
let annCl = 0xff0000;
 var cc;
client.on('ready', () => {
  client.setStatus = function(status) {
  var emoji = "";
  switch (status) {
    case 'online':
    case '1':
    case 1:
    case 'green':
    case 'on':
      emoji = "🟢";
      break;
    case 'offline':
    case '0':
    case 0:
    case 'red':
    case 'off':
      emoji = "🔴";
      break;
    case 'warning':
    case '2':
    case 'restarting':
    case 'error':
    case 2:
    case 'yellow':
    case 'idle':
      emoji = "🟡";
      break;
    default:
      return false;
      break;
  }
  if (emoji == "") {
    return;
  }
      client.channels.cache.get('796546467040985128').setName('Status: '+emoji)
}
const topapi = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4Mzc0MzI5NzQ1MzY4Njc5NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3ODExODc3fQ.nigQ-7bAlofVV_7bf24js6V4IpJJq7AvqYq3f2IOz2s')
   topapi.postStats({
    serverCount: client.guilds.cache.size
  })
setInterval(() => {
  topapi.postStats({
    serverCount: client.guilds.cache.size
  })
}, 1800000) // post every 30 minutes
	console.log('Client is ready');
	client.user.setPresence({
		activity: {
				name: `on ${client.guilds.cache.size} servers | tb help`
		},
		status: 'online'
  })
});
var memes = [];
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var errorTypes = {
  "error": "1",
  "internalerror": "2",
  "rangerror": "3",
  "referenceerror": "4",
  "syntaxerror": "5",
  "typeerror": "6",
  "urierror:": "7",
  "warning": "8"
};

var errorLogs = [];


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
  command.aliases.forEach(a => {
   client.commands.set(a, command)
  });
}

client.on('message', async message => {
  var blocked = [
    "pornhub",
    "drive.google.com",
    "location",
    "country code",
  ];
  if (message.guild.id == "783745418391322715") {
    for (var i = 0; i < blocked.length; i++) {
      if (message.content.toLowerCase().includes(blocked[i].toLowerCase())) {
        message.delete();
        return;
      }
    }
  }
  if (message.author.id == client.user.id) {
    return;
  }
  if(message.content.substring(0,8).toLowerCase() == "!premium") {
  } else {
    if(message.channel.type == 'dm') {
      return;
    }
  }
  if (message.channel.type == 'dm') {
    var prefix = "!";
    var p = prefix;
  } else {
  if (db.get("prefix")[message.guild.id] == null) {
    db.set('prefix.' + message.guild.id,'!');
  }

    if (message.channel.id == "783747271693959199") {
      return;
    }
  if (message.content == prefix) {
    return;
  }

  var prefix = db.get('prefix')[message.guild.id];
  var p = prefix;
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = splitArgs(message.content.substring(p.length,message.content.length));
  const command = args.shift();

  if (!client.commands.has(command)) return;

  try {
  	client.commands.get(command).execute(message, args).catch(error => {
          //console.log('there was an error 1')
  	console.error(error);
    if (errorLogs.includes(error)) {
          if (errorTypes[error.name]) {
      const errorCode = "0x"+errorTypes[error.name]+String(errorLogs.indexOf(error)+1).padStart(4, '0');
        	message.channel.send(new MessageEmbed().setTitle("Error").setColor(emebdColor).setDescription('There was an error trying execute that command. Error code: `'+errorCode+'`'));

    } else {
      const errorCode = "0x9"+String(errorLogs.indexOf(error)+1).padStart(4, '0');
        	message.channel.send(new MessageEmbed().setTitle("Error").setColor(emebdColor).setDescription('There was an error trying execute that command. Error code: `'+errorCode+'`'));

    }

    } else {
    errorLogs.push(error);
    if (errorTypes[error.name]) {
      const errorCode = "0x"+errorTypes[error.name]+String(errorLogs.length).padStart(4, '0');
        	message.channel.send(new MessageEmbed().setTitle("Error").setColor(emebdColor).setDescription('There was an error trying execute that command. Error code: `'+errorCode+'`'));

    } else {
      const errorCode = "0x9"+String(errorLogs.length).padStart(4, '0');
        	message.channel.send(new MessageEmbed().setTitle("Error").setColor(emebdColor).setDescription('There was an error trying execute that command. Error code: `'+errorCode+'`'));

    }
    }
    });
  } catch (error) {
    console.log('there was an error')
  	console.error(error);
    errorLogs.push(error);
    if (errorTypes[error.name]) {
      const errorCode = "0x"+errorTypes[error.name]+String(errorLogs.length).padStart(4, '0');
    } else {
      const errorCode = "0x9"+String(errorLogs.length).padStart(4, '0');
    }
  	message.channel.send(new MessageEmbed().setTitle("Error").setColor(emebdColor).setDescription('There was an error trying execute that command. Error code: `'+errorCode+'`'));
  }

	// other commands...
});

client.on("message", async message => {
  if (message.author.id == client.user.id) {
    return;
  }
  
  if(message.content.substring(0,8).toLowerCase() == "!premium") {
    if(message.channel.type == 'dm') {
      return;
    }
  } else {
    if(message.channel.type == 'dm') {
      return message.channel.send("Bot does not work in DMs.");
    }
  }
  var scrape = votes.scrapetwelve();
  for (var i = 0; i < scrape.length; i++) {
    prunerole(scrape[i]);
  }
  /* CUSTOM CODE FOR SPECIFIC SERVER */
  if (message.channel.guild == undefined) {
    //
  } else {
    if (message.channel.guild.id=="617765059791290404") {
      if(message.member.roles.cache.find(r => r.name === "Muted")){
        message.delete();
      }
      if (message.channel.id=="695299493448646676") {
      // Swears allowed is exempt
      } else {
      	if (filter.isProfane(message.content) && !message.author.bot) {
          message.channel.send(new MessageEmbed()
            .setColor(emebdColor)
            .setTitle("HEY! NO SWEARING!")
            .setDescription("Hey, <@"+message.author.id+">! No swearing in this server, unless you are in the <#695299493448646676> channel! (Go to <#617770461828349982> if you need to get the role.)")
          );
          client.channels.cache.get("617957495557849089").send(new MessageEmbed()
            .setColor(emebdColor)
            .setTitle("⚠ SWEAR ALERT! ⚠")
            .setDescription("<@"+message.author.id+"> sent '" + message.content + "' in <#" + message.channel.id+">")
          );
          message.delete();
	      }
      }
    }
  }
  /* END CUSTOM CODE */
  if (db.get("prefix")[message.guild.id] == null) {
    db.set('prefix.' + message.guild.id,'!');
  }
  var prefix = db.get('prefix')[message.guild.id];
  var p = prefix;
  if (filter.isProfane(message.content) && guildSettings.getGuild(message.guild.id).get('filter')) {
		message.channel.send(new MessageEmbed()
	    .setColor(emebdColor)
      .setTitle("HEY! NO SWEARING!")
      .setDescription("An admin of this server turned on the Smart Profanity Filter. To turn it off, open the settings menu or go to the web dashboard.")
    );
  message.delete();
	}
    if (message.channel.id == "783747271693959199") {
      return;
    }
    switch (splitArgs(message.content.toLowerCase())[0]) {
      // case p+'server':
      // case p+'discord':
      // case p+'support':
      //   message.channel.send("**Join our Discord server here: https://discord.gg/pmxAxN2nSk**");
      //   break;
      // case p+'invite':
      //   message.channel.send(new MessageEmbed()
      //     .setTitle("Invite")
      //     .setDescription("**To add ThunderBot to your own server, click on: https://invite.thunderbot.cf**")
      //     .setColor(0xfcba03)
      //     .setFooter("ThunderBot")
      //   );
      //   break;
      // case p+'meme': // meme
      //   let data = await random.getMeme()
      //   data.embed.color = emebdColor;
      //   message.channel.send(data)
      //   break;
      case p+'advice':
        let data_advice = await random.getAdvice()
          console.log(data_advice);
          message.channel.send(new MessageEmbed()
            .setColor(emebdColor)
            .setTitle(data_advice.embed.description)
          );
        break;
      case 'timekeep': 
        time.push(Date.now());
        break;
      case p+'norris':
        var cdd = message.channel;
        giveMeAJoke.getRandomCNJoke (function(joke) {
          cdd.send({ embed: {
            title: joke,
            color: emebdColor
          }
        });
        });
        break;
      case p+'error':
        if (!admins.includes(message.author.id)) { return message.channel.send('Unauthorized.') }
        if (splitArgs(message.content).length > 1) {
          if (errorLogs[parseInt(splitArgs(message.content)[1].substring(3))-1]) {
            return message.channel.send(
              new MessageEmbed()
              .setColor("#e82517")
              .setTitle("Error " + splitArgs(message.content)[1])
              .setDescription("```" + errorLogs[parseInt(splitArgs(message.content)[1].substring(3))-1].toString() + "```")
            )
          } else {
            return message.channel.send('Invalid error code.')
          }
        } else {
          return message.channel.send('You must specify an error code.');
        }
        break;
      case p+'react':
        var reaction = [];
        var id = [
          splitArgs(message.content)[1].substring(0,18),
          splitArgs(message.content)[1].substring(19)
        ];
        try {
          client.channels.fetch(id[0])
          .then(channel => {
            channel.messages.fetch(id[1]).then(yas => {
              for (var b = 2; b < splitArgs(message.content).length; b++) {
                yas.react(splitArgs(message.content)[b]);
              }
              message.delete();
            }).catch(console.error);
          });
        } catch(err) {
          message.channel.send(new Discord.MessageEmbed().setColor(emebdColor)).then(sentMessage => {
            memes.push(sentMessage.id);
            sentMessage.edit("");
            sentMessage.react(":thumbsup:");
            sentMessage.edit(new MessageEmbed()
              .setColor(emebdColor)
              .setTitle("Error")
              .setFooter("ThunderBot")
              .setDescription(err)
            );
          })
        }
        break;
      case p+'putt':
        message.channel.send(":cloud: :person_doing_cartwheel: :cloud: :cloud: \n\n:volcano:                           :person_golfing:");
        message.channel.send(":person_doing_cartwheel: = " + splitArgs(message.content)[1]);
        message.channel.send(":person_golfing: = <@" + message.author.id + ">");
        break;
      case p+'delmsg':
        try {
          client.channels.fetch(splitArgs(message.content)[1].substring(0,18)).then(channel => {
            channel.messages.fetch(splitArgs(message.content)[1].substring(19)).then(yas => {
              yas.delete();
              message.delete();
            }).catch(console.error);
          });
        } catch(err) {
          message.channel.send(new Discord.MessageEmbed().setColor(emebdColor)).then(sentMessage => {
            memes.push(sentMessage.id);
            sentMessage.edit("");
            sentMessage.react("👍");
            sentMessage.edit(new MessageEmbed()
              .setColor(emebdColor)
              .setTitle("Error")
              .setFooter("ThunderBot")
              .setDescription(err)
            );
          })
        }
        break;
      case p+'about':
        message.channel.send(new MessageEmbed()
	        .setColor(emebdColor)
          .setTitle("ThunderBot")
          .setDescription(`ThunderBot is a free Discord bot that features moderation, memes, games, admin tools, anime, jokes, and more.

          ThunderBot was created and is actively maintained by <@748577964311969923>. To create an issue or get support, join the official ThunderBot Discord at https://discord.gg/n4MgX3VSVt. To add ThunderBot to your own server, go to https://discord.com/api/oauth2/authorize?client_id=783743297453686795&permissions=8&scope=bot.

          If you want to be super duper, vote for the bot by typing ${"`!vote`"}.`)
        );
        break;
      case p+'rps':
        if (games.players.includes(message.author.username)) {
          for (var i = 0; i < games.active.length; i++) {
            if (games.active[i].username == message.author.username) {
              games.active[i].message.delete();
              games.active.splice(i,1);
            }
          }
          for (var i = 0; i < games.players.length; i++) {
            if (games.players[i] == message.author.username) {
              games.players.splice(i,1);
            }
          }
        }
        message.channel.send(new Discord.MessageEmbed().setColor(emebdColor)).then(sentMessage => {
          games.players.push(message.author.username);
          games.active.push({
            username: message.author.username,
            id: message.author.id,
            timestamp: Date.now(),
            message: sentMessage
          });
          sentMessage.edit("");
          sentMessage.edit(
            new Discord.MessageEmbed()
            .setColor(emebdColor)
            .setTitle(`${message.author.username}'s Game`)
            .addFields(
              {name: "Streak", value: getScores()[message.author.id.toString()] || 0, inline: true}
            )
            .setFooter("ThunderBot")
            .setDescription("Rock, paper, scissors... **You decide!**")
          );
          sentMessage.react("🪨")
          .then(() => sentMessage.react("📃"))
          .then(() => sentMessage.react("✂"))
          .catch((e) => console.error("Could not add reactions", e))
        });
        break;
      case p+'auto-meme':
      if (guildSettings.getGuild(message.guild.id).get('automeme')) {
        
        let datad = await options.random.getMeme()
          datad.embed.color = emebdColor;
          console.log("attempting auto mrme")
          message.channel.send(datad).then(sentMessage => {
          sentMessage.react("<:meme_man:783324827795849267>")
          .catch((e) => console.error("Could not add reactions", e));

          memes.push(sentMessage.id);
        });
      } else {
        message.channel.send(new MessageEmbed()
        .setColor(emebdColor)
        .setTitle("Feature Disabled")
        .setDescription("This feature was disabled by a server administrator. You can turn it back on in the settings menu or ThunderBot Dashboard.")
        );
      }
        break;
      case p+'ping':
        message.channel.send(`**:hourglass: ${Date.now() - message.createdTimestamp}ms**`);
        break;
      case p+'joke':
        var cdd = message.channel;
        giveMeAJoke.getRandomDadJoke (function(joke) {
          cdd.send({ embed: {
              title: joke,
              color: emebdColor
            }
          });
        });
        break;
      case p+'ttt-board':
        var args = [];
        for (var i = 1; i < splitArgs(message.content).length; i++) {
          args.push(splitArgs(message.content)[i]);
        }
        message.channel.send(new MessageEmbed().setTitle("Tic-Tac-Toe").setDescription(boardGames.TicTacToeGame.formatBoard(args)).setColor(emebdColor).setFooter("ThunderBot"));
        break;
      case p+'knock-knock':
        var cdd = message.channel;
        giveMeAJoke.getRandomJokeOfTheDay (function(joke) {
          cdd.send({ embed: {
            title: joke,
            color: emebdColor
          }
          });
        });
        break;
      case p+'ttt-move':
        for (let i=0; i<tttGames.length; i++) {
          if (tttGames[i].player1.id == message.author.id || tttGames[i].player2.id == message.author.id) {
            tttGames[i].placePiece(message.author, parseInt(splitArgs(message.content)[1]));
            break;
          }
        }
        break;
      case p+'ttt-start':
        if (boardGames.TicTacToeGame.isInGame(message.author, tttGames)) {
          message.channel.send("You can't send an invite if you're already in a game");
          break;
        }

        let hasInv = false;
        boardGames.TicTacToeGame.pendingInvites.forEach(inv => {
          if (inv.id == message.author.id) {
            if (hasInv) { return; }
            hasInv = true;
            message.channel.send("You already have an outgoing invite");
            return;
          }
        });
        if (!hasInv) {
          boardGames.TicTacToeGame.createInvite(message.author, tttGames, message.channel, emebdColor);
          message.delete();
        }
        break;
      case p+'ttt-join':
        if (boardGames.TicTacToeGame.isInGame(message.author, tttGames)) {
          message.channel.send("You can't join a game if you're already in one!");
          break;
        }

        let inviteSender = message.mentions.users.first();
        let inviteExists = false;
        if (!inviteSender) {
          message.channel.send("You must say who's game you want to join.");
          break;
        }
        if (message.author.id == inviteSender.id) {
          message.channel.send("You cannot join your own game!");
          break;
        }
        let sentInv = false;
        boardGames.TicTacToeGame.pendingInvites.forEach(inv => {
          if (inv.id == message.author.id) {
            sentInv = true;
            message.channel.send("You can't join a game when you already have an outgoing invite");
          }
          if (inv.id == inviteSender.id) {
            inviteExists = true;
          }
        });
        if (sentInv) { break; }
        if (!inviteExists) {
          message.channel.send("That user does not have an outgoing invite");
          break;
        }
        if (!sentInv) {
          message.channel.send(`Joined <@${inviteSender.id}>'s game`);
          tttGames.push(new boardGames.TicTacToeGame(inviteSender, message.author, message.channel, emebdColor, p));
          for (let i=0; i<boardGames.TicTacToeGame.pendingInvites.length; i++) {
            if (boardGames.TicTacToeGame.pendingInvites[i].id == inviteSender.id) {
              boardGames.TicTacToeGame.pendingInvites.splice(i, 1);
              break;
            }
          }
        }
        break;
      case p+"ttt-leave":
        if (!boardGames.TicTacToeGame.isInGame(message.author, tttGames)) {
          message.channel.send("You are not currently in a game");
          return;
        }
        for (let i=0; i<tttGames.length; i++) {
          if (tttGames[i].player1.id == message.author.id || tttGames[i].player2.id == message.author.id) {
            boardGames.TicTacToeGame.disbandGame(i, tttGames, "Game disbanded");
          }
        }
        break;
      case p+"ttt-cancel":
        let sentAnInv = false;
        let invIndex = 0;
        for (let i=0; i<boardGames.TicTacToeGame.pendingInvites.length; i++) {
          if (boardGames.TicTacToeGame.pendingInvites[i].id == message.author.id) {
            sentAnInv = true;
            invIndex = i;
            break;
          }
        }
        if (sentAnInv) {
          boardGames.TicTacToeGame.pendingInvites[invIndex].message.edit(
            new Discord.MessageEmbed()
            .setColor(emebdColor)
            .setTitle("Invite Cancelled")
          )
          boardGames.TicTacToeGame.pendingInvites.splice(invIndex, 1);
        } else {
          message.channel.send("Could not cancel your invite; you don't have an outgoing invite");
        }
        break;
      case p+'serversettings':
        var args = splitArgs(message.content);
        if (args[1] === "set") {
          return message.channel.send(new MessageEmbed()
            .setColor(emebdColor)
            .setTitle("Error")
            .setDescription("ThunderBot had trouble completing that command")
            .setFooter("ThunderBot")
          );
        } else {
          if (args[1] === "find" || args[1] === "list") {
            if (args[2]) {
              var setting = args[2];
              switch (setting) {
                case 'memes':
                  message.channel.send(new MessageEmbed()
                  .setTitle("`memes` Setting")
                  .setDescrition("Weather or not to enable meems in the server, on by default")
                  .setColor(emebdColor)
                  .setFooter("ThunderBot")
                  );
                  break;
                default:
                  message.channel.send(new MessageEmbed()
                  .setTitle("Error")
                  .setColor(emebdColor)
                  .setDescription("That setting was not found.")
                  .setFooter("ThunderBot")
                  );
                  break;
              }
            } else {
              return message.channel.send(new MessageEmbed()
              .setTitle("Server Settings")
              .setDescription("`memes` - Weather or not to enable memes in the server")
              .setColor(emebdColor)
              .setFooter("ThunderBot")
              );
            }
          } else {
            return message.channel.send(new MessageEmbed()
            .setTitle("Error")
            .setColor(emebdColor)
            .setDescription("That subcommand was not found. Here are the available subcommands:\n`"+p+"serversettings set <setting> <value>` - Set a setting for the current server\n`"+p+"serversettings find` - List all settings, or get information about a specific setting")
            .setFooter("ThunderBot")
            );
          }
        }
        break;
      case p+'ttt-stats':
        message.channel.send(
          new Discord.MessageEmbed()
          .setTitle("Tic Tac Toe Stats for " + message.author.username)
          .setColor(emebdColor)
          .setDescription("These stats have been recorded since <date>.")
          .addField("Games Played", "")
          .addField("Wins", "")
          .addField("Losses", "")
          .addField("Draws", "")
        );
        break;
      case p+"wiggle":
      if (!wiggleEnabled) {
        message.channel.send("The wiggle is currently disabled.");
        return;
      }
      if (message.mentions.members.size || message.mentions.roles.size || message.content.includes("@here") || message.content.includes("@everyone")) {
        return message.channel.send("The wiggle isn't a way to bypass pings. Silly, you!");
      }
        var wiggleLength = splitArgs(message.content)[1];
        var wiggleWord = splitArgs(message.content)[2];
        if (isNaN(wiggleLength) || !wiggleWord) {
          message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Incorrect Wiggle Usage")
            .setColor(emebdColor)
            .addFields(
              {"name": "Usage:", "value": "`" + prefix + "wiggle <number of lines> <word>`"},
              {"name": "Example:", "value": "`" + prefix + "wiggle 20 yeet`"}
            )
          );
          return;
        }
        if (wiggleLength >= 2000) {
          message.channel.send("That is way too long. You could have destroyed Thunderbot!");
          return;
        }
        var wiggleMsg = `Do the **${wiggleWord}** wiggle!`;
        for (let i=0; i<wiggleLength; i++) {
          wiggleMsg += `\n${" ".repeat((Math.sin((i+22)/5)+1.5)*10)}${wiggleWord}`;
        }
        if (wiggleMsg.length < 2000) {
          message.channel.send(wiggleMsg, {
            disableMentions: true
          });

        }
        else {
          message.channel.send(`Your **${wiggleMsg.length}** character wiggle is too large. It surpasses Discord's 2000 character limit.`);
        }
        break;
      case p+'playlist-3.0':
        var args = splitArgs(message.content);
        var a = args.shift();
        for (var i = 0; i < a.length; i++) {
          message.channel.send("!play "+a[i]).then(sentMessage => {
            setTimeout(() => {
              sentMessage.delete()
            },700)
          });
        }
        message.channel.send("Playlist created.")
        break;
              case p+'bernie':
              if (message.attachments.size) {
              var att = message.attachments.first();
      	var canvas = Canvas.createCanvas(att.width, att.height);
      	var ctx = canvas.getContext('2d');
        var background = await Canvas.loadImage(att.url);
      	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	var avatar = await Canvas.loadImage('./bernie.png');
      	ctx.drawImage(avatar, canvas.width/2.4, canvas.height/2.64, 471*canvas.width/800, 530*canvas.height/800);
      	var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bernie.png');
      	message.channel.send(attachment);
        } else {
        message.channel.send(new MessageEmbed().setTitle("Please attach an image.").setDescription('You must attach an image to add Mittens Bernie Sanders to.').setColor(emebdColor));
        }
        break;
      case p+"spank":
        var user = message.mentions.users.first() || message.author;
      	var canvas = Canvas.createCanvas(399, 400);
      	var ctx = canvas.getContext('2d');
        var background = await Canvas.loadImage('./Spank.jpg');
      	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
      	ctx.strokeRect(0, 0, canvas.width, canvas.height);
      	ctx.font = '28px sans-serif';
      	ctx.fillStyle = '#ffffff';
      	ctx.font = applyText(canvas, `${message.author.displayName}!`);
      	ctx.fillStyle = '#ffffff';
      	ctx.beginPath();
      	ctx.arc(305, 245, 35, 0, Math.PI * 2, true);
      	ctx.closePath();
        ctx.clip();
      	var avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
      	ctx.drawImage(avatar, 270, 210, 70, 70);
      	var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'facepalm.png');
      	message.channel.send(attachment);
        break;

        
      case 'r/facepalm':
      case p+'facepalm':
        var user = message.mentions.users.first() || message.author;
      	var canvas = Canvas.createCanvas(500, 324);
      	var ctx = canvas.getContext('2d');
        var background = await Canvas.loadImage('https://imgflip.com/s/meme/Captain-Picard-Facepalm.jpg');
      	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
      	ctx.strokeRect(0, 0, canvas.width, canvas.height);
      	ctx.font = '28px sans-serif';
      	ctx.fillStyle = '#ffffff';
      	ctx.font = applyText(canvas, `${message.author.displayName}!`);
      	ctx.fillStyle = '#ffffff';
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
      case p+"spank":
        var user = message.mentions.users.first() || message.author;
      	var canvas = Canvas.createCanvas(399, 400);
      	var ctx = canvas.getContext('2d');
        var background = await Canvas.loadImage('./Spank.jpg');
      	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      	ctx.strokeStyle = '#74037b';
      	ctx.strokeRect(0, 0, canvas.width, canvas.height);
      	ctx.font = '28px sans-serif';
      	ctx.fillStyle = '#ffffff';
      	ctx.font = applyText(canvas, `${message.author.displayName}!`);
      	ctx.fillStyle = '#ffffff';
      	ctx.beginPath();
      	ctx.arc(305, 245, 35, 0, Math.PI * 2, true);
      	ctx.closePath();
        ctx.clip();
      	var avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
      	ctx.drawImage(avatar, 270, 210, 70, 70);
      	var attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'facepalm.png');
      	message.channel.send(attachment);
        break;
      default:
    }
  if (splitArgs(message.content)[0] == prefix + "close")  {
         if (message.channel.guild.id == "783745418391322715") {
         client.channels.fetch(message.channel.id).then(channel => {
           channel.edit({ parent: "784659784963981312" });
           channel.setParent('784659784963981312');
         }).catch(err => {
         console.error(err);
         });
             message.channel.send(new MessageEmbed().setColor(emebdColor)).then(msg => {
                 msg.edit(
                     new MessageEmbed()
                     .setColor(emebdColor)
                     .setTitle("Issue #"+message.channel.name+" was just closed.")
                     .addFields(
                         {name: "Bug report closed by", value: "<@"+message.author.id+">" || 0, inline: true}
                     )
                 );
             });
     } else {
         message.channel.send(new MessageEmbed()
     .setColor(emebdColor)
 .setTitle("`!bug` Command")
 .setDescription("The `!bug` command is for the ThunderBot support Discord server only. You can join the server here:")
 );
 message.channel.send("https://thunderbot.cf");
     }
     }
     if (splitArgs(message.content)[0] == prefix + "bug")  {
         if (message.channel.guild.id == "783745418391322715") {
             console.log("CAN YOU SEE THIS? HELLO!")
             console.log(message.guild.channels.cache.array().length);
 doItYeah(message);
         message.channel.guild.channels.create(String(bugnum).padStart(4, '0'), { parent: "784573293889978398", position: 0.1 }).then(ch => {
             ch.setParent('784573293889978398');
             ch.setTopic(message.content.substring(5))
             ch.send(new MessageEmbed().setColor(emebdColor)).then(msg => {
                 msg.edit(
                     new MessageEmbed()
                     .setColor(emebdColor)
                     .setTitle("Issue #"+String(bugnum).padStart(4, '0')+" was just opened.")
                     .setDescription(message.content.substring(5))
                     .addFields(
                         {name: "Bug report opened by", value: "<@"+message.author.id+">" || 0, inline: true}
                     )
                 );
                 message.channel.send(new MessageEmbed()
                 .setColor(emebdColor)
                 .setTitle("Issue #"+String(bugnum).padStart(4, '0')+" was just opened.")
                 .setDescription(message.content.substring(5))
                 .addFields(
                     {name: "Bug report opened by", value: "<@"+message.author.id+">" || 0, inline: true},
                         {name: "Find the issue at", value: "<#"+ch.id+">" || 0, inline: true}
                 ))
                 bugnum = bugnum + 1;
             })
         });

     } else {
         message.channel.send(new MessageEmbed()
     .setColor(emebdColor)
 .setTitle("`!bug` Command")
 .setDescription("The `!bug` command is for the ThunderBot support Discord server only. You can join the server here:")
 );
 message.channel.send("https://thunderbot.cf");
     }
     }
if (message.content == prefix+"stats") {
  message.channel.send(new MessageEmbed().setTitle(emojis.loading).setColor(emebdColor)).then(sentMessage => {
    setTimeout(function(){
    sentMessage.edit(new MessageEmbed()
    .setTitle("ThunderBot Stats")
    .setColor(emebdColor)
    .setFooter("*Active users since last restart")
    .addFields(
      { name: "Servers", value: "`"+client.guilds.cache.size+"`", inline: true },
      { name: "Channels", value: "`"+client.channels.cache.size+"`", inline: true },
      { name: "Users*", value: "`"+client.users.cache.size+"`", inline: true },
      { name: "Uptime", value: "`"+Math.round(client.uptime/1000/60)+" minutes`", inline: true },
      { name: "Emojis", value: "`"+client.emojis.cache.size+"`", inline: true }
    )
    );
    },1500);
  })
}
if (message.content === prefix + "docs") {
	message.channel.send({
		"embed": {
		 "title": "ThunderBot Documentation",
		 "color": emebdColor,
		 "description": "Official ThunderBot Documentation - Get help with commands, reactions, and more",
		 "url": "https://docs.thunderbot.cf",
		 "author": {
			 "name": "Documentation",
			 "url": "https://docs.thunderbot.cf"
		 },
		 "thumbnail": {
			 "url": "https://thunderbot.cf/fav.png"
		 }
	 }
 })
}
if (message.content == prefix+'rickroll') {
  message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
if (splitArgs(message.content)[0] === prefix + "text") {
  if (splitArgs(message.content).length = 3) {
	message.channel.send(getTextImage(splitArgs(message.content)[2],splitArgs(message.content)[1]))
  } else {
    message.channel.send(getTextImage(splitArgs(message.content)[1]))
  }
}
	if (message.content === "/help" || message.content === prefix + "help" || message.content.toLowerCase() == "tb help") {

	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Help Menu")
	    // .setDescription("**Here are the sub-categories:**\n`"+prefix+"help` - Main menu\n`"+prefix+"help fun` - Fun and games\n`"+prefix+"help economy` - Economy\n`"+prefix+"help moderation` - Moderation\n\n**Here are some general commands:**\n`"+prefix+"status` - View uptime and current status\n`"+prefix+"invite` - Invite ThunderBot to your own server\n`"+prefix+"support` - Join the official Discord server\n`"+prefix+"docs` - Get a link to the official documentation\n\n**Other commands can be found on our official documentation: https://thunderbot.cf/docs**")
      .addFields(
        {"name": "Here are the sub-categories:", "value": "`"+prefix+"help` - Main menu\n`"+prefix+"help fun` - Fun and games\n`"+prefix+"help economy` - Economy\n`"+prefix+"help moderation` - Moderation\n`"+prefix+"help ttt` - Tic Tac Toe"},

        {"name": "Here are some general commands:", "value": "`"+prefix+"status` - View uptime and current status\n`"+prefix+"invite` - Invite ThunderBot to your own server\n`"+prefix+"support` - Join the official Discord server\n`"+prefix+"docs` - Get a link to the official documentation"},
        {"name": "Other commands can be found on our official documentation:", value: "https://thunderbot.cf/docs"}
      )
      .setColor(0xfcba03)
	    .setFooter("ThunderBot")

   message.channel.send(embed)
	}


  	if (message.content === "/help fun" || message.content === prefix + "help fun" || message.content.toLowerCase() == "tb help fun") {

	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Help Menu → Fun")
	//  .setDescription("**Here are the fun commands:**\n`"+prefix+"joke` - Tell a dad joke\n`"+prefix+"knock-knock` - Tell the knock-knock of the day\n`"+prefix+"rps` - Play rock-paper-scissors\n`"+prefix+"random, "+prefix+"roll` - Roll a random number between 1 and 6\n`"+prefix+"norris` - Get a Chuck Norris fact\n`"+prefix+"embed` - Create a message embed\n`"+prefix+"meme` - Get a meme from `r/memes`\n`"+prefix+"anime` - Get a random anime\n`"+prefix+"reactions` - Get info about automatic reactions\n`"+prefix+"advice` - Get advice\n`"+prefix+"facepalm [@user], r/facepalm [@user]` - Facepalm\n`"+prefix+"spank [@user]` - Spank someone\n\n**Other commands can be found on our official documentation: https://thunderbot.cf/docs**")
   .addFields(
     {"name": "Here are the fun commands:", "value": "`"+prefix+"joke` - Tell a dad joke\n`"+prefix+"knock-knock` - Tell the knock-knock of the day\n`"+prefix+"rps` - Play rock-paper-scissors\n`"+prefix+"random, "+prefix+"roll` - Roll a random number between 1 and 6\n`"+prefix+"norris` - Get a Chuck Norris fact\n`"+prefix+"embed` - Create a message embed\n`"+prefix+"meme` - Get a meme from `r/memes`\n`"+prefix+"anime` - Get a random anime\n`"+prefix+"reactions` - Get info about automatic reactions\n`"+prefix+"advice` - Get advice\n`"+prefix+"facepalm [@user], r/facepalm [@user]` - Facepalm\n`"+prefix+"spank [@user]` - Spank someone\n`"+prefix+"wiggle` - Get your wiggles out"},
     {"name": "Other commands can be found on our official documentation:", "value": "https://thunderbot.cf/docs"}
   )
      // Set the color of the embed
      .setColor(0xfcba03)
	 .setFooter("ThunderBot")
   message.channel.send(embed)
	}
  	if (message.content === "/help music" || message.content === prefix + "help music" || message.content.toLowerCase() == "tb help music") {
var pp = prefix;
var prefix = "!";
	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Help Menu → Music")
	 .setDescription("**Here are the music commands:**\n`"+prefix+"play <song or URL>` - Add a song to the queue\n`"+prefix+"skip` - Skip the current song\n`"+prefix+"lyrics` - Get the lyrics of the current song\n`"+prefix+"pause` - Pause the current song\n`"+prefix+"resume` - Resume the current song\n`"+prefix+"queue` - View the current queue\n`"+prefix+"volume <number>` - Set the current volume\n`"+prefix+"nowplaying` - Get info about the current song playing\n`"+prefix+"search` - Search for songs on YouTube\n`"+prefix+"stop` - Stop all music\n\n**Other commands can be found on our official documentation: https://thunderbot.cf/docs**")
      // Set the color of the embed
      .setColor(0xfcba03)
	 .setFooter("ThunderBot")
var prefix = pp;

   message.channel.send(embed)
	}
  	if (message.content === "/help ttt" || message.content === prefix + "help ttt" || message.content.toLowerCase() == "tb help ttt") {

	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Help Menu → Tic-Tac-Toe")
	 .setDescription("**Here are the Tic-Tac-Toe commands:**\n`"+prefix+"ttt-start` - Host a Tic-Tac-Toe game\n`"+prefix+"ttt-join <@user>` - Join a Tic-Tac-Toe game\n`"+prefix+"ttt-move <position>` - places an X or O in a Tic Tac Toe game\n`"+prefix+"ttt-cancel` - Cancel hosting a Tic-Tac-Toe game\n`"+prefix+"ttt-leave` - Leave a Tic-Tac-Toe game\n\n**Other commands can be found on our official documentation: https://thunderbot.cf/docs**")
      // Set the color of the embed
      .setColor(0xfcba03)
	 .setFooter("ThunderBot")
   message.channel.send(embed)
	}
if (splitArgs(message.content)[0] === "!emoji" && splitArgs(message.content)[1] === "add") {
  if (emojis[splitArgs(message.content)[2]] == undefined) {
    emojis[splitArgs(message.content)[2]] = "<:" + splitArgs(message.content)[3] + ":" + splitArgs(message.content)[4] + ">";
    message.channel.send("The emoji was added: "+emojis[splitArgs(message.content)[2]])
  } else {
    message.channel.send("That emoji already exists in our database.")
  }
}
  	if (message.content === "/help economy" || message.content === prefix + "help economy" || message.content.toLowerCase() == "tb help economy") {
	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Help Menu → Economy")
	 .setDescription("**Here are the economy commands:**\n`"+prefix+"bal` - Get your current balance\n`"+prefix+"shop` - Shop for some  items\n`"+prefix+"inv` - See your inventory\n`"+prefix+"beg` - Beg for some cash\n`"+prefix+"work` - Work and get your hourly pay\n`"+prefix+"buy` - Buy something from the shop\n`"+prefix+"use` - Use an item\n`"+prefix+"give` - Give someone some money\n`"+prefix+"gift` - Gift someone and item\n`"+prefix+"sell` - Sell an item\n\n**Other commands can be found on our official documentation: https://thunderbot.cf/docs**")
      // Set the color of the embed
      .setColor(0xfcba03)
	 .setFooter("ThunderBot")
   message.channel.send(embed)
	}
    	if (message.content === "/help moderation" || message.content === prefix + "help moderation" || message.content.toLowerCase() == "tb help moderation") {

	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Help Menu → Moderation")
	 .setDescription("**Here are the moderation commands:**\n`"+prefix+"purge` - Mass-delete messages\n`"+prefix+"filter` - Turn on the automatic filter\n`"+prefix+"nofilter` - Turn off the automatic filter\n\n**Other commands can be found on our official documentation: https://thunderbot.cf/docs**")
      // Set the color of the embed
      .setColor(0xfcba03)
	 .setFooter("ThunderBot")
   message.channel.send(embed)
	}
    	if (message.content === prefix + "status") {

	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Status")
	 .setDescription("**To view the ThunderBot status and uptime, click on: https://status.thunderbot.cf**")
      // Set the color of the embed
      .setColor(0xfcba03)
	 .setFooter("ThunderBot")
   message.channel.send(embed)
	}
	if (message.content == prefix + "filter") {
		if (message.member.hasPermission("ADMINISTRATOR")) {
var g = getProfane();
g[message.channel.guild+""] = true;
setProfane(g);
}
}
if (message.content == prefix + "nofilter") {
	if (message.member.hasPermission("ADMINISTRATOR")) {
var g = getProfane();
g[message.channel.guild+""] = false;
setProfane(g);
    }
}
if (splitArgs(message.content)[0] == prefix + 'prefix') {
	if ( message.member.hasPermission("MANAGE_GUILD") || message.member.hasPermission("ADMINISTRATOR") ) {
        db.set('prefix.' + message.guild.id, splitArgs(message.content)[1].trim());
        
              client.channels.cache.get('797708904623767574').send("<pfix "+message.guild.id+" "+splitArgs(message.content)[1].trim())
setPrefix();
    }
}

if (splitArgs(message.content)[0] == prefix + "purge") {
	if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("ADMINISTRATOR") || message.author.id == "748577964311969923") {


	if (splitArgs(message.content).length < 2) {
		const embed = new MessageEmbed()
			 // Set the title of the field
			 .setTitle("Error")
			 .setDescription("You must include 1 argument:\n`<number>` - The number of messages to purge\n\nExample: " + '`!purge 20`')
			 .setColor(0xfcba03)


		message.channel.send(embed)
	} else {
		let messagecount = parseInt(splitArgs(message.content)[1]);
message.channel.bulkDelete(messagecount).then(messages => {
 message.channel.send(new MessageEmbed()
		 // Set the title of the field
		 .setTitle("Success!")
		 .setDescription(messages.size + " messages have been deleted.\nThis message will be deleted automatically after 10 seconds.")
		 .setFooter("ThunderBot")
		 .setColor(0xfcba03)
	 ).then(sentMessagee => {
		 sentMessagee.delete({ timeout: 10000 });
	 });
});
	}

} else {
	const embed = new MessageEmbed()
		 // Set the title of the field
		 .setTitle("Error")
		 .setDescription("You must have server-wide manage messages permissions to purge messages.")
		 .setColor(0xfcba03)


	message.channel.send(embed)

}
}


if (splitArgs(message.content)[0] == prefix + "slowmode") {
	if (message.member.hasPermission("MANAGE_CHANNELS") || message.member.hasPermission("ADMINISTRATOR") || message.author.id == "748577964311969923") {


	if (splitArgs(message.content).length < 2) {
		const embed = new MessageEmbed()
			 // Set the title of the field
			 .setTitle("Error")
			 .setDescription("You must include 1 argument:\n`<number>` - The amount of time (in seconds)\n\nExample: " + '`!slowmode 5`')
			 .setColor(0xfcba03)


		message.channel.send(embed)
	} else {
    if (splitArgs(message.content)[1] == parseInt(splitArgs(message.content)[1]) && Math.floor(parseInt(splitArgs(message.content)[1])) < 61 && Math.floor(parseInt(splitArgs(message.content)[1])) > -1) {
      var time = Math.floor(parseInt(splitArgs(message.content)[1]));
    } else {
      return message.channel.send(new MessageEmbed()
      .setTitle("Error!")
      .setDescription("Either you did not specify a valid number, or it was not between 0 and 60.")
      .setFooter("ThunderBot")
		 .setColor(0xfcba03)
);
    }
 message.channel.send(new MessageEmbed()
		 // Set the title of the field
		 .setTitle("Success!")
		 .setDescription("Slowmode has been set to "+time+" for <#"+message.channel.id+">.")
		 .setFooter("ThunderBot")
		 .setColor(0xfcba03)
	 );
message.channel.setRateLimitPerUser(time, "!slowmode command");
	}

} else {
	const embed = new MessageEmbed()
		 // Set the title of the field
		 .setTitle("Error")
		 .setDescription("You must have server-wide manage channels permissions to set slowmode.")
		 .setColor(0xfcba03)


	message.channel.send(embed)

}
}


if (splitArgs(message.content)[0] === prefix + "joinrole") {
	message.channel.guild.roles.fetch(splitArgs(message.content)[1]).then(role => {
		message.guild.member(message.author).roles.add(role);
 })
}

if (splitArgs(message.content)[0] === prefix + "leaverole") {
	message.channel.guild.roles.fetch(splitArgs(message.content)[1]).then(role => {
		message.guild.member(message.author).roles.remove(role);
 })
}
		if (splitArgs(message.content)[0] === prefix + "elmocolor") {
			   message.channel.guild.roles.fetch('758830387010076723').then(role => {
		role.setColor(splitArgs(message.content)[1]);
		    })
				message.channel.send(new MessageEmbed()
			.setColor(emebdColor)
		.setTitle("Color Changed")
		.setDescription("The role color has been changed.")
		).then(msg => {
			message.delete();
			setTimeout(function(){msg.delete()},3000)
		})
		}

		if (splitArgs(message.content)[0] === prefix + "yodacolor") {
			   message.channel.guild.roles.fetch('784227654697353246').then(role => {
		role.setColor(splitArgs(message.content)[1]);
		    })
				message.channel.send(new MessageEmbed()
			.setColor(emebdColor)
		.setTitle("Color Changed")
		.setDescription("The role color has been changed.")
		).then(msg => {
			message.delete();
			setTimeout(function(){msg.delete()},3000)
		})
		}


		if (splitArgs(message.content)[0] === prefix + "yodarole") {
			   message.channel.guild.roles.fetch('784227654697353246').then(role => {
		role.edit({ name: splitArgs(message.content)[2], hoist: true, color: splitArgs(message.content)[1], mentionable: true })
		    })
				message.channel.send(new MessageEmbed()
			.setColor(emebdColor)
		.setTitle("Role Changed")
		.setDescription("Your role has been changed.")
		).then(msg => {
			message.delete();
			setTimeout(function(){msg.delete()},3000)
		})
		}
		if (message.content.includes("&star") && message.author.id == "748577964311969923") {
			message.react("⭐");
		}


		if (message.content.includes("kmao") && message.author.id == "750063188623753285") {
			message.react("⭐");
		}
if (splitArgs(message.content) == prefix + "megadel") {
	if (true) {


	if (splitArgs(message.content).length < 2) {
		const embed = new MessageEmbed()
			 // Set the title of the field
			 .setTitle("Error")
			 .setDescription("You must include 1 argument:\n`<number>` - The number of messages to purge\n\nExample: " + '`!purge 20`')
			 .setColor(0xfcba03)


		message.channel.send(embed)
	} else {
		let messagecount = parseInt(splitArgs(message.content)[1]);
message.channel.bulkDelete(messagecount).then(messages => {
 message.channel.send(new MessageEmbed()
		 // Set the title of the field
		 .setTitle("Success!")
		 .setDescription(messages.size + " messages have been deleted.\nThis message will be deleted automatically after 10 seconds.")
		 .setFooter("ThunderBot")
		 .setColor(0xfcba03)
	 ).then(sentMessagee => {
		 sentMessagee.delete({ timeout: 10000 });
	 });
});
	}

} else {
	const embed = new MessageEmbed()
		 // Set the title of the field
		 .setTitle("Error")
		 .setDescription("You must have server-wide manage messages permissions to purge messages.")
		 .setColor(0xfcba03)


	message.channel.send(embed)

}
}

if (message.content.substring(0,5) == ".echo") {
	message.channel.send(message.content.substring(6));
	message.delete();
}
	if (splitArgs(message.content)[0] == prefix + "bigdel") {
		if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("ADMINISTRATOR")) {


		if (splitArgs(message.content).length < 2) {
			const embed = new MessageEmbed()
				 // Set the title of the field
				 .setTitle("Error")
				 .setDescription("You must include 1 argument:\n`<number>` - The number of messages to purge\n\nExample: " + '`!purge 20`')
				 .setColor(0xfcba03)


			message.channel.send(embed)
		} else {
			let messagecount = parseInt(splitArgs(message.content)[1]);
 message.channel.bulkDelete(messagecount).then(messages => {
	 message.channel.send(new MessageEmbed()
			 // Set the title of the field
			 .setTitle("Success!")
			 .setDescription(messages.size + " messages have been deleted.\nThis message will be deleted automatically after 10 seconds.")
			 .setFooter("ThunderBot")
			 .setColor(0xfcba03)
		 ).then(sentMessagee => {
			 sentMessagee.delete({ timeout: 10000 });
		 });
 });
		}

	} else {
		const embed = new MessageEmbed()
			 // Set the title of the field
			 .setTitle("Error")
			 .setDescription("You must have server-wide manage messages permissions to purge messages.")
			 .setColor(0xfcba03)


		message.channel.send(embed)

	}
	}
if (splitArgs(message.content)[0] == prefix + "embed") {
// if (splitArgs(message.content).length < 3) {
// 	console.log("GGG")
// 	const embed = new MessageEmbed()
// 		 // Set the title of the field
// 		 .setTitle("Error")
// 		 .setDescription("You must include 3 arguments:\n`<title>` - The card's title\n`<text>` - The card's main text\n`<color>` (optional) - The hexadecimal value of a color, including the `#`\nYou can use quotes " + '`"`' + " when a title or body has spaces.\n\nExample: " + '`!embed "Announcement" "I just had to announce this." #FFFFFF`')
// 		 .setColor(0xfcba03)


// 	message.channel.send(embed)
// } else {
// 		 const embed = new MessageEmbed()
// 	      // Set the title of the field
// 	      .setTitle(splitArgs(message.content)[1])
//         .setDescription(splitArgs(message.content)[2])
// 	      .setColor(splitArgs(message.content)[3] ? splitArgs(message.content)[3] : emebdColor)
//         .setFooter("ThunderBot")
// 		 message.delete({ timeout: 0 })
// 		   .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds`))
// 		   .catch(console.error);

// 	   message.channel.send(embed)
// 	 }
}
	if (message.content === prefix + "reactions") {

	 const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle("Automatic Reactions Menu")
	 .setDescription("To use automatic reactions, just add a trigger to the end of any message. If you want to remove the trigger later on, you can, and the reactions will stay. Every trigger begins with a `&`.\n`reaction-yesno-poll` - Trigger a simple yes/no poll.\n`reaction-rainbow-poll` - Trigger a rainbow poll with 6 options.")
      // Set the color of the embed
      .setColor(0xfcba03)
	 .setFooter("ThunderBot")


   message.channel.send(embed)
	}


		if (message.content == prefix + "reactions &rawtext") {

	message.channel.send("To use automatic reactions, just add a trigger to the end of any message. If you want to remove the trigger later on, you can, and the reactions will stay. Every trigger begins with a `&`.\n`reaction-yesno-poll` - Trigger a simple yes/no poll.\n`reaction-rainbow-poll` - Trigger a rainbow poll with 6 options.");
	}
if (message.content.includes("&delete")) {
  message.delete();
}

	if (message.content.includes("&reaction-yesno-poll")) {
    // Send "pong" to the same channel
    message.react(emojis.yes);
		message.react(emojis.no);
  }
	if (message.content.includes("&simp")) {
    // Send "pong" to the same channel
    message.react(emojis.simp);
  }
	if (message.content.includes("&fuck")) {
    // Send "pong" to the same channel
    message.react(emojis.fuck);
  }
	if (message.content.includes("&reaction-rainbow-poll")) {
    // Send "pong" to the same channel
    message.react("🟥");
		message.react("🟧");
		message.react("🟨");
		message.react("🟩");
		message.react("🟦");
		message.react("🟪");
  }



  if (message.content === prefix + 'random' || message.content === prefix + 'roll' || message.content === prefix + 'dice') {
	  var a = Math.floor(Math.random() * 6);
	  a = a + 1;
    message.channel.send("Here you go! You rolled: " + a);
  }








var q = {
  channel: colors.brightBlue("#" + message.channel.name),
  channelid: colors.blue(" (" + message.channel.id + "), "),
  author: colors.brightBlue(message.author.username + " >")
}

  var nh = q.channel+q.channelid+q.author;

	if (nh == header) {

	} else {
	//	console.log(" ");
	//console.log(nh);
	}
	header = nh;
//console.log(colors.green(message.content));
var runInMsg = function(messaege,code){
  const context = {
      db: db,
      client: client,
      message: message,
    console: {
      log: function(data){
        message.channel.send("```"+data+"```")
      },
      error: function(data){
        message.channel.send(new MessageEmbed().setColor(emebdColor).setDescription("```"+data+"```"))
      }
    }
  };
vm.createContext(context); // Contextify the object.

vm.runInContext(code, context);

}
// Eval and run commands
if(admins.includes(message.author.id))var tot=!0;else var tot=!1;if("eval =>"==message.content.substring(0,7)&&tot)if(message.content.substring(0,15).includes("```"))if(message.content.substring(0,25).includes("```javascript")){var first=message.content.indexOf("```javascript"),last=message.content.lastIndexOf("```");try{runInMsg(message,message.content.substring(first+13,last),client)}catch(e){message.channel.send((new MessageEmbed).setDescription("```"+e+"```").setColor(emebdColor))}}else if(message.content.substring(0,17).includes("```js")){var first=message.content.indexOf("```js"),last=message.content.lastIndexOf("```");try{runInMsg(message,message.content.substring(first+5,last),client)}catch(e){message.channel.send((new MessageEmbed).setDescription("```"+e+"```").setColor(emebdColor))}}else{var first=message.content.indexOf("```"),last=message.content.lastIndexOf("```");try{runInMsg(message,message.content.substring(first+3,last),client)}catch(e){message.channel.send((new MessageEmbed).setDescription("```"+e+"```").setColor(emebdColor))}}else try{runInMsg(message,message.content.substring(7),client)}catch(e){message.channel.send((new MessageEmbed).setDescription("```"+e+"```").setColor(emebdColor))}if("run =>"==message.content.substring(0,6)&&tot)if(message.content.substring(0,10).includes("```"))if(message.content.substring(0,20).includes("```javascript")){var first=message.content.indexOf("```javascript"),last=message.content.lastIndexOf("```");try{message.channel.send(JSON.stringify(eval(message.content.substring(first+13,last)).catch(e=>{message.channel.send(e)})))}catch(e){message.channel.send(e)}}else if(message.content.substring(0,12).includes("```js")){var first=message.content.indexOf("```js"),last=message.content.lastIndexOf("```");try{message.channel.send(JSON.stringify(eval(message.content.substring(first+5,last))))}catch(e){message.channel.send(e)}}else{var first=message.content.indexOf("```"),last=message.content.lastIndexOf("```");try{message.channel.send(JSON.stringify(eval(message.content.substring(first+3,last))))}catch(e){message.channel.send(e)}}else try{message.channel.send(JSON.stringify(eval(message.content.substring(7))))}catch(e){message.channel.send(e)}
});




client.on('messageReactionAdd', async (reaction, user) => {
if (memes.includes(reaction.message.id) && user.id !== "783743297453686795") {
  reaction.message.delete();
  let datae = await options.random.getMeme()
          datae.embed.color = emebdColor;
          return reaction.message.channel.send(datae).then(sentMessage => {
            sentMessage.react('<:meme_man:783324827795849267>');
            memes.push(sentMessage.id)
          })

}
	if (reaction.emoji.name == "🎮") {
if (user.id == "783743297453686795") {

} else {
var rm = reaction.message.channel;
	reaction.message.delete();

	if (games.players.includes(user.username)) {
		for (var i = 0; i < games.active.length; i++) {
			if (games.active[i].username == user.username) {
				games.active[i].message.delete();
				games.active.splice(i,1);
			}
		}
		for (var i = 0; i < games.players.length; i++) {
			if (games.players[i] == user.username) {
				games.players.splice(i,1);
			}
		}
	}

	rm.send(new Discord.MessageEmbed().setColor(emebdColor)).then(sentMessage => {
		games.players.push(user.username);
		games.active.push({
			username: user.username,
			id: user.id,
			timestamp: Date.now(),
			message: sentMessage
		});
		sentMessage.edit("");
		sentMessage.edit(
			new Discord.MessageEmbed()
			.setColor(emebdColor)
			.setTitle(`${user.username}'s Game`)  //.setTitle(`Score: ${this.body.length}\nHigh Score: ${25}`)
			.addFields(
				{name: "Streak", value: getScores()[user.id.toString()] || 0, inline: true}
			)
			.setFooter("ThunderBot")
			.setDescription("Rock, paper, scissors... **You decide!**")
		);

		//console.log(sentMessage);
		sentMessage.react("🪨")
		.then(() => sentMessage.react("📃"))
		.then(() => sentMessage.react("✂"))
		.catch((e) => console.error("Could not add reactions", e))
	});

}
 }

  for (let i=0; i<games.active.length; i++) {
    if (user.bot) { return; }
    if (games.active[i].message.id == reaction.message.id && games.active[i].id == user.id) {
			var actions = {
				bot: Math.floor(Math.random()*3)+1
			};
			var emoji = "Error";
			if (actions.bot == 1) {
				emoji = "🪨";
			}
			if (actions.bot == 2) {
				emoji = "📃";
			}
			if (actions.bot == 3) {
				emoji = "✂";
			}
      if (reaction.emoji.name == "🪨") { actions.player = 1; }
      if (reaction.emoji.name == "📃") { actions.player = 2; }
			if (reaction.emoji.name == "✂") { actions.player = 3; }
			if (actions.player == actions.bot+1 || actions.player == actions.bot-2) {
				var obj = getScores();
				console.log(obj);
				var score = obj[user.id] || 0
				obj[user.id] = score+1;
				setScores(obj);
				reaction.message.edit("");
		    reaction.message.edit(
		      new Discord.MessageEmbed()
		      .setColor(emebdColor)
		      .setTitle(`${user.username}'s Game`)  //.setTitle(`Score: ${this.body.length}\nHigh Score: ${25}`)
		      .addFields(
		        {name: "Streak", value: score+1, inline: true}
		      )
					.setFooter("ThunderBot")
		      .setDescription(reaction.emoji.name + " vs " + emoji + "\n**" + user.username + " wins!**\nPress the game controller to play again.")
		    );
			} else {
				var obj = getScores();
				console.log(obj);
				obj[user.id] = 0;
				setScores(obj);
				if (actions.player == actions.bot) {
					reaction.message.edit("");
					reaction.message.edit(
						new Discord.MessageEmbed()
						.setColor(emebdColor)
						.setTitle(`${user.username}'s Game`)  //.setTitle(`Score: ${this.body.length}\nHigh Score: ${25}`)
						.addFields(
							{name: "Streak", value: 0, inline: true}
						)
						.setFooter("ThunderBot")
						.setDescription(reaction.emoji.name + " vs " + emoji + "\n**It's a draw!**\nPress the game controller to play again.")
					);
				} else {
					var obj = getScores();
					obj[user.id] = 0;
					setScores(obj);

					reaction.message.edit("");
					reaction.message.edit(
						new Discord.MessageEmbed()
						.setColor(emebdColor)
						.setTitle(`${user.username}'s Game`)  //.setTitle(`Score: ${this.body.length}\nHigh Score: ${25}`)
						.addFields(
							{name: "Streak", value: 0, inline: true}
						)
						.setFooter("ThunderBot")
						.setDescription(reaction.emoji.name + " vs " + emoji + "\n**Bot wins!**\nPress the game controller to play again.")
					);
				}
			}
			const userReactions = reaction.message.reactions.cache.filter(r => {
			console.log(games);
		r.users.cache.has(games.active[i].id);
	});
      try {
      	for (const r of userReactions.values()) {
      		r.users.remove(games.active[i].id);
      	}
      } catch (error) {
        console.error('Failed to remove reactions.');
        console.error(error);
      } finally {
				reaction.message.react("🎮");
			for (var q = 0; q < games.active.length; q++) {
				if (games.active[q].username == user.username) {
					games.active.splice(q,1);
				}
			}
			for (var q = 0; q < games.players.length; q++) {
				if (games.players[q] == user.username) {
					games.players.splice(q,1);
				}
			}
		}
    }
  }
});
function splitArgs(str) {
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
}

client.on("messageReactionAdd", (MessageReaction, User) => {
  if (User.bot) {
    return;
  }
  if (Object.keys(db.get('polls')).includes(MessageReaction.message.id)) {
    var i = 0;
  var msgc = MessageReaction.message.reactions.cache;
  msgc.each(reaction => {
    if (reaction.users.cache.has(User.id)) {
      i = i + 1;

      /* // FANCY WAY (NOT DONE YET)
      if (reaction.emoji.name == MessageReaction.emoji.name) {
        
      if (i > parseInt(db.get('polls.'+MessageReaction.message.id))) {
         msgc.first().users.remove(User);
      }
      } else {
      if (i > parseInt(db.get('polls.'+MessageReaction.message.id))) {
         reaction.users.remove(User);
      }
      }
      */
      if (i > parseInt(db.get('polls.'+MessageReaction.message.id))) {
         reaction.users.remove(User);
      }
    }
  })
  }
});


var list = {
  "prefix": (new MessageEmbed()
    .setTitle("Prefix")
    .setDescription("ThunderBot's prefix can be changed using the `!prefix` command, or on the web dashboard. Unlike other bots, ThunderBot understands tha you may not like the default prefix, and that you may have other bots with the same prefix, so we allow you to change the prefix without purchasing premium.")
  ),
  "dashboard": (new MessageEmbed()
    .setTitle("Dashboard")
    .setDescription("ThunderBot has an easy to use web dashboard that can be found at https://thunderbot.cf/link/dashboard.")
  ),
  "leaderboard": (new MessageEmbed()
    .setTitle("XP Leaderboard")
    .setDescription("You can access the leaderboard by running the `!leaderboard` command. It will show who has the most XP in your server.")
  ),
  "xp": (new MessageEmbed()
    .setTitle("XP/Levels")
    .setDescription("ThunderBot has an XP/Leveling system that allows you to change the color, and the background if you have premium. You can log into the web dashboard at https://thundrebot.cf/link/dashboard.")
  ),
  "level": (new MessageEmbed()
    .setTitle("XP/Levels")
    .setDescription("ThunderBot has an XP/Leveling system that allows you to change the color, and the background if you have premium. You can log into the web dashboard at https://thundrebot.cf/link/dashboard.")
  ),
  "levels": (new MessageEmbed()
    .setTitle("XP/Levels")
    .setDescription("ThunderBot has an XP/Leveling system that allows you to change the color, and the background if you have premium. You can log into the web dashboard at https://thundrebot.cf/link/dashboard.")
  ),
  "rank": (new MessageEmbed()
    .setTitle("XP/Levels")
    .setDescription("ThunderBot has an XP/Leveling system that allows you to change the color, and the background if you have premium. You can log into the web dashboard at https://thundrebot.cf/link/dashboard.")
  ),
  "lost money": (new MessageEmbed()
    .setTitle("Database \"Gaps\"")
    .setDescription("Sometimes the database reverts to a backup if our server crashes, which can happen when there's a bug. In this case, anywhere from a few minutes to an hour of recent queries will be lost. If you lost money or items due to a database \"gap\", please contact a support member.")
  ),
  "I lost money": (new MessageEmbed()
    .setTitle("Database \"Gaps\"")
    .setDescription("Sometimes the database reverts to a backup if our server crashes, which can happen when there's a bug. In this case, anywhere from a few minutes to an hour of recent queries will be lost. If you lost money or items due to a database \"gap\", please contact a support member.")
  ),
  "music": (new MessageEmbed()
    .setTitle("Music")
    .setDescription("ThunderBot has a simple music system that can play YouTube videos. To learn about all the music commands, visit the docs or run `!help music`.")
  ),
  "moderation": (new MessageEmbed()
    .setTitle("Moderation")
    .setDescription("The full ThunderBot moderation suite is still under construction, but the `!kick` and `!ban` commands are available. They're still being revised, and if you come across any bugs, please let the support staff know")
  )
}
client.ws.on('INTERACTION_CREATE', async interaction => {
  if (interaction.data.name == "support") {
    if (interaction.data.options) {
      var query = interaction.data.options[0].value.trim();
      if (list[query.toLowerCase()]) {
        setTimeout(() => {
          client.channels.cache.get(interaction.channel_id).send(list[query.toLowerCase()].setColor(emebdColor))
        }, 1000);
        client.api.interactions(interaction.id, interaction.token).callback.post({data: {
          type: 5
          }
        })
      } else {
        client.api.interactions(interaction.id, interaction.token).callback.post({data: {
        type: 4,
        data: {
          content: "Invalid query."
          }
        }
      })

      }
    } else {
      client.api.interactions(interaction.id, interaction.token).callback.post({data: {
        type: 4,
        data: {
          content: "This command allows you to look up different errors and problems."
          }
        }
      })
    }
  }
})




/**** IMPORTANT ****/
client.on('rateLimit',console.log);
console.log(client.login(process.env.OkEten));