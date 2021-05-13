# ![Cavalo](/imgs/cavalo-removebg-preview_small.jpg?w=127&h=108)  Mangalarga Marchador API

## Sobre o projeto

Esta API tem por objetivo possibilitar o cadastro e pesquisa de dados de cavalos da raça Mangalarga Marchador registrados na Associação Brasileira dos Criadores do Cavalo Mangalarga Marchador (ABCCMM). De forma fácil podemos consultar um animal por um identificador, pelo seu nome ou pelo nome de seu pai ou mãe. Utilizando estes recursos é possível montar uma árvore genealógica completa de um animal da raça, por exemplo.

## Tecnologias
- NodeJS
- Express
- jsonwebtoken
- pg
- sequelize
- Postgreesql
- dotenv-safe

## Organização do código
    ├── api-cmm
    |   ├── node_modules
    |   ├── src
    |       ├── controllers (realiza as validações dos dados que chegam do services)
    |       ├── db          (realiza a conexão com o BD)    
    |       ├── models      (define a estrutura de dados e faz acesso ao DB)
    |       ├── routes      (declaração de todas as rotas da API)
    |       ├── security    (classes para autenticação e autorização)
    |       ├── services    (faz acesso aos dados utilizando o models)
    |       ├── app.js      (orgniza as rotas e facilita o versionamento - obs: versionamento ainda precisa ser aprimorado)
    |       ├── index.js    (arquivo principal da API, responsável pela criação do serviço)
    |   ├── .env            (variáveis de ambiente onde estão armazenados a SECRET 
    |   ├── .env.example     e o tempo de expiração para geração do TOKEN)
    |   ├── package.json    (possui as informações do projeto, bem como suas dependências)

## Definições
1. #### Tempo de expiração do token
       15 minutos (coloquei um tempo menor para facilitar validações de expiração do mesmo)

2. #### Usuários utilizados para autenticação e autorização estão fixos no fontes apenas para testes

      Usuário comum: Possui acesso para geração de token e rotas Get
   
       user: user@gmail.com
       pwd: 123


      Usuário administrador: Possui os acessos de um usuário comum e também acesso a rotas de CRUD (POST, PUT, DELETE)
     
       user: admin@gmail.com
       pwd: 123

## Documentação
Swagger: [Mangalarga Marchador API](https://app.swaggerhub.com/apis-docs/jeffDuarte/MangalargaMarchador/v1) 