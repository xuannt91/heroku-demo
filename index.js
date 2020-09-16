var express = require("express");
var app = express();
var aasa = app.readFileSync(__dirname + '/static/apple-app-site-association');
app.set("view engine","ejs");
app.set("views","./views");
app.listen(process.env.PORT || 3000);

app.get('/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/json');
     res.status(200).send(aasa);
});
app.get("/",function(req,res){
  res.render("trangchu");
});
