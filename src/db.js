// packages
import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        // Connect to MongoDB Atlas
        const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME || '';
        const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || '';
        const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';
        const MONGO_DB_URI = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster0.0f5brxu.mongodb.net/${MONGO_DB_NAME}`;

        await mongoose.connect(MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('👏 Connected to MongoDB');
    } catch (error) {
        console.error('😞 Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;