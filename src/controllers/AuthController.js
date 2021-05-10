const AuthService = require("../services/AuthService");

exports.post = async (req, res, next) => {
  try {
    const token = await AuthService.generateToken(req.body.user, req.body.pwd);

    if (token) {      
      console.log('Token gerado com sucesso!');
      res.status(200).send({ auth: true, token: token });
    }else{
      console.log('Token não foi gerado!');
      res.status(401).send({ success: false, message: 'Invalid email or password' });
    }
  }
  catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};