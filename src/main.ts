import { App } from "./app";
import { ExeptionFilter } from "./errors/exeption.filter";
import { LoggerSevice } from "./logger/logger.service";
import { UserController } from "./users/users.contoller";


async function bootstrap() {
    const logger = new LoggerSevice()
    const app = new App(
        logger, 
        new UserController(logger), 
        new ExeptionFilter(logger));
    await app.init();
    
}

bootstrap();