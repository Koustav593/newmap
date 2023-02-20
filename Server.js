const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/show", (req, res) => {
  console.log(req.body);
  res.render("about", {
    latitude1: req.body.latitude1,
    longitude1: req.body.longitude1,
    latitude2: req.body.latitude2,
    longitude2: req.body.longitude2,
  });
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT} port`);
});
