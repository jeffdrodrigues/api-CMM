const app = require("./app");

//Sequelize: sincroniza o banco de dados
(async () => {
  const db = require('./db/PostgreeDb');

  try {
    const resultado = await db.sync();
    //console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();


const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});


