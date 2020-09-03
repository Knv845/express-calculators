const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;


 res.send(" the result is " + result);
}),

 app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
 });

 app.post("/bmicalculator", function(req,res){
 var n1 = Number(req.body.weight);
 var n2 = Number(req.body.height);

 var result = (n2*n2) / n1;

 res.send(" this bmi is " + result);

 });


app.listen(3000, function(){
console.log("server has started");
});