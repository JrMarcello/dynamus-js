import express from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
// import methodOverride from 'method-override';

import * as pathUtils from './common/path-utils';

// import mongodb from './db/mongo';

const app = express();

configureEnvironmentVariables();
configureCORS();
configureParsers();
setRoutes();
// connectBD();

// TODO refatorar foreach
function configureEnvironmentVariables() {
  const file = path.join(__dirname, '../env', `.env.${process.env.NODE_ENV}`);

  const envConfig = dotenv.parse(fs.readFileSync(file));
  const addKey = () => {
    Object.keys(envConfig).forEach((key) => {
      if (key) {
        process.env[key] = envConfig[key];
      }
    });
  };
  addKey();
}

function configureCORS() {
  app.use(cors());
  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  //   next();
  // });
}

function configureParsers() {
  app.set('showStackError', true);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // app.use(methodOverride());
  // app.use(express.static(`${config.rootDir}/public`));
}

function setRoutes() {
  app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h3>Node Express API - V0.0.1</h3>\n');
  });

  pathUtils.getGlobbedPaths(path.join(__dirname, './modules/**/routes.js')).forEach((routePath) => {
    require(path.resolve(routePath))(app);
  });
}

// function connectBD() {
//   mongodb(configs.db);
// }

export default app;