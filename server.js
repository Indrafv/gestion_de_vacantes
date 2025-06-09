
// Requerir Express y crear aplicación

const express = require ('express');
const app = express();

// Ruta para probar el servidor

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Escuchar en el puerto 3000

app.listen(3000, () =>{
console.log('Server is running on port 3000');

})