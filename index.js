const express = require("express");
const PORT = 7204;
const db = require('/db');
const app = express();
const router = require('./router');

app.use(express.json());
app.use(router);

db.then(()=> {
    app.listen(PORT, () => {
        console.log(`Servidor levantado correctamente en el puerto ${PORT}`);
    })
}).catch((error) => {
    console.log('Error al levantar el servidor', error.message);
})
