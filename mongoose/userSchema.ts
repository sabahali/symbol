import mongoose, { Model } from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type:String,
    required:true
  },
  name: {
    type:String,

  },
  image: {
    type:String
  },
  date: { type: Date, default: Date.now },
  role: {
    type:String,
    required:true

  },
  applied:{
    type:Boolean,
    required:true
  }

});

let userModel;

try {
  // Try to retrieve the existing User model from mongoose.models
   userModel = mongoose.models.users || mongoose.model("users", userSchema);
} catch (error) {
  // Handle any errors that occur during model retrieval
  console.error('Error retrieving users model:', error);
}

export default userModel as Model<any, {}, {}, {}, any>;
