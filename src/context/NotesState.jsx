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
    const getNotes = async () => {
        setNotes(notes)
    }
    // addnote
    
    // deleteNote

    // editNote
    
  return (
    <NoteContext.Provider  value={{notes,setNotes,getNotes}}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextState
