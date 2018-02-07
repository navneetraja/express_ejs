exports.loginpage=function(req,res){
  ;
    console.log("render login page");
    res.render("login.ejs",{});
}


exports.homepage=function(req,res){
    console.log("render to home page");
    res.render("home.ejs",{});
}

exports.signup=function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
       var dbo = db.db("user_db");
        dbo.collection("signup_info").insertOne(req.body, function(err, res) {
          if (err) throw err;
          db.close();
        });
      }); 

      console.log(req.body)
      res.render("home.ejs",{});
  }

  exports.showdoc=function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
       var dbo = db.db("user_db");
        dbo.collection("signup_info").find({}).toArray(function(err, docs) {
          if (err) throw err;
          res.render('showuser.ejs', {'docs':docs});
          db.close();
        });
      }); 

  }


