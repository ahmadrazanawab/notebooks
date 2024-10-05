const express = require("express");
const notes = express.Router();
const fetchUser = require("../middleware/fetchMiddleware");
const Notes = require("../Module/notes.model");
const { validationResult, body } = require("express-validator");


// fetch all notes 
notes.get('/fechallnotes', fetchUser, async (req, res) => {
    try {
        let note = await Notes.find({ user: req.user.id });
        res.send(note);
    } catch (error) {
        console.log(error.message)
        res.status(501).send("Something went to wrong");
    }
   
})

// add note 
notes.post('/addNote',
    [
        body('title', 'title must be atleast 3 characters').isLength({min:3}),
        body('description', 'Description must be atleast 6 characters').isLength({min:6})
    ],
    fetchUser, async (req, res) => {
        try {
            let success = true;
        const {title,description,tag} = req.body;
        let result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(404).json({success,error:result.array()}); 
        }
            
        const note =new Notes({
            title, description, tag, user: req.user.id
        });
            
            const saveNotes = await note.save();

            res.json({success:true,saveNotes});


    } catch (error) {
        console.log(error.message)
        res.status(501).send("Something went to wrong");
    }
   
})
// notes - 3 update note 
notes.put('/updatenote/:id',
    fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        let newNote = {};
        if (title) { newNote.title = title }
        if (description) { newNote.description = title }
        if (tag) { newNote.tag = tag }
        
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).json("Not Found") };

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }

       
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

        res.json({"Success":"Note has been Updated",note});
        
    } catch (error) {
        console.log(error.message)
        res.status(501).send("Something went to wrong");
    }
   
})

// add delete note 
notes.delete('/deleteNote/:id',
    fetchUser, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).json("Not Found") };

        // if (note.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }


        note = await Notes.findByIdAndDelete(req.params.id);

        res.json({ "Success": "Note has been deleted", note: note });
        
    } catch (error) {
        console.log(error.message)
        res.status(501).send("Something went to wrong");
    }
   
})

module.exports = notes;