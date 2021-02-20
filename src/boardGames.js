const Discord = require('discord.js');

// Format for board array:
// 0 is blank
// 1 is player 1
// 2 is player 2

class TicTacToeGame {
  static pendingInvites = []; // list of objects {id: "userID", "message": inviteMessage}
  constructor(p1, p2, channel, embedColor, prefix) {
    this.player1 = p1;
    this.player2 = p2;

    this.embedColor = embedColor;
    this.prefix = prefix;
    this.currentTurn = 1; // Either 1 or 2
    this.board = [];
    for (let i=0; i<9; i++) {
      this.board.push(0);
    }
    this.currentMessage;
    this.gameOver = false;

    this.startGame(channel);
  }

  startGame(channel) {
    channel.send(
      new Discord.MessageEmbed()
      .setColor(this.embedColor)
      .setTitle(`${this.player1.username}'s Turn`)
      .setDescription(TicTacToeGame.formatBoard(this.board))
      .addFields({"name": "How to play", value: "To make a move, use `" + this.prefix + "ttt-move position`"})
    )
    .then(msg => {
      this.currentMessage = msg;
    });
  }

  isWinner() {
    // 0 means no winner
    // 1 or 2 means player 1 or 2 won
    // 3 means draw
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
      [0, 4, 8], [2, 4, 6] // diagonal
    ];
    let result = 0;

    winningCombinations.forEach(comb => {
      if (this.board[comb[0]] == this.board[comb[1]] && this.board[comb[1]] == this.board[comb[2]]) {
        result = this.board[comb[0]];
      }
    });

    // Check for tie
    for (let i=0; i<9; i++) {
      if (this.board[i] == 0) { break; }
      if (i == 8) { result = 3; }
    }

