const express = require('express');

const {PORT} = require('./config/index');

const app =express();

app.listen(PORT,()=>{
    console.log(`Successfully started : ${PORT}`);
})