// packages
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import createError from 'http-errors';
// routes
import libraryRoutes from './routes/library.js';
import bookRoutes from './routes/book.js';
import userRoutes from './routes/user.js';
import borrowedBookRoutes from './routes/borrowed.js';
import authRoutes from './routes/auth.js';
// middlewares
import verifyToken from './middlewares/verifyToken.js';
// db
import connectDB from './db.js';


// initialize
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middlewares
app.use('/libraries', verifyToken, libraryRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/borrowed-books', borrowedBookRoutes);
app.use('/auth', authRoutes);

// routes
app.get('/', (req, res) => {
    res.status(200).json({ message: "🙋 Hey, I'm your server." });
});

// 404 handler
app.use((req, res, next) => {
    next(createError.NotFound());
});

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        error: { status, message }
    });
});

// Connect to MongoDB
connectDB()
    .then(() => {
        // Start the server after successful database connection
        app.listen(PORT, () => console.log(`☕ Server is running on port: http://localhost:${PORT}`));
    })
    .catch((error) => {
        console.error('😞 Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit with failure
    });