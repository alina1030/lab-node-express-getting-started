var express = require('express')

var app=express()

app.get('/',function(req,res){
    res.send("HELLO WORLD")
})
// app.listen(8000,()=>console.log('server is running'))

app.get('/about',function(req,res){
    res.send("About")
})
app.listen(8000,()=>console.log('server is running'))