import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseController } from "../common/base.controller";
import { ILogger } from "../logger/logger.interface";
import { LoggerSevice } from "../logger/logger.service";
import { TYPES } from "../types";
import 'reflect-metadata';
import { IUserController } from "./user.controller.interface";

@injectable()
export class UserController extends BaseController implements IUserController {

    constructor (@inject(TYPES.ILogger)  private loggerService: ILogger) {

        super(loggerService);
        this.bindRoutes([
        {path: '/register', method: 'post', func: this.register},
        {path: '/login', method: 'post', func: this.login}
       ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'login');
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }
}