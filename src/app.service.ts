import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Db } from 'mongodb';

import config from './config';
@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apiKey: string, 
    //@Inject('TASKS') private tasks: any[],
    //private config: ConfigService
    @Inject('MONGO') private database: Db,
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}
  getHello(): string {
    //console.log(this.tasks);
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    const port = this.configService.database.port
    //const apiKey = this.config.get('API_KEY');
    //const name = this.config.get('DATABASE_NAME');
    //return `Hola Mundo!! ${this.apiKey}`;
    return `Hola Mundo!! API_KEY: ${apiKey}, DATA_BASE: ${name}, PORT: ${port}`;
  }
  getTask() {
    const tasksCollection = this.database.collection('task')
    return tasksCollection.find().toArray();
  }
}
