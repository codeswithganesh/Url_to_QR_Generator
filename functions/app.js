const path=require('path');
const serverless=require('serverless-http');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));;

app.use(express.static(path.join(__dirname,'..', 'public')));

const routes=require('./controller/logic');


app.use("/.netlify/functions/api",routes);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','index.html'));
})

module.exports=app;
module.exports.handler=serverless(app);