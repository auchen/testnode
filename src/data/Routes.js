import passport from 'passport';
import express from 'express';
import _ from 'lodash';
import multer from 'multer';

const routeItems = [
  {method: 'get', path: '/', controller: (req, res) => res.send('hello world')},
  {method: 'get', path: '/user', controller: (req, res) => res.send('hello user')},
  {method: 'get', path: '/port', controller: (req, res) => res.send('Port: ' + process.env.PORT)},
  {method: 'get', path: '/env', controller: (req, res) => res.send('Env: ' + process.env.NODE_ENV)},
];

const registerRoutes = ({router, items}) => {
  if (router && items && Array.isArray(items) && router.length > 0) {
    const methodAndPath = items.map(item => ({method: item.method, path: item.path}));
    const isDuplicate = _.uniqWith(methodAndPath, _.isEqual).length !== methodAndPath.length;

    if (isDuplicate) {
      throw new Error('Duplicated routes detected!');
    } else {
      const seperateFilesAndParams = multer({limits: {fieldSize: 10000}});

      items.forEach(item => {
        switch (item.method) {
          case 'get':
            if (item.isAuth) {
              router.route(item.path).get(seperateFilesAndParams.array('files'), passport.authenticate('jwt', {session: false, failWithError: true}));
            } else {
              router.route(item.path).get(seperateFilesAndParams.array('files'), item.controller);
            }
            break;
          case 'post':
            if (item.isAuth) {
              router.route(item.path).post(seperateFilesAndParams.array('files'), passport.authenticate('jwt', {session: false, failWithError: true}));
            } else {
              router.route(item.path).post(seperateFilesAndParams.array('files'), item.controller);
            }
            break;
        }
      });
    }
  }
};

const routes = app => {
  const router = express.Router();
  registerRoutes({router, items: routeItems});

  app.use('/', router);
};

export default routes;
