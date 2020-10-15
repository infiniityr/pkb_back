import Note from '../models/Note'
// eslint-disable-next-line no-unused-vars
import { INoteRequestCreation, INoteRequestUpdate } from '../validators/NoteValidator'

export default class NoteController {
    async getNotes () {
        return Note.find().limit(10)
    }

    async addNote (note: INoteRequestCreation) {
        return new Note(note).save()
    }

    async updateNote (id: string, note: INoteRequestUpdate) {
        return Note.update({ _id: id }, note)
    }

    async deleteNote (id: string) {
        return Note.findByIdAndRemove(id)
    }
}
