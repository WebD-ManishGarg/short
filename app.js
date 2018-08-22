var express=require("express");
var app=express();
const port=process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.get("/",function(req,res){
  res.render("index");
});
app.listen(port,function(err,rak){
  console.log("Server is started");
});
