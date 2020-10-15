import mongoose from 'mongoose'

export default class Database {
    static initializeDatabase () {
        const username = process.env.MONGO_USERNAME ? `${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@` : ''
        mongoose.connect(
            `mongodb://${username}${process.env.MONGO_HOST || 'localhost'}:${process.env.MONGO_PORT || 27017}/${process.env.MONGO_DATABASE || 'pkb'}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
    }
}
