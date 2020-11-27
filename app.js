// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();
const mainRouter = require('./router/main');
const heroesRouter = require('./router/heroes');


// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


// Ruta Raíz / ➝ Home
app.use('/', mainRouter);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use('/heroes', heroesRouter);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', heroesRouter);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.use('/heroes/bio/:id/:ok', heroesRouter );

// Ruta Créditos
app.use('/creditos', mainRouter);

// Ruta... ¿Pára qué sirve esto?
app.use('*', mainRouter); 