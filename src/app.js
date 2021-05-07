const express = require("express");
const app = express();

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
app.use("/horses", horseRoute);

module.exports = app;
