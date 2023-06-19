const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    completed: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('Tasks', tasksSchema)
