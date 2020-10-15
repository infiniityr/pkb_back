import errorHandler from 'errorhandler'
import app from './app/app'

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler())

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log(
        '  App is running at http://localhost:%d%s in %s mode',
        app.get('port'),
        process.env.PATH_CONTEXT || '/',
        app.get('env')
    )
    console.log('  Press CTRL-C to stop\n')
})

export default server
