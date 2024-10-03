import React from 'react'

const AddNote = () => {
  return (
    <div className="bg-slate-600">
              <form action="">
                  <div className="flex flex-col md:mx-44 mx-6 my-2">
                        <label htmlFor="title" className="text-xl font-bold text-slate-200">Title </label>
                        <input type="text" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" name="title" id="title" placeholder='Enter your title'/>  
                  </div>
                  <div className="flex flex-col md:mx-44 mx-6 my-2">
                        <label htmlFor="description" className="text-xl font-bold text-slate-200"> Description</label>
                        <input type="text" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" name="description" id="description" placeholder='Enter your description'/>
                  </div>
                  <div className="flex flex-col md:mx-44 mx-6 my-2">
                        <label htmlFor="tag" className="text-xl font-bold text-slate-200">Tag</label>
                        <input type="text" className="bg-white py-2 px-2 rounded-md outline-none border-2 border-solid boder-slate-300" name="tag" id="tag" placeholder='Enter your tag'/>
                  </div>
                  <div className="md:mx-44 mx-6 py-2 my-2"><button type="submit" className="btn bg-cyan-400 font-bold text-slate-100 rounded-md shadow-sm hover:scale-95 px-4 py-2 cursor-pointer ">Add Note</button></div>
              </form>
    </div>
  )
}

export default AddNote
