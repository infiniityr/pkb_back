import { Router } from 'express'

export default class IRouter {
    public router: Router

    constructor () {
        this.router = Router({ mergeParams: true })
    }
}
