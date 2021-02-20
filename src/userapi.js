class UserApi {
  constructor(db) {
    this.database = db;
  }
  getUser(user) {
    return new BaseUser(this.database,user);
  }
  getSetting(setting) {
    return new BaseSetting(this.database,setting);
  }
  allUsers() {
    return this.database.get('usersettings');
  }
}
class BaseUser {
  constructor(db,user) {
    this.database = db;
    this.user = user;
  }
  set(setting,value) {
    return this.database.set('usersettings.'+this.user+'.'+setting,value);
  }
  get(setting) {
    return this.database.get('usersettings.'+this.user+'.'+setting);
  }
  getAll() {
    return this.database.get('usersettings.'+this.user) || {};
  }
}
class BaseSetting {
  constructor(db,setting) {
    this.database = db;
    this.setting = setting;
  }
  set(user,value) {
    return this.database.set('usersettings.'+user+'.'+this.setting,value);
  }
  get(user) {
    return this.database.get('usersettings.'+user+'.'+this.setting);
  }
}
module.exports = {
  UserApi: UserApi,
  BaseUser: BaseUser,
  BaseSetting: BaseSetting
};