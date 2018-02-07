var exp=require('express');
var app=exp();
var bodyParser=require('body-parser')
var session=require('express-session')
var routes=require('./routes/routes.js')
//var MongoClient = require('mongodb').MongoClient;
//const url = "mongodb://localhost:27017/";




//
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//
app.use(session({secret:"secret",resave:true,saveUninitialized:false}));

app.set('view engine','ejs');

app.get('/',routes.homepage);

app.get('/login',routes.loginpage);

app.get('/about', function(req, res) {
    res.render('about.ejs');
});

app.get('/signup', function(req, res) {
    res.render('signup.ejs');
});


app.post('/insert', routes.signup) 

app.get('/showuser', routes.showdoc) 


/*app.post('/insert', function(req, res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
       var dbo = db.db("user_db");
        dbo.collection("signup_info").insertOne(req.body, function(err, res) {
          if (err) throw err;
          db.close();
        });
      }); 

      //console.log(req.body)
    res.send(req.body)
  })*/

var port=process.env.PORT||8000;
var server=app.listen(port,function(req,res){
    console.log('server is running on port'+port)
});