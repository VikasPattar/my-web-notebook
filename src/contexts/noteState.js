import React, {useState} from 'react';
import NoteContext from "./noteContext";


function NoteState ({children}){
    
    const [note, setNote] = useState({
        title : '',
        description : '',
        tag : '',
        id : ''
    })

    let [listNotes, setNotesList] = useState([])

    const addNote = (n)=>{
        setNotesList(listNotes.concat(n))
    }

    const deleteNote = (id)=>{
        let deleted = listNotes.filter((inote)=>{
            return inote.id !== id
        })

        setNotesList(deleted)
    }

    const fetchNotes = ()=>{
        return listNotes
    }

    const editNote = (id, updatedNote) => {
        setNotesList(listNotes.map(inote => 
            inote.id === id ? {...updatedNote, id} : inote
        ));
    };

    return(
        <NoteContext.Provider value={{note, setNote, listNotes, setNotesList, addNote, deleteNote, fetchNotes, editNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;