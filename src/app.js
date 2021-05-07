const express = require("express");
const app = express();
const auth = require('./controllers/AuthController');

//Rotas
const indexRoute = require("./routes/index");
const horseRoute = require("./routes/horse");
const authRoute = require("./routes/auth");

//Content Types suportados
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/", indexRoute);
app.use("/auth", authRoute);

//Adiciono o Middleware para autenticar apenas as rotas abaixo
app.use(auth.authenticateJWT);

app.use("/horses", horseRoute);

module.exports = app;
