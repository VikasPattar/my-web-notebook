const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/noteModel')

router.post('/createnote', fetchuser, async (req, res) => {

    let userId = req.user.id;

    let { title, description, tag } = req.body;

    try {
        let note = await Note.create({
            title,
            description,
            tag,
            user: userId
        })

        console.log(note)

        res.send(note)


    } catch (error) {
        res.send('internal server error' + `\n ${error}`)
    }

})

//fetch note GET '/users/notes/fetchnotes'  |   login required
router.get('/fetchnotes', fetchuser, async (req, res) => {
    let userId = req.user.id;

    try {
        let notes = await Note.find({ user: userId })

        if (!notes) {
            res.send({message : 'no notes found'})
        }

        res.json({ notes })

    } catch (error) {
        res.send('internal server error' + error)
    }

})


//update a note PUT '/users/notes/updatenote'
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    let { title, description, tag } = req.body;

    let update = {}

    if (title) {
        update.title = title;
    }

    if (description) update.description = description;

    if (tag) update.tag = tag;

    try {
        let updated = await Note.findOneAndUpdate({ _id: req.params.id }, update, { new: true })

        res.json({ updated, update })
    } catch (error) {
        res.send({error : error.message, tag : 'try catch error'})
    }


})

router.delete('/deletenote/:id',fetchuser, async (req, res)=>{
    try {
        let note = await Note.findOne({_id : req.params.id})

        if(!note) res.json({message : "note not found"})
        
        let deleted = await Note.findOneAndDelete({_id : req.params.id})
        
        res.json({deleted})

    } catch (error) {
        res.json({message : "error in deleting the note", error})
    }
})



module.exports = router