import React from 'react'
import NoteContext from './NotesContext'

const ContextState = ({ children }) => {
    
    const noteInitials = [
        {
          "_id": "66fb9207f649dc388a685107",
          "user": "66e099cd8ad5455a9d077e5e",
          "title": "Mubarak Alam ",
          "description": "this this this",
          "tag": "personal",
          "createdAt": "2024-10-01T06:09:11.069Z",
          "updatedAt": "2024-10-01T06:09:11.069Z",
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
          "_id": "66fb98a2f649dc388a68516d",
          "user": "66e099cd8ad5455a9d077e5e",
          "title": "this this yes update yes update",
          "description": "Ahit khan my name is khan",
          "tag": "yes ok",
          "createdAt": "2024-10-01T06:37:22.620Z",
          "updatedAt": "2024-10-01T06:38:22.401Z",
          "__v": 0
        }
    ]

    
  return (
    <NoteContext.Provider  value={{}}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextState
