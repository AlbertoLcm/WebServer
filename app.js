const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT; 

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('Public')); //le mandamos el path

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Luis Alberto',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Luis Alberto',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Luis Alberto',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.render('404');
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/Public/generic.html'); //construimos el path con el dirname
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});