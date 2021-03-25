const express = require('express');
const app = express();
//
app.use(express.json())
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', "GET , POST ,PUT ,PATCH , UPDATE, DELETE , OPTIONS");
    res.setHeader('Access-Control-Allow-Headers', "Content-Type , Authorization");

})

//
module.exports = app