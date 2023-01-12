import mongoose from 'mongoose';

const URI = 'mongodb+srv://test:test_mongo_test@test-ukjfp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI || URI);

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
