import express = require('express');

// Route imports
import IndexRouter from './shared/routes/index';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.routes();
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
