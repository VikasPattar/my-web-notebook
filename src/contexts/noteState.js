import React, {useState, useContext} from 'react';
import NoteContext from "./noteContext";
import userContext from './userContext';


function NoteState ({children}){

    const {token} = useContext(userContext);
    
    const host = 'http://localhost:5000';
    
    const [note, setNote] = useState({
        title : '',
        description : '',
        tag : '',
        id : ''
    })

    let [listNotes, setNotesList] = useState([])

    const addNote = async (n)=>{
        // setNotesList(listNotes.concat(n))
        //API call is made to /users/notes/createnote

        let response = await fetch(`${host}/users/notes/createnote`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                'auth-token' : token
            },
            body : JSON.stringify(n)
        })

        let result = await response.json()

        console.log(result)
    }

    const deleteNote = async (id)=>{
        // let deleted = listNotes.filter((inote)=>{
        //     return inote.id !== id
        // })

        // setNotesList(deleted)
        let response = await fetch(`${host}/users/notes/deletenote/${id}`,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : token
            }
        })

        let result = await response.json()
        console.log(result)
        alert('note deleted successfully')
    }

    const fetchNotes = async ()=>{
        let response = await fetch(`${host}/users/notes/fetchnotes`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : token
            }
        })

        let result = await response.json()
        return result.notes
    }

    const editNote = async (id, updatedNote) => {

        let response = await fetch(`${host}/users/notes/updatenote/${id}`,{
            method : "PUT",
            headers : {
                'Content-Type' : "application/json",
                'auth-token' : token
            },
            body : JSON.stringify(updatedNote)
        })

        let result = await response.json()

        console.log('result in noteState.jsx | api response  recieved | \n',result)

        return result.updated
    };

    return(
        <NoteContext.Provider value={{note, setNote, listNotes, setNotesList, addNote, deleteNote, fetchNotes, editNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;