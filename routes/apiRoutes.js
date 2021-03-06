const router = require("express").Router();
const fs = require("fs");
const datadb = require("../db/db.json");

const uuid = require("uuid");


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if(err) throw err;
        const parsedNotes = JSON.parse(data);
        res.json(parsedNotes);
    });
});

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
            res.send(notes)
        });
    });
});

module.exports = router;




