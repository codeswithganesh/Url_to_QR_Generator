const path=require('path');

const express=require('express');
const app=express();


const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));;

app.use(express.static(path.join(__dirname, 'public')));

const routes=require('./controller/logic');
const ServerlessHttp = require('serverless-http');


app.use("/.netlify/functions/api",routes);
module.exports.handler=ServerlessHttp(app);