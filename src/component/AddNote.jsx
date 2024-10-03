import React, { useContext, useState } from 'react'
import NoteContext from '../context/NotesContext'
const AddNote = () => {
    const { addNote } = useContext(NoteContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    
    const handleClick = (e) => {
        e.preventDefault();
        addNote(title, description, tag);
        setTitle("");
        setDescription("");
        setTag("");
    }

  return (
    <div className="bg-slate-600">
              <form action="" onSubmit={handleClick}>
                  <div className="flex flex-col md:mx-44 mx-6 my-2">
                        <label htmlFor="title" className="text-xl font-bold text-slate-200">Title </label>
                        <input type="text" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" value={title} onChange={(e)=>setTitle(e.target.value)} name="title" id="title" placeholder='Enter your title'/>  
                  </div>
                  <div className="flex flex-col md:mx-44 mx-6 my-2">
                        <label htmlFor="description" className="text-xl font-bold text-slate-200"> Description</label>
                        <input type="text" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" value={description}  onChange={(e)=>setDescription(e.target.value)} name="description" id="description" placeholder='Enter your description'/>
                  </div>
                  <div className="flex flex-col md:mx-44 mx-6 my-2">
                        <label htmlFor="tag" className="text-xl font-bold text-slate-200">Tag</label>
                        <input type="text" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" value={tag}  onChange={(e)=>setTag(e.target.value)} name="tag" id="tag" placeholder='Enter your tag'/>
                  </div>
                  <div   className="md:mx-44 mx-6 py-2 my-2"><button type="submit" className="btn bg-cyan-400 font-bold text-slate-100 rounded-md shadow-sm hover:scale-95 px-4 py-2 cursor-pointer ">Add Note</button></div>
              </form>
    </div>
  )
}

export default AddNote
