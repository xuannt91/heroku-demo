var express = require("express");
var app = express();
app.set("view engine","ejs");
app.set("views","./views");
app.listen(process.env.PORT || 3000);

app.get("/apple-app-site-association", (req, res) => {
  res.redirect(301, "/apple-app-site-association");
});
app.get("/",function(req,res){
  res.render("trangchu");
});
