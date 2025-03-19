export const findnotesinimportant =(important,id)=>{
    return important.some(note=>note.id===id)

  }