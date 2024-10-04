import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../context/NotesContext'
import NotesItem from './NotesItem'
import AddNote from './AddNote';
import Modal from './Modal';



const Notes = () => {
    const { notes,editNote } = useContext(NoteContext);
    const [showModal, setShowModal] = useState(false);

    const [id, setId] = useState("");
    const [etitle, setEtitle] = useState("");
    const [edescription, setEdescription] = useState("");
    const [etag, setEtag] = useState("");
    
    const showModalBtn = () => {
        setShowModal(true)
    }

    const onClosed = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

    const UpdateNote = (currentNote) => {
        setId(currentNote._id);
        setEtitle(currentNote.title);
        setEdescription(currentNote.description);
        setEtag(currentNote.tag);
    }

    const hadleClickUpdate = (e) => {
        e.preventDefault();
        editNote(id, etitle, edescription, etag);
        setShowModal(false)
    }
  return (
      <div className='pt-20 bg-slate-600'>
          <AddNote />
          <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
              <div className="mb-4 px-6 text-left">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">Edit Note</h3>
                  <form action="" className="space-y-6">
                      <div>
                          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-600">Title</label>
                          <input type="text" value={etitle} onChange={(e)=>setEtitle(e.target.value)} name="title" id="title" className="bg-gray-300 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                      </div>
                      <div>
                          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                          <input type="text" value={edescription} onChange={(e)=>setEdescription(e.target.value)} name="description"  id="description" className="bg-gray-300 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                      </div>
                      <div>
                          <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-600">Tag</label>
                          <input type="text" value={etag} onChange={(e)=>setEtag(e.target.value)} name="tag" id="tag" className="bg-gray-300 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                      </div>
                      <div onClick={onClosed}>
                          <button  className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Cancel Note</button>
                          <button type="submit" onClick={hadleClickUpdate} className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Save Note</button>
                      </div>
                      
                  </form>
              </div>
          </Modal>
          <div className='flex justify-center   py-2 text-slate-50 text-xl font-bold'><h2>Your Notes</h2></div>
          <div className="flex justify-center flex-wrap">
              {
                  notes.map((note) => {
                      return  <div key={note._id} className="shadow-md  rounded-md cursor-pointer  mx-4 my-4 md:w-60 w-48   p-4 bg-white">
                          <NotesItem note={ note} UpdateNote={UpdateNote} showModalBtn={showModalBtn} /></div>
                })
              }
             
        </div>
          
    </div>
  )
}

export default Notes
