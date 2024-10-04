const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema(
{
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require: true,
    },
    tag: {
        type: String,
        default:"General",
    }
},
    {
        timestamps:true
    }
)

const Notes = mongoose.model("note",NotesSchema);

module.exports = Notes;

