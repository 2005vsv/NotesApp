import React, { Fragment } from "react";
import Navbar from "../../../Components/Navbar";
import Sidebar from "../../../Sidebar";
import { usenotes } from "../../../Context/notescontext";
import Notescard from "../../../Notescard";

function Archive() {
  const { archive } = usenotes();

  return (
    <Fragment>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div className="flex flex-row gap-6 ml-10 mt-6 w-[150rem] h-28">
          {archive?.length > 0 &&
            archive.map(({ id, title, text, isPinned }) => (
              <Notescard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
              />
            ))}
        </div>
      </main>
    </Fragment>
  );
}

export default Archive;
