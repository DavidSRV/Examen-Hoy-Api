const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = ('3000');

//Middleware
app.use(morgan('dev')); // Comando interno de morgan que nos permite usar el paquete...
app.use(express.json()); // Con esto convertiremos todo lo que cojamos a un lenguaje JS
app.use(cors()); // Con esta podemos ingresar a las nodos del html...


// Levantamiento de routers al iniciar el servidor

app.use(require('./Routers/Routers'));


app.listen(port, () => {
    console.log(`Corriendo por el puerto ${port}`)
})