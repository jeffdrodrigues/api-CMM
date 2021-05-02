const app = require("./app");
/*
//Sequelize: sincroniza o banco de dados
(async () => {
    const database = require('./DataBase/PostgreeDb');
 
    try {
        const resultado = await database.sync();
        //console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();*/


const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});


