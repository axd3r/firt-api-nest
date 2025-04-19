import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';
import config from 'src/config';

const API_KEY = '12345635';
const API_KET_PROD = 'PROD12548412J';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const {
          connection, 
          user, 
          password, 
          host, 
          port, 
          dbName
        } = configService.mongo;
        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY]
    })
  ],
  providers: [  
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KET_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, dbName } = configService.mongo;
        const uri = `${connection}://${user}:${password}@${host}:${port}/?authSource=admin`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY]
    }
  ],
  exports: ['API_KEY', 'MONGO', MongooseModule],

})
export class DatabaseModule {}