    return result;
  }

  placePiece(user, position) {
    let playerNum;
    // this.currentMessage.channel.send("The position is " + position);
    if (this.player1.id == user.id) { playerNum = 1; }
    else if (this.player2.id == user.id) { playerNum = 2; }
    if (this.gameOver) {
      this.currentMessage.channel.send("The game you are in has ended");
      return;
    }
    if (this.currentTurn != playerNum) {
      this.currentMessage.channel.send("It's not your turn!");
      return;
    }
    if (!(position >= 1 && position <= 9)) {
      this.currentMessage.channel.send("Invalid position. Must be between 1 and 9.");
      return;
    }
    if (this.board[position-1] != 0) {
      this.currentMessage.channel.send("That is not an empty space");
      return;
    }

    // Place piece on the board
    this.board[position-1] = playerNum;

    // Check for a winner
    let w = this.isWinner();
    let winningMsg = "nothing";
    if (w != 0) {
      this.currentMessage.channel.send("Winner: " + w);
      this.gameOver = true;
      
      // Update the db here
      if (w == 1) {
        winningMsg = `${this.player1.username} Wins!`;
      }
      else if (w == 2) {
        winningMsg = `${this.player2.username} Wins!`;
      }
      else if (w == 3) {
        winningMsg = "It's a draw!";
      }
    }

    // Switch the turn
    this.currentTurn = (this.currentTurn == 1 ? 2 : 1);
    // Send the new board
    this.currentMessage.channel.send(
      new Discord.MessageEmbed()
      .setTitle(!this.gameOver ? (`${this.currentTurn == 1 ? this.player1.username : this.player2.username}'s Turn`) : winningMsg)
      .setDescription(TicTacToeGame.formatBoard(this.board))
      .setColor(this.embedColor)
      // .addFields({"name": "How to play", value: "To make a move, use `" + this.prefix + "ttt-move position`"})
    )
    .then(msg => {
      this.currentMessage.delete();
      this.currentMessage = msg;
    });
  }

  static disbandGame(gameIndex, gamesArray, text) {
    if (text) {
      gamesArray[gameIndex].currentMessage.edit(
        new Discord.MessageEmbed()
        .setTitle("Tic Tac Toe")
        .setDescription(text)
        .setColor(gamesArray[gameIndex].embedColor)
      );
    }
    gamesArray.splice(gameIndex, 1);
  }

  static createInvite(sender, gamesArray, channel, emebdColor) {
    // sender is the discord.js message object of the person who sends the invite
    // gamesArray is the list with all the active ttt games
    channel.send(
      new Discord.MessageEmbed()
      .setColor(emebdColor)
      .setTitle(`Join ${sender.username} in Tic Tac Toe!`)
      .setDescription("Use `!ttt-join <@name>` to join their game")
    )
    .then(msg => {
      // Save the player's id and the message to the pending invites array
      this.pendingInvites.push({"id": sender.id, "message": msg});
    })
    .catch(err => {
      channel.send("There was an error creating your invite: "+err);
    });
  }

  static isInGame(user, gamesArray) {
    let result = false
    for (let i=0; i<gamesArray.length; i++) {
      let g = gamesArray[i]
      if (result) { return; }
      if (g.player1.id == user.id || g.player2.id == user.id) {
        if (g.gameOver) {
          TicTacToeGame.disbandGame(i, gamesArray, "");
        } else {
          result = true;
        }
      }
    };
    return result;
  }

  static formatBoard(board) {
    let e = {
      x: {
        x1: "<:XTL:788179892671610911>",
        x2: "<:XTR:788179892906885160>",
        x3: "<:XBL:788179892696252436>",
        x4: "<:XBR:788179892264370208>"
      },
      o: {
        x1: "<:OTL:788181393934516275>",
        x2: "<:OTR:788181394228248626>",
        x3: "<:OBL:788181394278580245>",
        x4: "<:OBR:788181394211340339>"
      },
      b: "<:BL:788182102554050603>",
      q1: ":one:",
      q2: ":two:",
      q3: ":three:",
      q4: ":four:",
      q5: ":five:",
      q6: ":six:",
      q7: ":seven:",
      q8: ":eight:",
      q9: ":nine:",
      hl: "<:HL:788278042199457835>",
      vl: "<:VL:788278045299048448>",
      cr: "<:CR:788278042455834635>"
    };
    var b = board; // shouldn't it be this.board.length?
    var out = {
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a5: "",
      a6: ""
    };
    for (var i = 0; i < b.length; i++) {
      var line = Math.floor(i/3)+1;
      var line1 = line*2-1;
      var line2 = line*2;
      if (b[i] == 0) {
        var q1 = e.b;
        var q2 = e.b;
        var q3 = e.b;
        var qqq = i+1;
        var q4 = e["q"+qqq];
      }
      if (b[i] == 1) {
        var q1 = e.x.x1;
        var q2 = e.x.x2;
        var q3 = e.x.x3;
        var q4 = e.x.x4;
      }
      if (b[i] == 2) {
        var q1 = e.o.x1;
        var q2 = e.o.x2;
        var q3 = e.o.x3;
        var q4 = e.o.x4;
      }
      if (i == 0 || i == 3 || i == 6) {
      out["a"+line1] = out["a"+line1]+""+q1+q2
      out["a"+line2] = out["a"+line2]+""+q3+q4
      } else {
      out["a"+line1] = out["a"+line1]+""+e.vl+q1+q2
      out["a"+line2] = out["a"+line2]+""+e.vl+q3+q4
      }
    }
    var horl = e.hl+e.hl+e.cr+e.hl+e.hl+e.cr+e.hl+e.hl
    var output = out.a1+"\n"+out.a2+"\n"+horl+"\n"+out.a3+"\n"+out.a4+"\n"+horl+"\n"+out.a5+"\n"+out.a6
    return output;
    // This is the function that takes this.board and makes it into a fancy embedded messaage
  }
}

module.exports = {"TicTacToeGame": TicTacToeGame}