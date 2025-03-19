import React from "react";
import {  NavLink } from "react-router-dom";
function Sidebar() {
  const getstyles=({isActive})=>{
    
    return isActive ? 'bg-blue-400 flex gap-1 p-2 rounded-tr-full rounded-br-full ':' hover:bg-blue-400 flex gap-3 p-1  rounded-tr-full rounded-br-full';
  }
  return (
    <aside className="flex flex-col gap-4 border-r-4 border-gray-100 w-35 h-screen p-3 text-black">
      <NavLink to="/" className={getstyles}>
        <div className="flex gap-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink to="/Archive" className={getstyles}>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
          </svg>
          <span>Archive</span>
        </div>
      </NavLink>
      <NavLink to="/Important" className={getstyles}>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
          </svg>
          <span>Important</span>
        </div>
      </NavLink>
      <NavLink to="/Bin" className={getstyles}>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
          <span>Bin</span>
        </div>
      </NavLink>
    </aside>
  );
}
export default Sidebar;