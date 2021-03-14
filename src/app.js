const express = require('express');
const app = express();

// Normalizar rutas
const path = require('path');

// Motor de plantillas
app.set('view engine', 'ejs'); // Motor que utilizamos
app.set('views', path.join(__dirname, '/views')); // Donde debe buscar las views

// Settings and Port
const port = process.env.PORT || 3000;

// middlewares ------------------------------------------------- >>


// Stactic Files
app.use(express.static(path.join(__dirname, '../public'))); 

// Routes ------------------------------------------------------ >>
app.use(require('./routes/index-routes'));



// Page 404
app.use((req, res) => {
    res.status(404).render('404');
}); 




// Starting Server ----------------------------------------------- >>
app.listen (port, () => {
    console.log(`Server in port: ${port}`);
});