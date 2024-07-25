const mongoose = require('mongoose');
const { create } = require('./users.model');

const notesSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: String,
        default: new Date().toISOString()
    }
});

const Note = mongoose.model('Notes', notesSchema);
module.exports = Note;
