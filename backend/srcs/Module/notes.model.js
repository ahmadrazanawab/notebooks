const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
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

