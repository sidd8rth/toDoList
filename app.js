const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded ({
  extended: true
}));

let items = ["Buy Food", "Eat Food", "Cook Food"]
let workItems = []

app.get("/", function(req, res) {

  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    listItems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work")
  }else{
    items.push(item)
    res.redirect("/");
  }
})

app.get("/work", function(req,res){
  res.render("list", {
    listTitle: "Work",
    listItems: workItems
  })
})

app.get("/about", function(req,res){
  res.render("about.ejs")
})

app.listen(3000, function(req, res) {
  console.log("Server started");
})
