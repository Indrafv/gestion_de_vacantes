
// Requerir Express y crear aplicación

const express = require ('express');
const app = express();

// Ruta principal cuando se visita localhost:3000
app.get('/', (req, res) => {
    res.send('Root Route Working');
})

// Requerir rutas de usuarios y autenticación
const usersRoutes = require('./src/routes/users');
const authRoutes = require('./src/routes/auth');


// Usar Rutas

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);


// Escuchar en el puerto 3000

app.listen(3000, () =>{
console.log('Server is running on port 3000');

})