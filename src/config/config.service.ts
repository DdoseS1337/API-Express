import { IConfigService } from './config.sevice.interface';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { ILogger } from '../logger/logger.interface';
import { inject } from 'inversify/lib/annotation/inject';
import { TYPES } from '../types';
import { injectable } from 'inversify';

@injectable()
export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.logger.error('Can`t read file .env');
		} else {
			this.logger.log('Configuration .env loaded');
			this.config = result.parsed as DotenvParseOutput;
		}
	}
	get(key: string): string {
		return this.config[key];
	}
}
