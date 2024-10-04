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

module.exports = notes;