import { LoggerSevice } from "./logger/logger.service";
import 'reflect-metadata'
import 'inversify';
import { Container } from "inversify";
import { TYPES } from "./types";
import { ILogger } from "./logger/logger.interface";
import { App } from "./app";
import { ExeptionFilter } from "./errors/exeption.filter";
import { UserController } from "./users/users.contoller";
import { IExeptionFilter } from "./errors/exeption.filter.interface";
import 'reflect-metadata';



const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerSevice);
appContainer.bind<App>(TYPES.Application).to(App);
appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app , appContainer};
