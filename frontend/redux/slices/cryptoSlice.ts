import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Price {
    symbol: string;
    price: number;
    timestamp: string;
}

interface CryptoState {
    symbol: string;
    prices: Price[];
    isModalOpen: boolean;
}

// Load state from localStorage if available
const initialState: CryptoState = {
    symbol: 'BTC',
    prices: [],
    isModalOpen: false,
};

// Check if window is defined (client-side) and load from localStorage
if (typeof window !== 'undefined') {
    const storedSymbol = localStorage.getItem('cryptoSymbol');
    if (storedSymbol) {
        initialState.symbol = storedSymbol;
    }
}

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setSymbol: (state, action: PayloadAction<string>) => {
            state.symbol = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('cryptoSymbol', action.payload); // Update localStorage
            }
        },
        setPrices: (state, action: PayloadAction<Price[]>) => {
            state.prices = action.payload;
        },
        setModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isModalOpen = action.payload;
        },
    },
});

export const { setSymbol, setPrices, setModalOpen } = cryptoSlice.actions;
export const selectSymbol = (state: RootState) => state.crypto.symbol;
export const selectPrices = (state: RootState) => state.crypto.prices;
export const selectModalOpen = (state: RootState) => state.crypto.isModalOpen;
export const cryptoReducer = cryptoSlice.reducer;
