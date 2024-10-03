import React, { useState } from 'react'
import NoteContext from './NotesContext'

const ContextState = ({ children }) => {
    
    const noteInitials = [
        {
          "_id": "66fb9207f649dc388a685107",
          "user": "66e099cd8ad5455a9d077e5e",
          "title": "Mubarak Alam ",
          "description": "this this this  and Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,ducimus dolor magni cupiditate",
          "tag": "personal",
          "createdAt": "2024-10-01T06:09:11.069Z",
          "updatedAt": "2024-10-01T06:09:11.069Z",
          "__v": 0
        },
        {
          "_id": "66fb9228f649dc388a6851190",
          "user": "66e099cd8ad5455a9d077e5e",
          "title": "Ahil Khan",
          "description": "this is a Ahil Khan",
          "tag": "yes",
          "createdAt": "2024-10-01T06:09:44.766Z",
          "updatedAt": "2024-10-01T10:13:21.361Z",
          "__v": 0
        },
        {
            "_id": "66fb9228f649dc388a685109",
            "user": "66e099cd8ad5455a9d077e5e",
            "title": "Ahil Khan",
            "description": "this is a Ahil Khan",
            "tag": "yes",
            "createdAt": "2024-10-01T06:09:44.766Z",
            "updatedAt": "2024-10-01T10:13:21.361Z",
            "__v": 0
        },
        {
            "_id": "66fb9228f649dc388a6851099",
            "user": "66e099cd8ad5455a9d077e5e",
            "title": "Ahil Khan",
            "description": "this is a Ahil Khan",
            "tag": "yes",
            "createdAt": "2024-10-01T06:09:44.766Z",
            "updatedAt": "2024-10-01T10:13:21.361Z",
            "__v": 0
        },
        {
            "_id": "66fb9228f649dc388a6851929",
            "user": "66e099cd8ad5455a9d077e5e",
            "title": "Ahil Khan",
            "description": "this is a Ahil Khan",
            "tag": "yes",
            "createdAt": "2024-10-01T06:09:44.766Z",
            "updatedAt": "2024-10-01T10:13:21.361Z",
            "__v": 0
        },
                
    ]

    const [notes, setNotes] = useState(noteInitials);

    // getNotes
    // const getNotes = async () => {
    //     setNotes(notes)
    // }
    // addnote
    
    const addNote = async (title, description, tag) => {
        console.log("AddNote is Enter the Element");
        const note = {
                "_id": "66fb9228f649dc388a68519019",
                "user": "66e099cd8ad5455a9d077e5e",
                "title": title,
                "description": description,
                "tag": tag,
                "createdAt": "2024-10-01T06:09:44.766Z",
                "updatedAt": "2024-10-01T10:13:21.361Z",
                "__v": 0
            }
        
        setNotes(notes.concat(note));
        console.log(notes);
    }
    // deleteNote
    const deleteNote = async (id) => {
        const newNotes = notes.filter((note) => { return id !== note._id });
        setNotes(newNotes);
        console.log("note id := " + id);
    }
    // editNote
    const editNote = async (id, title, description, tag) => {
        console.log("Enter the editNote :- " + id);
        let newNotes = notes;
        for (let i = 0; i < newNotes.length; i++){
            const element = newNotes[i];
            if (element._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
        console.log(newNotes)
    }


  return (
    <NoteContext.Provider  value={{notes,setNotes,addNote,deleteNote,editNote}}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextState
