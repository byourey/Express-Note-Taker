const router = require("express").Router();
const fs = require("fs");
const datadb = require("../db/db.json");

const uuid = require("uuid");


// Get dbData
router.get("/api/notes", async (req, res) => {
    try {
        res.json(datadb);

    } catch (err) {
        res.status(500).end();
     }
});

// Creating a new note
router.post('/api/notes', (req, res) => {
    let newNoteId = uuid.v4();
    let newNote = {
        id: newNoteId,
        title: req.body.title,
        text: req.body.text

    };

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const getNewNotes = JSON.parse(data);
        getNewNotes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(getNewNotes), err => {
            if (err) throw err;
            res.send(datadb)
        });
    });
});

module.exports = router;




