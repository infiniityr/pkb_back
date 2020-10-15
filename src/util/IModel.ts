import mongoose from 'mongoose'

export class IModel extends mongoose.Document {
    createdAt: Date
    updatedAt: Date
}

export class ISchema {
    private static schema: mongoose.Schema<IModel>

    static buildSchema (definition?: mongoose.SchemaDefinition, options?: mongoose.SchemaOptions) {
        this.schema = new mongoose.Schema({
            ...definition
        }, {
            timestamps: true,
            ...options
        })

        return this.schema
    }
}
