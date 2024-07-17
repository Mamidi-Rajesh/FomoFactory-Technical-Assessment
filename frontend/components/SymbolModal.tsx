import React from 'react';

interface SymbolModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (symbol: string) => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({ isOpen, onClose, onSelect }) => {
    const symbols = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'];

    // Ensure modal is not rendered on server-side
    if (typeof window === 'undefined') {
        return null;
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Select a Cryptocurrency</h2>
                <ul>
                    {symbols.map(symbol => (
                        <li key={symbol} onClick={() => onSelect(symbol)}>
                            {symbol}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SymbolModal;
