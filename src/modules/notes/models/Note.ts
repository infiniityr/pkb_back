// eslint-disable-next-line no-unused-vars
import { IModel, ISchema } from '../../../util/IModel'
import mongoose from 'mongoose'

export interface INote extends IModel {
    title: string
    text: string
}

const NoteSchema : mongoose.Schema = ISchema.buildSchema({
    title: { type: String, required: true },
    text: { type: String, required: true }
})

export default mongoose.model<INote>('Note', NoteSchema)
