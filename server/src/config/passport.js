// server/src/config/passport.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as InstagramStrategy } from 'passport-instagram';
import User from '../models/User.js';


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (user) {
      return done(null, user);
    }
    user = new User({
      googleId: profile.id,
      email: profile.emails[0].value,
    });
    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));
passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: "/api/auth/instagram/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ instagramId: profile.id });
    if (user) {
      return done(null, user);
    }
    user = new User({
      instagramId: profile.id,
      email: profile.emails[0].value, // Nota: Instagram no siempre proporciona el email
    });
    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));


