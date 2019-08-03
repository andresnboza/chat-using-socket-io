import express = require('express');

const EXPRESS = require('express');
const path = require('path');

// Route imports
import IndexRouter from './shared/routes/index';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        //Setting static files
        this.setStatic();
        // this.routes();
    }

    private setStatic() {
        console.log(path.join(__dirname, '/public'));
        this.express.use(EXPRESS.static(path.join(__dirname, '/public')));
    }

    private routes(): void {
        this.express.use('/', IndexRouter);
        
        this.express.all('*', (req: any, res: any) => {
            console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
            res.sendStatus(404);
        });
    }

}

export default new App().express;
