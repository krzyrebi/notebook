const Note = require('../db/models/note')

class NoteActions {
    async saveNote(req, res) {
        const title = req.body.title
        const body = req.body.body

        let note
        try {
            note = new Note({
                title: title,
                body: body
            })
            await note.save()
        } catch (err) {
            return res.status(422).send(err.message)    // 422 - nieprawidlowe zadanie
        }
       

        res.status(201).send(note)
    } 
    async getAllNotes(req, res) {
        // mozna tak
        // Note.find({}, (err, doc) => {            // znajdz wszystko i przekaz rezultat do callbackow; dwa callbacki, pierwszy do bledow, drugi obsluguje rezultat find
        //     console.log(doc)
        //     res.status(200).send(doc)
        // })
        let doc  // nie moze byc nizej w try const doc=.., bo nizej bedzie undefined w res.send
        try {
            doc = await Note.find({})
        } catch (err) {
            return res.status(500).send(err.message)
        }

        res.status(200).send(doc)

    }

    async getNote(req, res) {
        const id = req.params.id
        const note = await Note.findOne({ _id: id })  // w mongo pole id zaczyna sie od _
        res.status(200).send(note)
    }

    async deleteNote(req, res) {
        const id = req.params.id
        await Note.deleteOne({ _id: id})
        res.status(204).send()
    }


    
}

module.exports = new NoteActions()