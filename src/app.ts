import  express,{ Express } from 'express'
import { userRouter } from './users/users';
import { Server } from 'http';
import { LoggerSevice } from './logger/logger.service';
export class App {
    
    app: Express;
    port: number;
    server: Server;
    logger: LoggerSevice;

    constructor(logger: LoggerSevice) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
    }

    useRoutes() {
        this.app.use('/users', userRouter)
    }
    public async init() {
         this.useRoutes();
         this.server = this.app.listen(this.port);
         this.logger.log(`Server start on http://localhost:${this.port}`);
    }
}