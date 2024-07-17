import { Request, Response } from 'express';
import Price from '../models/Price';

export const getPrices = async (req: Request, res: Response) => {
    try {
        const { symbol } = req.query;
        console.log(`Fetching prices for symbol: ${symbol}`);
        const prices = await Price.find({ symbol })
            .sort({ timestamp: -1 }) // Sort by timestamp in descending order (latest first)
            .limit(20); // Limit to 20 entries
        console.log('Fetched prices:', prices);
        res.json(prices);
    } catch (error) {
        console.error('Error fetching prices:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
