import { Schema, model } from 'mongoose';

const priceSchema = new Schema({
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Price = model('Price', priceSchema);
export default Price;
