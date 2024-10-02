import React from 'react'
import { MdOutlineEditCalendar } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const NotesItem = () => {
  return (
      <div className="bg-slate-700  py-6 mt-16 h-[120vh]">
          <div className='flex justify-center my-4 text-slate-100 text-xl font-bold'><h2>Your Notes</h2></div>
          <div className="flex justify-center flex-wrap">
              
              <div className="shadow-md  rounded-md w-52 mx-1 my-1  p-4 bg-white">
                  <div className="flex justify-between">
                        <h4 className="font-bold text-xl">Title</h4>
                      <div className="flex cursor-pointer"><RiDeleteBin5Line size={25} className="mx-1"/><MdOutlineEditCalendar size={25} className="mx-1"/></div>
                  </div>
              <p className="font-medium  my-2 tracking-tighter text-sm">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non voluptatum eos. </p>
              <h5 className="font-bold text-sm">Tag</h5>
              </div>

              <div className="shadow-md  rounded-md w-52 mx-1 my-1  p-4 bg-white">
                  <div className="flex justify-between">
                        <h4 className="font-bold text-xl">Title</h4>
                      <div className="flex cursor-pointer"><RiDeleteBin5Line size={25} className="mx-1"/><MdOutlineEditCalendar size={25} className="mx-1"/></div>
                  </div>
              <p className="font-medium  my-2 tracking-tighter text-sm">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem at officia. </p>
              <h5 className="font-bold text-sm">Tag</h5>
              </div>
        </div>
    </div>
  )
}

export default NotesItem
