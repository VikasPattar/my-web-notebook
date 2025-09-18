// import { useState, useEffect} from 'react';
import { useContext, useState , useEffect} from 'react';
import noteContext from '../../contexts/noteContext';
import NoteCard from './noteCard';

function YourNotes() {

    let { fetchNotes, editNote, deleteNote} = useContext(noteContext);    

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        const fetch_notes = async()=>{
            let notes_fetched = await fetchNotes()
            setNotes(notes_fetched)
        }
        fetch_notes()
    },[editNote, deleteNote])

    
    return (
        <>
            <div className="card shadow-lg p-3 d-grid grid-flow-row gap-3 rounded-3 bg-secondary" style={{ height: '100%', minWidth: '250px', width: "100%" , gridTemplateColumns : 'repeat(3, 1fr)', gridTemplateRows : 'repeat(2, 1fr)', gridAutoFlow : 'row' }}>
                {
                    notes.map((note, i) => {
                        return <NoteCard key={i} k={i} note={note} />
                    })
                }
            </div>
        </>
    )
}

export default YourNotes;