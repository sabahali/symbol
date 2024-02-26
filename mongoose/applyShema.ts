import mongoose, { Model } from 'mongoose';

const formDataSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    // Add more fields as needed
});

let formModel;

try {
    // Try to retrieve the existing User model from mongoose.models
    formModel = mongoose.models.studentsapplications || mongoose.model("studentsapplications", formDataSchema);
} catch (error) {
    // Handle any errors that occur during model retrieval
    console.error('Error retrieving formModel:', error);
}

export default formModel as Model<any, {}, {}, {}, any>;
