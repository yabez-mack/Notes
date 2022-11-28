var mongoose = require('mongoose')

var noteSchema = mongoose.Schema({
    name: String,
}, {timestamps:{createdAt:true,updatedAt:true}},{ collection: "notes" })

module.exports = mongoose.model('Notes', noteSchema)
