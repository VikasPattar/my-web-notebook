// import {  useState } from "react";
// import Edit from "./editModal";
import { useContext, useEffect, useState } from "react";
import noteContext from "../../contexts/noteContext";

function NoteCard({ note, k }) {

    let {editNote, deleteNote} = useContext(noteContext);

    let [localNote, setLocalNote] = useState(note);

    useEffect(()=>{
        setLocalNote(note)
    },[note])
    
    const clickDelete = (e)=>{
        e.preventDefault()
        let id = note.id;
        deleteNote(id);
    }

    const clickUpdate=(e)=>{
        e.preventDefault()
        editNote(note.id, localNote);
    }

    const onChange = (e)=>{
        setLocalNote({...localNote, [e.target.name] : e.target.value})
    }

    return (
        <>
            <div id="note-card" className="card p-3 d-flex flex-column justify-content-evenly" style={{ width: "30%", minHeight: "30vh" }} >
                <div id="title-icon " className="d-flex h-50 flex-row   justify-content-between">
                    <div id="title" className="fs-3 w-75 fw-bold ">{localNote.title}</div>
                    <div id="icon" className=" w-25 text-end d-flex justify-content-evenly align-items-start flex-row pt-2 pe-2 fs-5 gap-3">

                        <i className="fa-regular fa-pen-to-square" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${k}`}></i>

                        <i className="fa-solid fa-trash-can" id={`delete${k}`} onClick = {clickDelete}></i>
                    </div>
                </div>
                <div id="description" className=" h-50 " style={{ fontSize: "1.3rem", textWrap: 'wrap' }}>{localNote.description}</div>
            </div>


            <div className="modal fade"  id={`staticBackdrop${k}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"  id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="mb-2">
                                    <label className="form-label fw-semibold p-1" >Title</label>
                                    <input type="text" className="form-control" id={`title${k}`} placeholder="title for the note" value={localNote.title} name="title" onChange={onChange} required />
                                </div>

                                {/* <!-- Password --> */}
                                <div className="mb-2">
                                    <label htmlFor="description" className="form-label fw-semibold mt-2 p-1" >Note description</label>
                                    <textarea className="form-control" id={`descriptioin${k}`} placeholder="write something here..." value = {localNote.description} name="description" onChange={onChange} required />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="tag" className="form-label fw-semibold mt-2 p-1" >Tag</label>
                                    <input type="text"  className="form-control" id={`tag${k}`} placeholder="tag" value={localNote.tag} name="tag" onChange={onChange} required />
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <input type="submit"  className="btn btn-primary" value={'Update'} onClick = {clickUpdate}/>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoteCard;