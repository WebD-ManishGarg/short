var express=require("express");
var app=express();
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.get("/",function(req,res){
  res.render("index");
});
app.listen("https://git.heroku.com/safe-reef-82060.git",function(err,rak){
  console.log("Server is started");
});
