import React from 'react'
import { createContext,useContext,useReducer } from 'react'
import notesreducer from '../reducers/notesreducer'

const Notescontext=createContext();

const Notesprovider=({children})=>{
  const initialstate = {
      title: "",
      text: "",
      notes: [],
      archive:[],
      important:[],bin:[],
      
    };
    const [{ title, text, notes,archive,important ,bin}, notesdispatch] = useReducer(
      notesreducer,
      initialstate
    );
    return(
      <Notescontext.Provider value={{title, text, notes,archive,important,bin,notesdispatch}}>
        {children}
      </Notescontext.Provider>
    )
}
const usenotes=()=>useContext(Notescontext);
export {Notesprovider,usenotes}