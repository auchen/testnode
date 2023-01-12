import mongoose from 'mongoose';

import {NODE_ENV, DB_URI_PRO, DB_URI_DEV} from '../EnvConfig';
import * as Cs from '../Constants';

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI || (process.env.NODE_ENV === Cs.ENV_PRO || NODE_ENV === Cs.ENV_PRO ? DB_URI_PRO : DB_URI_DEV));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connectted!');
});

const Schema = mongoose.Schema;

// ------------ user starts ------------
const UserSchema = new Schema(
  {
    country: String,
    username: {type: String, trim: true, lowercase: true, index: true},
    avatar: String,
    fullName: String,
    password: String,
    email: {type: String, trim: true, lowercase: true},
    avatarColor: String,
    signUpIp: String,
    isLocked: {type: Boolean, default: false},
    role: {type: [String], default: ['user']},
    isAdmin: {type: Boolean, default: false},
    version: {type: Number, default: 1},
  },
  {timestamps: true},
);
const User = mongoose.model('user', UserSchema);

export {User};
