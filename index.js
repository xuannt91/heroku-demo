var express = require("express");
var fs = require("fs");
var app = express();
app.set("view engine","ejs");
app.set("views","./views");
app.listen(process.env.PORT || 3000);

var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/json');
     res.status(200).send(aasa);
});
app.get("/",function(req,res){
  res.render("trangchu");
});
