const { render } = require('ejs');
var express = require('express');
var app = express();


//static files for link css,js,images
app.use(express.static('assets'));
app.use('/css',express.static(__dirname + 'assets/css'));
app.use('/js',express.static(__dirname + 'assets/js'));
app.use('/img',express.static(__dirname + 'assets/img'));

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

let planguages = [];

app.get('/',function(req,res){
    // res.sendFile(__dirname + '/views/index.html');
    res.render('home',{plNames:planguages});
});
app.get('/about',function(req,res){
    // res.sendFile(__dirname + '/views/index.html');
    res.render('home',{});
});

app.post('',function(req,res){
    const planguge = req.body.planguge;
    // console.log(planguge);
    planguages.push(planguge);
    res.redirect("/");
});


app.listen(3030,function(){
    console.log("server connected....")
})