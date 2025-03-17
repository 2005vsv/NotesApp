import React from "react";

function Navbar() {
  return (
    <header className="flex px-5 py-2 gap-3 border-b-3 border-gray-100">
      <div className="w-12 h-12">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10270/10270677.png"
          alt="logo"
          className="w-full h-full"
        ></img>
      </div>
      <h1 className="text-blue-400 text-4xl font-bold">NotesApp</h1>
    </header>
  );
}

export default Navbar;
