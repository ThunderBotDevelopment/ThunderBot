class GuildApi {
  constructor(db) {
    this.database = db;
  }
  getGuild(guild) {
    return new BaseGuild(this.database,guild);
  }
  getSetting(setting) {
    return new BaseSetting(this.database,setting);
  }
  allGuilds() {
    return this.database.get('guildsettings');
  }
}
class BaseGuild {
  constructor(db,guild) {
    this.database = db;
    this.guild = guild;
  }
  set(setting,value) {
    return this.database.set('guildsettings.'+this.guild+'.'+setting,value);
  }
  get(setting) {
    if (this.database.get('defaultsettings') == null) {
      this.database.set('defaultsettings',["blank"]);
    }
    var defaults = this.database.get('defaultsettings');
    if (!defaults.includes(this.guild)) {
      this.database.push('defaultsettings',this.guild);
      require('./defaults.js')(this.guild);
    }
    return this.database.get('guildsettings.'+this.guild+'.'+setting);
  }
  basicGet(setting) {
    return this.database.get('guildsettings.'+this.guild+'.'+setting);
  }
  loadDefaults() {
    require('./defaults.js')(this.guild);
  }
  getAll() {
    return this.database.get('guildsettings.'+this.guild);
  }
}
class BaseSetting {
  constructor(db,setting) {
    this.database = db;
    this.setting = setting;
  }
  set(guild,value) {
    return this.database.set('guildsettings.'+guild+'.'+this.setting,value);
  }
  get(guild) {
    return this.database.get('guildsettings.'+guild+'.'+this.setting);
  }
}
module.exports = {
  GuildApi: GuildApi,
  BaseGuild: BaseGuild,
  BaseSetting: BaseSetting
};