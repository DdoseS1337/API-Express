import { LoggerSevice } from './logger/logger.service';
import 'reflect-metadata';
import 'inversify';
import { Container, ContainerModule, interfaces } from 'inversify';
import { TYPES } from './types';
import { ILogger } from './logger/logger.interface';
import { App } from './app';
import { ExeptionFilter } from './errors/exeption.filter';
import { UserController } from './users/users.controller';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import 'reflect-metadata';
import { IUserController } from './users/user.controller.interface';
import { IUserService } from './users/user.service.interface';
import { UserService } from './users/user.service';
import { IConfigService } from './config/config.sevice.interface';
import { ConfigService } from './config/config.service';
import { PrismaService } from './database/prisma.service';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}
export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerSevice).inSingletonScope();
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<IUserController>(TYPES.UserController).to(UserController);
	bind<IUserService>(TYPES.UserService).to(UserService);
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { appContainer, app };
}

export const { app, appContainer } = bootstrap();
