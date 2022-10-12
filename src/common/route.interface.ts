import { NextFunction, Router, Request, Response } from 'express';

export interface IControlerRoute {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
}

export type ExpressReturnType = Response<any, Record<string, any>>;
