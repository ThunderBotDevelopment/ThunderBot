const db = require('quick.db');
const { Guild, Client } = require('discord.js');
class User {
  constructor (id) {
    this.id = id;
  }
  get premium () {
    console.log(db.get('premium'), "get premium"); // ROP
    if (db.get('premium').includes(this.id)) {
      if (db.get('premiumExpiration.' + this.id) > Date.now() || db.get('premiumExpiration.' + this.id) == "Infinity") {
        return true;
      } else {
        console.log(db.get('premium')); // ROP
        db.set('premium', db.get('premium').splice(db.get('premium').indexOf(this.id), 1)); // It might seem complicated, but it's really just deleting the premium entry because it is expired
        db.delete('premiumExpiration.' + this.id);
        console.log(db.get('premium')); // ROP
        return false;
      }
    } else {
      return false;
    }
  }
  get premiumExpiration () {
    console.log(db.get('premium')); // ROP
    if (db.get('premium').includes(this.id)) {
      if (db.get('premiumExpiration.' + this.id) > Date.now() || db.get('premiumExpiration.' + this.id) == "Infinity") {
        return db.get('premiumExpiration.' + this.id);
      } else {
        db.set('premium', db.get('premium').splice(db.get('premium').indexOf(this.id), 1)); // It might seem complicated, but it's really just deleting the premium entry because it is expired
        db.delete('premiumExpiration.' + this.id);
        return false;
      }
    } else {
      return false;
    }
  }
  get hasPremium () {
    console.log(db.get('premium')); // ROP
    if (db.get('premium').includes(this.id)) {
      if (db.get('premiumExpiration.' + this.id) > Date.now() || db.get('premiumExpiration.' + this.id) == "Infinity") {
        return true;
      } else {
        db.set('premium', db.get('premium').splice(db.get('premium').indexOf(this.id), 1)); // It might seem complicated, but it's really just deleting the premium entry because it is expired
        db.delete('premiumExpiration.' + this.id);
        return false;
      }
    } else {
      return false;
    }
  }
  setPremium (expirationTime) {
    console.log(db.get('premium'), 'setting premium'); // ROP
    if (db.get('premium').includes(this.id)) {
      db.set('premiumExpiration.' + this.id, expirationTime);
      return true;
    } else {
      db.push('premium', this.id);
      db.set('premiumExpiration.' + this.id, expirationTime);
      return true;
    }
  }
  removePremium (expirationTime) {
    if (db.get('premium').includes(this.id) && Object.keys(db.get('premiumExpiration')).includes(this.id)) {
      db.delete('premiumExpiration.' + this.id);
      db.set('premium', db.get('premium').splice(db.get('premium').indexOf(this.id), 1)); // It might seem complicated, but it's really just deleting the premium entry
      return true;
    } else {
      return false;
    }
  }
  addPremium (amountOfTime) {
    if (db.get('premium').includes(this.id)) {
      if (db.get('premiumExpiration.' + this.id) < Date.now()) {
        var cur = Date.now();
      } else {
        var cur = db.get('premiumExpiration.' + this.id) || Date.now();
      }
      db.set('premiumExpiration.' + this.id, amountOfTime + cur);
      return true;
    } else {
      db.push('premium', this.id);
      db.set('premiumExpiration.' + this.id, amountOfTime + Date.now());
      return true;
    }
  }
}
class PremiumGuild {
  constructor (guild, client) {
    if (guild instanceof Guild) {
      this.id = guild.ownerID;
    } else {
      if (client instanceof Client) {
        if (client.guilds.cache.get(guild)) {
          this.id = client.guilds.cache.get(guild).ownerID;
        } else {
          throw new Error('You must pass either a guild object or a guildID and a client object.');
          return false;
        }
      } else {
        throw new Error('You must pass either a guild object or a guildID and a client object.');
        return false;
      }
    }
  }
  get owner () {
    return new User(this.id);
  }
  get premium () {
    if (db.get('premium').includes(this.id)) {
      if (db.get('premiumExpiration.' + this.id) > Date.now()) {
        return true;
      } else {
        db.set('premium', db.get('premium').splice(db.get('premium').indexOf(this.id), 0)); // It might seem complicated, but it's really just deleting the premium entry because it is expired
        db.delete('premiumExpiration.' + this.id);
        return false;
      }
    } else {
      return false;
    }
  }
  get premiumExpiration () {
    if (db.get('premium').includes(this.id)) {
      if (db.get('premiumExpiration.' + this.id) > Date.now()) {
        return db.get('premiumExpiration.' + this.id);
      } else {
        db.set('premium', db.get('premium').splice(db.get('premium').indexOf(this.id), 0)); // It might seem complicated, but it's really just deleting the premium entry because it is expired
        db.delete('premiumExpiration.' + this.id);
        return false;
      }
    } else {
      return false;
    }
  }
  get hasPremium () {
    if (db.get('premium').includes(this.id)) {
      if (db.get('premiumExpiration.' + this.id) > Date.now()) {
        return true;
      } else {
        db.set('premium', db.get('premium').splice(db.get('premium').indexOf(this.id), 0)); // It might seem complicated, but it's really just deleting the premium entry because it is expired
        db.delete('premiumExpiration.' + this.id);
        return false;
      }
    } else {
      return false;
    }
  }
}
module.exports = {
  Guild: PremiumGuild,
  User: User
}