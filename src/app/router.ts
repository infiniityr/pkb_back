import express from 'express'
import NoteRouter from '../modules/notes/routes/NoteRouter'

export default class Router {
    private static router: express.Router;

    static initialize (app: express.Express, pathContext: string = '') {
        this.router = express.Router()

        this.initializeRouter()

        app.use(pathContext, this.router)
    }

    static initializeRouter () {
        this.router.get('/version', (req: express.Request, res: express.Response) => {
            res.status(200).json({
                name: 'pkb_back',
                environment: process.env.NODE_ENV
            })
        })

        this.router.use('/notes', new NoteRouter().router)
    }
}
