// backend/src/models/User.js


import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  googleId: String,
  instagramId: String,
});

export default mongoose.model('User', userSchema);
