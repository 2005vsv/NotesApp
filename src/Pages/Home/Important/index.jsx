import React, { Fragment } from "react";
import Notescard from "../../../Notescard";
import Navbar from "../../../Components/Navbar";
import Sidebar from "../../../Sidebar";
import { usenotes } from "../../../Context/notescontext";
import Footer from "../../../footer";

function Important() {
  const { important } = usenotes();
  return (
    <div>
      <Fragment>
        <Navbar />
        <main className="flex">
          <Sidebar />
          <div className="flex flex-row gap-6 ml-10 mt-6 w-[150rem] h-28">
            {important?.length > 0 &&
              important.map(({ id, title, text, isPinned }) => (
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

        <Footer />
      </Fragment>
    </div>
  );
}

export default Important;
