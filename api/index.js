const cors = require("cors")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(require("./routes/ruta.js"))


app.listen(5001,
console.log(">>Console: server listenning at port 5001 "))