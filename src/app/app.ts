import express from 'express'
import path from 'path'
import compression from 'compression'
import bodyParser from 'body-parser'
import Router from './router'
import Database from './database'

const app: express.Express = express()

app.set('port', process.env.PORT || 8080)

// Public assets
app.use(
    express.static(path.join(__dirname, '..', 'public'), { maxAge: 31557600000 })
)

// Middlewares
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

Router.initialize(app, process.env.PATH_CONTEXT || '')
Database.initializeDatabase()

export default app
