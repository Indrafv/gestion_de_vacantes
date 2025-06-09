const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users route is working!');
})

router.get('/101', (req, res) => {
    res.send('User route 101 is working!');
})

// Exportar el router para usarlo en otros archivos
module.exports = router;