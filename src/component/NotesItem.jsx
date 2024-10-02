import React from "react";
import { MdOutlineEditCalendar } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const NotesItem = ({ note }) => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h4 className="font-bold text-xl">{note.title}</h4>
        <div className="flex cursor-pointer">
          <RiDeleteBin5Line size={25} className="mx-1 hover:scale-110" />
          <MdOutlineEditCalendar size={25} className="mx-1 hover:scale-110" />
        </div>
      </div>
      <p className="font-medium  my-2 tracking-tighter text-sm">
        {note.description}
      </p>
      <h5 className="font-bold text-sm">{note.tag}</h5>
    </div>
  );
};

export default NotesItem;
