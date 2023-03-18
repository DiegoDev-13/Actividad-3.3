const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config');
const bodyParser = require('body-parser');

const email = require('../servidor/email')
const contacto = require('../servidor/contacto');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/static', express.static('dist')); //Para acceder a un archivo /static/img/imagen.png
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

const oEmail = new email({
    'host': '',
    'port': '',
    'secure': false,
    'auth': {
        'type': 'login',
        'user': '',
        'pass': ''
    }
});

const oContacto = new contacto({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'deliweb-db'
});

//Declaramos nuestra ruta raiz
app.get('/', function (req, res, next) {
    res.send('DiegoMartinez');
});

app.post('/api/contacto', function (req, res, next) {
    // let email ={
    //     from:"deliweb@deliweb.com",
    //     to:"contacto@deliweb.com",
    //     subject:"Nuevo mensaje de usuario",
    //     html:`
    //         <div>
    //         <p>Correo: ${req.body.c}</p>
    //         <p>Nombre: ${req.body.n}</p>
    //         <p>Mensaje: ${req.body.m}</p>
    //         </div>
    //     `
    // };

    oContacto.agregarUsuario(req.body.n,req.body.c,req.body.m);

    oEmail.enviarCorreo(email);
    res.send("ok");
});

app.listen(app.get('port'), () => {
    console.log('Servidor activo!')
});


