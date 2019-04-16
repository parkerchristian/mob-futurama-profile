const express = require('express');
const app = express();
const profilesRoutes = require('./routes/profilesRoutes');
// const futuramaAPI = require('./services/futuramaApi');

app.use(express.json());
// app.use()
app.use('/profiles', profilesRoutes);


module.exports = app;
