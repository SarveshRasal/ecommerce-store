// models/testModel.js
import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

// Use existing model or create a new one
const Test = models.Test || model('Test', testSchema);

export default Test;
