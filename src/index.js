import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import http from 'http';

import routes from './data/Routes';

const SERVER_PORT = 2083;

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);

const server = http.createServer(app);

server.listen(process.env.PORT || SERVER_PORT, async () => {
  // Test.test();

  console.log(`Server starts on http://localhost:${process.env.PORT || SERVER_PORT}`);
});
