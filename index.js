import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/user.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/Operation_Crud';
const port = process.env.PORT || 5000;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB.');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.use('/api/v1', router);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found!",
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
    });
});
