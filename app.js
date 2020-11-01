var express = require('express'),
app = express();

app.set('view engine','pug')
app.get('/',(req,res)=>{
    res.render('site')
})

app.get('/population',(req,res)=>{
res.render('population')
})
app.listen(3000,()=> console.log('Site started'))