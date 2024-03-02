import connectdb from "./Config/DBconfig.js";

// Importer Express
//const express = require('express');
import express from "express";

// Initialiser l'application Express
const app = express();
app.use(express.json({ extended: false }));


connectdb();

import PatientRouter from "./Routes/PatientRoutes.js";
import DoctorRouter from "./Routes/doctor.routes.js";
app.use(DoctorRouter);
app.use(PatientRouter);

//import ConsultationRouter from "./Routes/ConsultationRoutes.js";
//app.use(ConsultationRouter);

import {performActionAtMidnight} from "./Controllers/PatientControllers.js";
performActionAtMidnight();




// Configurer une route simple
app.get('/', (req, res) => {
    res.send('Bienvenue sur votre application Express.js !');
});

// Démarrer le serveur
const port = 3000;
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
