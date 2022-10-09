import { LoggerSevice } from "./logger/logger.service";
import 'reflect-metadata'
import 'inversify';
import { Container, ContainerModule, interfaces } from "inversify";
import { TYPES } from "./types";
import { ILogger } from "./logger/logger.interface";
import { App } from "./app";
import { ExeptionFilter } from "./errors/exeption.filter";
import { UserController } from "./users/users.controller";
import { IExeptionFilter } from "./errors/exeption.filter.interface";
import 'reflect-metadata';
import { IUserController } from "./users/user.controller.interface";

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<ILogger>(TYPES.ILogger).to(LoggerSevice);
    bind<App>(TYPES.Application).to(App);
    bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
    bind<UserController>(TYPES.UserController).to(UserController);
});

function bootstrap() {
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(TYPES.Application);
    app.init();
    return { appContainer, app };
}




export const { app , appContainer} = bootstrap();
