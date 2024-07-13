const express = require("express");
const bodyParser = require("body-parser");
const serverless=require('serverless-http')
const router=express.Router();
const date = require("./date");
const Date= require(__dirname+"/date.js");
const app = express();

let items = ["Buy Food", "Eat Food", "Cook Food"];
let workItems = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// this is for the home page

app.get("/", function (req, res) {

  // we are accessing the getDate function in the app file 
  let day = date.getDate();


  res.render("list", {
    ListTitle: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  let Item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(Item);
    res.redirect("work");
  } else {
    items.push(Item);
    res.redirect("/");
  }
});

// this is for the work page

app.get("/work", function (req, res) {
  res.render("list", {
    ListTitle: "Work",
    newListItems: workItems,
  });
});

app.post("/work", function (req, res) {
  let Item = req.body.newItem;
  workItems.push(Item);
  res, redirect("/work");
});

// app.listen(3000, function () {
//   console.log("server is running at 3000");
// });

app.use('/.netlify/function/app',router);
module.exports.handler=serverless(app);