import React, { Fragment } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Sidebar";

import Notescard from "../../Notescard";
import { usenotes } from "../../Context/notescontext";
function Home() {
  const { title, text, notes,archive, notesdispatch } = usenotes();

  const ontitlechange = (e) => {
    notesdispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const ontextchange = (e) => {
    notesdispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };
  const onaddclick = () => {
    notesdispatch({
      type: "ADD_NOTE",
    });
    notesdispatch({
      type: "CLEAR_INPUT",
    });
  };
  const pinnednotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const othernotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
    console.log(archive);

  return (
    <div>
      <Fragment>
        <Navbar />
        <main className="flex gap-3 justify-center">
          <Sidebar />
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col w-[400px] text-black mt-5 relative mb-10">
              <input
                value={title}
                onChange={ontitlechange}
                className="border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter title"
              />
              <textarea
                value={text}
                onChange={ontextchange}
                className="border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter text"
              />
              <button
                disabled={title.length === 0 && text.length === 0}
                onClick={onaddclick}
                className="absolute bottom-2 right-2 cursor-pointer bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            </div>
            {pinnednotes?.length > 0 && (
              <>
                <h3 className="text-black mr-300">Pinned Notes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mr-auto ml-10 ">
                  {pinnednotes?.length > 0 &&
                    pinnednotes.map(({ id, title, text, isPinned }) => (
                      <Notescard
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        isPinned={isPinned}
                      />
                    ))}
                </div>
                
              </>
            )}

            {pinnednotes?.length > 0 && (
              <h3 className="text-black mr-300">Other Notes</h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-auto ml-10 ">
              {othernotes?.length > 0 &&
                othernotes.map(({ id, title, text, isPinned }) => (
                  <Notescard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
            </div>
          </div>
        </main>
      </Fragment>
    </div>
  );
}

export default Home;
