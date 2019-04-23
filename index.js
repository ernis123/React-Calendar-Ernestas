var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'server/views'));

app.use(express.static(path.join(__dirname , 'public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('*',function(req,res){
  res.redirect('/');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,(err)=>{
    console.log('app running on:',PORT);
});
