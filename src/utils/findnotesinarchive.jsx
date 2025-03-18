export const findnotesinarchive=(archive,id)=>{
    return archive.some(note=>note.id===id)

  }