const router = require("express").Router();
const fs = require("fs");
const dbData = require("../db/db.json");

const uuid = require("uuid");
const { notStrictEqual } = require("assert");


// Get Data
router.get("/api/notes", async (req, res) => {
    try {
        res.json(dbData);

    } catch (err) {
        res.status(500).end();
     }
});

// Creating a new note
router.post('/api/notes', (req, res) => {
    let noteId = uuid.v4();
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text,

    };

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), err => {
            if (err) throw err;
            res.send(dbData)
        });
    });
});

module.exports = router;




