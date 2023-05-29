// packages
import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME || '';
        const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || '';
        const MONGO_DB_CLUSTER = process.env.MONGO_DB_CLUSTER || '';
        const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';
        const MONGO_DB_URI = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER}.w4gl5sg.mongodb.net/${MONGO_DB_NAME}`;

        // Connect to MongoDB Atlas
        await mongoose.connect(MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('👏 Connected to MongoDB');
    } catch (error) {
        console.error('😞 Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit with failure
    }

    // mongoose events
    // mongoose.connection.on('connected', () => {
    //     console.log('Mongoose connected to mongodb...');
    // });

    // mongoose.connection.on('error', (err) => {
    //     console.log('Mongoose connection error: ', err.message);
    // });

    // mongoose.connection.on('disconnected', () => {
    //     console.log('Mongoose disconnected from the mongodb...');
    // });

    // process.on('SIGINT', () => {
    //     mongoose.connection.close(() => {
    //         console.log('Mongoose connection is closed by app termination...');
    //         process.exit(0);
    //     });
    // });
};

export default connectDB;