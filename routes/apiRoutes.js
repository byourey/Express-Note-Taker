const router = require("express").Router();
const fs = require("fs");
const dbData = require("../db/db.json");

const uuid = require("uuid");


// Get Data
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const parsedNotes = JSON.parse(data);
        res.json(parsedNotes);
    });
});

// Creating a new note
router.post('/api/notes', (req, res) => {
    let newNote = {
        id: uuid4(),
        title: req.body.title,
        text: req.body.text

    };

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const getNewNotes = JSON.parse(data);
        getNewNotes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(getNewNotes), err => {
            if (err) throw err;
            res.send(dbData)
        });
    });
});

module.exports = router;




