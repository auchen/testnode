// import express from "express";
// import moment from "moment";
// import bodyParser from "body-parser";
// import helmet from "helmet";
// import cors from "cors";
// import http from "http";
// import schedule from "node-schedule";

// import * as Env from "./EnvConfig";
// import * as Cs from "./Constants";
// import { clientAppVersionCheck, logError } from "./Helper";
// import routes from "./data/Routes";
// import updateGlobleVariables from "./GlobalVariables";
// import { autoSavePrices, autoSendNotifications } from "./data/Robot";

// import * as Test from './Test';

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express API
module.exports = app;

// const server = http.createServer(app);

// server.listen(process.env.PORT || Cs.SERVER_PORT, async () => {
//   await updateGlobleVariables();

//   schedule.scheduleJob("*/10 * * * * *", () => {
//     // run every 10 seconds
//     console.log(
//       `====== Price saved at ${moment().format(Cs.DATE_FORMAT)} ======`
//     );
//     autoSavePrices();
//   });

//   schedule.scheduleJob("*/9 * * * * *", () => {
//     // run every 9 seconds
//     console.log(
//       `------ Notifications sent at ${moment().format(Cs.DATE_FORMAT)} ------`
//     );
//     autoSendNotifications();
//   });

//   // Test.test();

//   console.log(
//     `Server starts on http://localhost:${
//       process.env.PORT || Cs.SERVER_PORT
//     } at ${moment().format(Cs.DATE_FORMAT)}`
//   );
// });
