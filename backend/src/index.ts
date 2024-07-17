import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import priceRoutes from './routes/priceRoutes';
import fetchPrices from './services/fetchPrices';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/prices', priceRoutes);

mongoose.connect(process.env.MONGO_URI || '')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error(`MongoDB connection error: ${error}`));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

setInterval(fetchPrices, 60000);
fetchPrices();
