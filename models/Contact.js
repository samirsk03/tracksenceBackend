import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email']
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model('Contact', contactSchema);