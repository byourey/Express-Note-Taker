const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});
