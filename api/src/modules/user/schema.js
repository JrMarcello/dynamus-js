/* eslint import/no-mutable-exports:0, func-names:0 */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

let UserModel = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, trim: true },
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    default: bcrypt.hashSync('1a2b3c', bcrypt.genSaltSync(SALT_WORK_FACTOR)),
  },
  avatar: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
    select: false,
  },
  updated_at: {
    type: Date,
    select: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

UserModel.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (errSalt, salt) => {
    if (errSalt) return next(errSalt);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (errHash, hash) => {
      if (errHash) return next(errHash);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserModel.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

UserModel = mongoose.model('User', UserModel);

export default UserModel;
