import React from "react";
import { v4 as uuid } from "uuid";

function notesreducer(state, { type, payload }) {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { text: state.text, title: state.title, id: uuid(), isPinned: false },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    case "ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "UNARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === payload.id),
        ],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };
    case "IMPORTANT":
      return {
        ...state,
        important: [
          ...state.important,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "UNIMPORTANT":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.important.find(({id})=>id===payload.id),
        ],
        important: state.important.filter(({ id }) => id !== payload.id),
      };
    case "DELETE":
      return {
        ...state,
        bin: [...state.bin, state.notes.find(({ id }) => id === payload.id),],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "UNDELETE":
      alert("Are you sure want to Delete permanently from the bin")
      return {
        ...state,
        
        bin: state.bin.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
}

export default notesreducer;
