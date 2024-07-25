const Note = require('../models/notes.model');

async function createNote(req, res) {
    try {
        const { text } = req.body;
        const newNote = new Note({
            text,
            user: req.usertoken,
        });

        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getNote(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        } else {
            res.status(200).json(note);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getAllNotes(req, res) {
    //Get All Notes
}

async function updateNote(req, res) {
    //Update Note
}

async function deleteNote(req, res) {
    //Delete Note
}

module.exports = {
    createNote,
    getNote,
    getAllNotes,
    updateNote,
    deleteNote
};
