import IRouter from '../../../util/IRouter'
import NoteController from '../controllers/NoteController'
// eslint-disable-next-line no-unused-vars
import { INote } from '../models/Note'
// eslint-disable-next-line no-unused-vars
import express from 'express'

export default class NoteRouter extends IRouter {
    private noteController: NoteController

    constructor () {
        super()
        this.noteController = new NoteController()
        this.buildRoutes()
    }

    async getNotes (req: express.Request, res: express.Response, next: express.NextFunction) {
        this.noteController.getNotes()
            .then((notes: INote[]) => res.json(notes))
            .catch(next)
    }

    async addNote (req: express.Request, res: express.Response, next: express.NextFunction) {
        this.noteController.addNote(req.body)
            .then((note: INote) => res.json(note))
            .catch(next)
    }

    async updateNote (req: express.Request, res: express.Response, next: express.NextFunction) {
        this.noteController.updateNote(req.params.id, req.body)
            .then(() => res.status(204).send())
            .catch(next)
    }

    async deleteNote (req: express.Request, res: express.Response, next: express.NextFunction) {
        this.noteController.deleteNote(req.params.id)
            .then(() => res.status(204).send())
            .catch(next)
    }

    buildRoutes () {
        this.router.get('/', this.getNotes.bind(this))
        this.router.post('/', this.addNote.bind(this))
        this.router.put('/:id', this.updateNote.bind(this))
        this.router.delete('/:id', this.deleteNote.bind(this))
    }
}
