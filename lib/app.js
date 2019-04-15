const express = require('express');
const app = express();
const profilesRoutes = require('./routes/profilesRoutes');

app.use(express.json());

app.use('/profiles', profilesRoutes);

module.exports = app;
