
const { Router } = require("express");

const app = Router();

const getCurrecy = require("./controllers/get_currecy_list")
const converCurrecy = require("./controllers/convert_currecy");
const getRate = require("./controllers/get_rate");



app.get("/get_rate", getRate)
app.get("/get_currency", getCurrecy)
app.post("/convert_currecy", converCurrecy)


module.exports = app