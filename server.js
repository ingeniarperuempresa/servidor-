const express = require('express');
const axios = require('axios');
const app = express();

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('API de PideYA - Visita /consulta_todo para consultar la información.');
});

app.get('/consulta_todo', async (req, res) => {
    try {
        const response = await axios.get('https://sheetdb.io/api/v1/h6w2vg18zl5v0');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al consultar SheetDB' });
    }
});

// Exportar la aplicación para Vercel
module.exports = app;
