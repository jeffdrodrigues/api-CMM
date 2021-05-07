const authorization = async function (profile) {
  if (profile === 'admin') {
    console.log('Usuário autorizado!');
    return true;
  } else {    
    console.log('Usuário não autorizado!');
    return false;
  }
}

module.exports = { authorization: authorization };