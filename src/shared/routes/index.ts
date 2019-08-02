import { Router, Request, Response, NextFunction } from 'express';
import { of } from 'rxjs';

class IndexRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', (req, res) => {
            of(null).subscribe(() => {
                res.send('Hello World!');
            });
        });
    }
}

export default new IndexRouter().router;