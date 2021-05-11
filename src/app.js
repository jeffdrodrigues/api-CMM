const express = require("express");
const app = express();

//Content Types suportados
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Rotas
const indexRoute = require("./routes/index");
const horseRoute = require("./routes/horse");
const authRoute = require("./routes/auth");

app.use("/", indexRoute);
app.use("/v1", indexRoute);
app.use("/v1/auth", authRoute);
app.use("/v1/horses", horseRoute);

module.exports = app;
