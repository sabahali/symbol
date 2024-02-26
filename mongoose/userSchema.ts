import mongoose, { Model } from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  picture: String,
  date: { type: Date, default: Date.now },
  role: String
});

let userModel;

try {
  // Try to retrieve the existing User model from mongoose.models
   userModel = mongoose.models.User || mongoose.model("User", userSchema);
} catch (error) {
  // Handle any errors that occur during model retrieval
  console.error('Error retrieving User model:', error);
}

export default userModel as Model<any, {}, {}, {}, any>;
