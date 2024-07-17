import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSymbol, selectSymbol, setModalOpen, selectModalOpen } from '../redux/slices/cryptoSlice';
import SymbolModal from './SymbolModal';

const CryptoSelector: React.FC = () => {
    const dispatch = useDispatch();
    const symbol = useSelector(selectSymbol);
    const isModalOpen = useSelector(selectModalOpen);

    const handleSelect = (selectedSymbol: string) => {
        dispatch(setSymbol(selectedSymbol));
        dispatch(setModalOpen(false));
    };

    return (
        <div>
            <button onClick={() => dispatch(setModalOpen(true))} className='openModalButton'>
                Select Cryptocurrency
            </button>
            <SymbolModal 
                isOpen={isModalOpen} 
                onClose={() => dispatch(setModalOpen(false))} 
                onSelect={handleSelect} 
            />
        </div>
    );
};

export default CryptoSelector;
