import axios, { AxiosError, AxiosResponse } from 'axios';
import Price from '../models/Price';

interface PriceData {
    usd: number;
}

const symbols = {
    BTC: 'bitcoin',
    ETH: 'ethereum',
    XRP: 'ripple',
    LTC: 'litecoin',
    BCH: 'bitcoin-cash'
};
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

const fetchPrices = async () => {
    try {
        const promises = Object.entries(symbols).map(async ([symbol, id]) => {
            try {
                const response: AxiosResponse<{ [key: string]: PriceData }> = await axios.get(`${apiUrl}?ids=${id}&vs_currencies=usd`, {
                    timeout: 10000, // Set a timeout of 10 seconds
                });
                const priceData = response.data[id];
                if (!priceData || typeof priceData.usd !== 'number') {
                    throw new Error(`Price data for ${symbol} not found or structured incorrectly`);
                }
                const price = priceData.usd;
                const newPrice = new Price({ symbol, price, timestamp: new Date() });
                await newPrice.save();
                return { symbol, price, timestamp: new Date() };
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError; // Cast error to AxiosError
                    if (axiosError.code === 'ECONNRESET' || axiosError.code === 'EPIPE') {
                        console.log(`Connection error for ${symbol}:`, axiosError.message);
                        // Handle retry logic here if necessary
                    } else if (axiosError.response?.status === 429) {
                        console.log('Rate limit exceeded. Retrying after 10 seconds...');
                        await new Promise(resolve => setTimeout(resolve, 10000));
                        return fetchPrices();
                    } else {
                        console.error(`Error fetching price for ${symbol}:`, axiosError.message);
                    }
                } else {
                    console.error(`Error fetching price for ${symbol}:`, error);
                }
                return null;
            }
        });

        const results = await Promise.all(promises);
        console.log('Prices updated:', results.filter(Boolean));
    } catch (error: any) {
        console.error('Error fetching prices:', error.message);
    }
};

export default fetchPrices;
