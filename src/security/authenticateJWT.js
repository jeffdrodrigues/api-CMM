const jwt = require('jsonwebtoken');


module.exports = function(req, res, next){
  const authHeader = req.headers.authorization;

  try {
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
          res.status(403).send({ success: false, message: 'Falha na autenticação!' });
        } else {
          //se tudo correr bem, salva a requisição para o uso em outras rotas

          console.log('user: ' + decoded.user);
          console.log('profile: ' + decoded.profile);

          req.decoded = decoded;
          next();
        }
      });

    } else {
      res.status(403).send({ success: false, message: 'Não foi informado um token!' });
    }
  }
  catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}