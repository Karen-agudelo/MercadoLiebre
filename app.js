const express = require ('express');

const path = require('path');

const app = express ();

app.use(express.static('./public'));

/* app.use('/static', express.static(__dirname + '/public')); */

app.get('/', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/home.html'))
});

app.listen(3000, () => console.log ('servidor corriendo en el puerto 3000'))
