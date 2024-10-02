import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/NotesContext'
import NotesItem from './NotesItem'

const Notes = () => {
    
    const { notes } = useContext(NoteContext);
    
    

  return (
      <div>
          <div className='flex justify-center  bg-slate-600 pt-20 text-slate-50 text-xl font-bold'><h2>Your Notes</h2></div>
          <div className="flex justify-center flex-wrap  bg-slate-600">
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
