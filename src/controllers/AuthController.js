const AuthService = require("../services/AuthService");

exports.post = async (req, res, next) => {
  try {
    const token = await AuthService.generateToken(req.body.user, req.body.pwd);

    if (token) {      
      console.log('Token gerado com sucesso!');
      res.status(200).send({ auth: true, token: token });
    }else{
      console.log('Token não foi gerado!');
      res.status(500).send({ success: false, message: 'Login inválido!' });
    }
  }
  catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const decoded = await AuthService.verifyJWT(token);

      if (decoded != null) {
        //se tudo correr bem, salva a requisição para o uso em outras rotas
        req.decoded = decoded;
        next();
        
      } else {
        res.status(403).send({ success: false, message: 'Falha na autenticação!' });
      }

    } else {
      res.status(403).send({ success: false, message: 'Não foi informado um token!' });
    }
  }
  catch (error) {
    res.status(500).json({ success: false, message: error });
  }  
}