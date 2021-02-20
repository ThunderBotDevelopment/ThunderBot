var db = require('quick.db');
var getRandom = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
class Lottery {
  constructor () {
    this.amount = 5000;
    this.kept = 0.8;
  }
  join (userid, amount = 1000) {
    db.push('lottery.participants',userid);
    this.amount = this.amount + amount * this.kept;
  }
  draw () {
    var participants = db.get('lottery.participants');
    console.log(participants);
    console.log(participants.length);
    if (participants.length < 1) {
      return undefined;
    } else {
      var winner = participants[getRandom(1,participants.length)-1];
      return winner;
    }
  }
  get participants () {
    var participants = db.get('lottery.participants');
    return participants.length;
  }
  reset () {
    this.amount = 5000;
    this.kept = 0.8;
    db.set('lottery.participants',[]);
  }
}
module.exports = Lottery;