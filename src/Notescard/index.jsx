import React from "react";
import { usenotes } from "../Context/notescontext";
import { Findnotesinarchive } from "../utils/Findnotesinarchive/";
import { Findnotesinimportant } from "../utils/Findnotesinimportant/";
import { Findnotesinbin } from "../utils/Findnotesinbin/";

function Notescard({ id, title, text, isPinned }) {
  const { notesdispatch, archive, important ,bin} = usenotes();
  const onpinclick = (id) => {
    !isPinned
      ? notesdispatch({
          type: "PIN",
          payload: { id },
        })
      : notesdispatch({
          type: "UNPIN",
          payload: { id },
        });
  };
  const onarchiveclick = (id) => {
    !isNotesinarchive
      ? notesdispatch({
          type: "ARCHIVE",
          payload: { id },
        })
      : notesdispatch({
          type: "UNARCHIVE",
          payload: { id },
        });
  };
  const onimportantclick = (id) => {
    !isNotesinimportant
      ? notesdispatch({
          type: "IMPORTANT",
          payload: { id },
        })
      : notesdispatch({
          type: "UNIMPORTANT",
          payload: { id },
        });
  };
  const ondeleteclick=(id)=>{
    !isNotesinbin
    ?notesdispatch({
      type:'DELETE',
      payload:{id},
    }):
    notesdispatch({
      type:'UNDELETE',
      payload:{id},
    })

  }
 

  const isNotesinarchive = Findnotesinarchive(archive, id);
  const isNotesinimportant = Findnotesinimportant(important, id);
  const isNotesinbin=Findnotesinbin(bin,id);
  return (
    <div
      className="w-72 h-auto border border-blue-500 rounded-xl shadow-lg p-4 bg-white hover:shadow-2xl transition-shadow duration-200 flex flex-col justify-between"
      key={id}
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-md text-gray-700 truncate">{title}</p>
        {!isNotesinarchive && !isNotesinimportant && !isNotesinbin ? (
          <button
            onClick={() => onpinclick(id)}
            className={`ml-auto cursor-pointer text-gray-500 hover:text-gray-700 ${
              isPinned && "bg-slate-950"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" />
            </svg>
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="text-gray-700 text-sm mb-2">{text}</div>

      <div className="flex justify-end gap-2">
        {!isNotesinimportant && !isNotesinbin? (
          <button
            onClick={() => onarchiveclick(id)}
            className={
              isNotesinarchive
                ? "bg-slate-950 cursor-pointer"
                : "cursor-pointer text-gray-500 hover:text-gray-700"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
            </svg>
          </button>
        ) : (
          <></>
        )}
        {!isNotesinarchive && !isNotesinbin ? (
          <button
            onClick={() => onimportantclick(id)}
            className={
              isNotesinimportant
                ? "bg-slate-950 cursor-pointer"
                : "cursor-pointer text-gray-500 hover:text-gray-700"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
            </svg>
          </button>
        ) : (
          <></>
        )}
        {!isNotesinarchive && !isNotesinimportant ? (
          <button onClick={()=>ondeleteclick(id)} className={isNotesinbin? "bg-slate-950 cursor-pointer":"cursor-pointer text-gray-500 hover:text-gray-700"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Notescard;
