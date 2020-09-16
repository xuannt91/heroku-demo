var express = require("express");
var app = express();
app.set("view engine","ejs");
app.set("views","./views");
app.listen(process.env.PORT || 3000);

app.get('/apple-app-site-association');
app.get( '/duck.png', function( req, res ) {

  fs.readFile( 'duck.png'', function( err, data ) {
    if ( err ) {
      console.log( err );
      return;
    }
    res.write( data );
    return res.end();
  });
});
app.get("/",function(req,res){
  res.render("trangchu");
});
