const jwt = require('jsonwebtoken');

const generateToken = async function(user, pwd) {
    try {

      const profile = validateUser(user, pwd);
      
      if (profile !== null){
        const token = jwt.sign(
          {
            user,
            profile
          },
          process.env.SECRET,
          {            
            expiresIn: process.env.EXPIRESIN * 60 //tempo de expiração do token
          });

        return token;
      }

      console.log('Login inválido!');

    } catch (error) {
      console.log(`Authentication error: ${error}`);
    }
  }


  function validateUser(user, pwd)
  {
    if (user === 'admin@gmail.com' && pwd === '123') {
      profile = 'admin';
    }else if (user === 'user@gmail.com' && pwd === '123'){
      profile = 'user';
    }else{
      profile = null;
    }

    console.log('Perfil do usuário: '+ profile);

    return profile;
  }

  module.exports = {generateToken: generateToken};