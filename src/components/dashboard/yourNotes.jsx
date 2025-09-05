// import { useState, useEffect} from 'react';
import { useContext, useState , useEffect} from 'react';
import noteContext from '../../contexts/noteContext';
import NoteCard from './noteCard';

function YourNotes() {

    let { listNotes } = useContext(noteContext);

    // let notes =[
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'},
    //     {title : 'title', description : 'desc'}
    // ]

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        setNotes(listNotes)
    },[listNotes])

    
    return (
        <>
            <div className="card shadow-lg p-4 rounded-3 bg-secondary d-flex gap-3 flex-row justify-content-evenly align-items-evenly flex-wrap" style={{ height: '100%', minWidth: '250px', width: "100%" }}>
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