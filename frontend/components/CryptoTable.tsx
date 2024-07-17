import React, { useEffect } from 'react';
import styles from './cryptoTable.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setPrices, selectPrices, selectSymbol } from '../redux/slices/cryptoSlice';
import axios from 'axios';

const symbolImages: { [key: string]: string } = {
    BTC: 'https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400',
    ETH: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
    XRP: 'https://banner2.cleanpng.com/20180919/eok/kisspng-ripple-cryptocurrency-bitcoin-cash-logo-stellar-5ba289ced0d1c5.3071403015373787668553.jpg',
    LTC: 'https://assets.coingecko.com/coins/images/2/standard/litecoin.png?1696501400',
    BCH: 'https://png.pngtree.com/png-clipart/20230817/original/pngtree-isolated-bitcoin-cash-symbol-on-white-backgroundvector-illustration-of-bch-cryptocurrency-vector-picture-image_10957864.png',
};

const CryptoTable: React.FC = () => {
    const dispatch = useDispatch();
    const symbol = useSelector(selectSymbol);
    const prices = useSelector(selectPrices);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/prices?symbol=${symbol}`);
                dispatch(setPrices(response.data));
            } catch (error) {
                console.error('Error fetching prices:', error);
            }
        };

        fetchPrices();
    }, [dispatch, symbol]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {prices.length > 0 ? (
                        prices.map((price, index) => (
                            <tr key={`${price.symbol}-${price.timestamp}`}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={symbolImages[price.symbol]}
                                        alt={price.symbol}
                                        className='symbolImages'
                                    />
                                    <span className='cryptoNames'>{price.symbol}</span>
                                </td>
                                <td>$ {price.price}</td>
                                <td>{new Date(price.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</td>
                                </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default CryptoTable;
