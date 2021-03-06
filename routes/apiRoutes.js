const router = require("express").Router();
const fs = require("fs");

const uuid = require("uuid");

const datadb = require("../db/db.json");

router.get('/api/notes', (req, res) => {
    try {
        res.json(datadb);
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router;




