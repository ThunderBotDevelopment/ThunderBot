// 24 hours: 86400000
// 12 hours: 43200000
module.exports = function(db) {
  var module = {
    vote: function(userid) {
      db.set('vote.twelvehour.'+userid,Date.now()+43200000);
      db.set('vote.twentyfourhour.'+userid,Date.now()+86400000);
    },
    scrapetwelve: function() {
      var votes = db.get('vote.twelvehour')
      var ok = Object.keys(votes);
      var ov = Object.values(votes);
      var out = [];
      for (var i = 0; i < ok.length; i++) {
        if (ov[i] < Date.now()) {
          out.push(ok[i]);
          delete votes[ok[i]];
        }
      }
      db.set('vote.twelvehour',votes);
      return(out);
      console.log(out);
    },
    scrapetwentyfour: function() {
      var votes = db.get('vote.twentyfourhour')
      var ok = Object.keys(votes);
      var ov = Object.values(votes);
      var out = [];
      for (var i = 0; i < ok.length; i++) {
        if (ov[i] < Date.now()) {
          out.push(ok[i]);
          delete votes[ok[i]];
        }
      }
      db.set('vote.twentyfourhour',votes);
      return(out);
    }
  };
  return(module);
}