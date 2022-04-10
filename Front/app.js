// @ts-check
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const userRoute = require("./routers/userRoute");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`The App is Listening on Port ${PORT}`);
});
