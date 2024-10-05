import React, { useState } from 'react'
import NoteContext from './NotesContext'

const ContextState = ({ children }) => {

    const host = "http://localhost:7000";
    const noteInitials = [];
    const [notes, setNotes] = useState(noteInitials);

    // getNotes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/v1/notes/fechallnotes`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
          }  
        })
        const json = await response.json();
        setNotes(json);
        console.log(json);
    }
    // addnote 
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/v1/notes/addNote`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
        })
        const note = await response.json();
        setNotes(notes.concat(note));
        console.log(note);
    }


    // deleteNote
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/v1/notes/deleteNote/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
            }
        })

        const newNotes = notes.filter((note) => { return id !== note._id });
        setNotes(newNotes);
        console.log("note id := " + id);
    }



    // editNote
    const editNote = async (id, title, description, tag) => {
        console.log("Enter the editNote :- " + id);
        const response = await fetch(`${host}/api/v1/notes/updatenote/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
        })
        const note = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes));
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
    <NoteContext.Provider  value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
      {children}
    </NoteContext.Provider>
  )
}

export default ContextState
