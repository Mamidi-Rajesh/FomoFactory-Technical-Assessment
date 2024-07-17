import React from 'react';
import CryptoTable from '../components/CryptoTable';
import CryptoSelector from '../components/CryptoSelector';

const Home: React.FC = () => {
    return (
        <div>
            <CryptoSelector />
            <CryptoTable />
        </div>
    );
};

export default Home;
