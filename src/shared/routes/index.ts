import { Router, Request, Response, NextFunction } from 'express';

class IndexRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', (req, res) => {
            res.send('Hello World');
        });
    }
}

export default new IndexRouter().router;