import noteContext from '../../contexts/noteContext';
import { useContext, useEffect } from "react";

function CreateNote() {

    let { addNote, note, setNote } = useContext(noteContext);
    // let [id, setid] = useState('');

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log(note)
    }, [note])

    const getRandomString = (length = 10) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        console.log(result)
        return result;

    }


    const handleClick = (e) => {
        e.preventDefault();
        // setid(getRandomString())
        let str = getRandomString();
        let updated = {
            ...note,
            id: str
        }
        console.log('updated ', updated)
        // setNote(updated)
        console.log('added note : ', updated)
        addNote(updated);
        setNote({
            title: '',
            description: '',
            tag: '',
            id: ''
        })

        alert('note added successfully');
    }

    return (
        <>
            <div className="card shadow-lg p-4 rounded-3 " style={{ width: '100%', minWidth: '400px' }}>
                <h2 className="text-center mb-4">Write a Note</h2>

                <form action="" method="POST">
                    {/* <!-- Email --> */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold p-1" >Title</label>
                        <input type="text" className="form-control" onChange={handleChange} id="title" placeholder="title for the note" name="title" required />
                    </div>

                    {/* <!-- Password --> */}
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label fw-semibold mt-2 p-1" >Note description</label>
                        <textarea className="form-control" id="password" onChange={handleChange} placeholder="write something here..." name="description" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label fw-semibold mt-2 p-1" >Tag</label>
                        <input type="text" className="form-control" onChange={handleChange} id="tag" placeholder="tag" name="tag" required />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" onClick={handleClick} className="btn btn-primary w-100 mt-3">Create Note</button>
                </form>

            </div>
        </>
    )
}

export default CreateNote;