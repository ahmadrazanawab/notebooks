import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/NotesContext'
import NotesItem from './NotesItem'
import AddNote from './AddNote';

const Notes = () => {
    
    const { notes } = useContext(NoteContext);
    
    

  return (
      <div className='pt-20 bg-slate-600'>
          <AddNote/>
          <div className='flex justify-center   py-2 text-slate-50 text-xl font-bold'><h2>Your Notes</h2></div>
          <div className="flex justify-center flex-wrap">
              {
                  notes.map((note) => {
                      return  <div key={note._id} className="shadow-md  rounded-md cursor-pointer  mx-4 my-4 md:w-60 w-48   p-4 bg-white">
                          <NotesItem note={ note} /></div>
                })
              }
             
        </div>
          
    </div>
  )
}

export default Notes
