const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express(); 

const port = 8080;

//Usando template engine.
app.set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))


app.use(express.static('public'))
    .use(express.urlencoded({ extended: true }))
    .use(routes)

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})