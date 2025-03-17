import React from 'react'
import {v4 as uuid} from 'uuid';

function notesreducer(state,{type,payload}) {
  switch(type){
    case 'TITLE':return{
      ...state,title:payload
    }
    case 'TEXT':
      return{
        ...state,text:payload
      }
    case 'ADD_NOTE':
      return{
        ...state,notes:[...state.notes,{text:state.text,title:state.title,id:uuid()}]
      }
    case 'CLEAR_INPUT':
      return{
        ...state,title:'',text:''
      }
    default:return state
  }
  
}

export default notesreducer
