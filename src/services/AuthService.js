const security = require('../security/generateJWT');

module.exports = class AuthService {
  static async generateToken(user, pwd) {
    return await security.generateToken(user, pwd);
  }
}