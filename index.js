const express = require('express');
const mongoose = require('mongoose');
const body_parser = require("body-parser");
const path=require('path')
const app = express();

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json());

const ApiRoute = require('./Route/ApiRoute')
app.use(ApiRoute)

const port = 4500;
const dbLink = "mongodb+srv://souvikdb:cSgmsmo8GCvTW05X@cluster0.bsndvpo.mongodb.net/Populate";
mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, () => {
            console.log("Database Connected...");
            console.log(`Server Running http://localhost:${port}`);
        })
    }).catch(err => {
        console.log(err);
    })