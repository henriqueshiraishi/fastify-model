'use strict'

const Note = require('../schemes/Note')

module.exports = async function (app, opts) {

    app.post('/notes', async (request, reply) => {
        try {
            const note = await Note.create(request.body)
            reply.code(201).send(note)
        } catch (e) {
            reply.code(500).send(e)
        }
    })

    app.get('/notes', async (request, reply) => {
        try {
            const notes = await Note.find({})
            reply.code(200).send(notes)
        } catch (e) {
            reply.code(500).send(e)
        }
    })

    app.get('/notes/:id', async (request, reply) => {
        try {
            const id = request.params.id
            const note = await Note.findById(id)
            reply.code(200).send(note)
        } catch (e) {
            reply.code(500).send(e)
        }
    })

    app.put('/notes/:id', async (request, reply) => {
        try {
            const id = request.params.id
            await Note.findByIdAndUpdate(id, request.body)
            const noteUpdated = await Note.findById(id)
            reply.code(200).send({ data: noteUpdated })
        } catch (e) {
            reply.code(500).send(e)
        }
    })

    app.delete( '/notes/:id', async (request, reply) => {
        try {
            const id = request.params.id
            const noteToDelete = await Note.findById(id)
            await Note.findByIdAndDelete(id)
            reply.code(200).send({ data: noteToDelete })
        } catch (e) {
            reply.code(500).send(e)
        }
    })

}
