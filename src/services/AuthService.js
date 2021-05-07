const jwt = require('jsonwebtoken');


module.exports = class AuthService {
  static async generateToken(user, pwd) {
    try {
      if (user === 'jefferson.eti@gmail.com' && pwd === '123') {
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign(
          {
            id
          },
          process.env.SECRET,
          {
            expiresIn: 600 // expira em 10 min
          });

        return token;
      }

      console.log('Login inválido!');

    } catch (error) {
      console.log(`Authentication error: ${error}`);
    }
  }

  static async verifyJWT(token) {    
    var result;

    if (token) { 
      jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
          result = null;
        } else{
          //se tudo correr bem, salva a requisição para o uso em outras rotas
          result = decoded;
        }
    });      
    }
    
    return result;
  }
}
