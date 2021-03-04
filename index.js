const express = require("express");
const path = require("path");
const routes = require("./routes");

// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

