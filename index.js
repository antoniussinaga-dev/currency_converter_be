
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import package cors
const router = require("./modules/routers");

const app = express();

// Gunakan bodyParser untuk menangani data dari body request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up CORS middleware
app.use(cors());

// Gunakan router pada rute "/api/v1"
app.use("/api/v1", router);

app.listen(3001, () => {
  console.log("Application Running On Port", 3001);
});



