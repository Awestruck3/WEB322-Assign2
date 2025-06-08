/********************************************************************************
* WEB322 – Assignment 02
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Scott Denby Student ID: 118823244 Date: 06/07/25
*
********************************************************************************/

const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
const projectData = require("./modules/projects");


projectData.initialize();


app.get('/', (req, res) =>{
    res.send("Assignment 2: Scott Denby - 118823244");
});

app.get('/solutions/projects', (req, res) =>{
    //let displayProjs = projectData.getAllProjects();
    projectData.getAllProjects().then((reply) => {
        res.send(reply);
    })
    
});

app.get('/solutions/projects/id-demo', (req, res) =>{
    projectData.getProjectById(9).then((reply) =>{
        res.send(reply);
    })
    .catch((err) =>{
        res.send(err);
    })
    //res.send(projectData.getProjectById(9));
});

app.get('/solutions/projects/sector-demo', (req, res) =>{
    projectData.getProjectBySector("EleCT").then((reply) =>{
        res.send(reply);
    })
    .catch((err) =>{
        res.send(err);
    })
});

app.listen(HTTP_PORT, () => console.log("Server is listening"));