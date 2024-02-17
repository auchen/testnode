import dotenv from 'dotenv';

dotenv.config({silent: true});

// export const {NODE_ENV, DB_URI_PRO, DB_URI_DEV} = process.env;
export const {NODE_ENV} = process.env;

const defaults = {
  NODE_ENV: 'NODE_ENV',
  // DB_URI_PRO: 'DB_URI_PRO',
  // DB_URI_DEV: 'DB_URI_DEV',
};

Object.keys(defaults).forEach(key => {
  if (!process.env[key] || process.env[key] === defaults[key]) {
    throw new Error(`Please enter a custom ${key} in .env on the root directory`);
  }
});
