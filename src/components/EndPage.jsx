import React from 'react'
import Confetti from 'react-confetti';
import djurikoner from '../assets/djurikoner.png';
import './EndPage.css';

const EndPage = () => {
    return (
        <div className='end-page'>
        <Confetti className='confetti' /> 
            
        <div className="text-wrapper">
            <h1>Bra jobbat!</h1>
            <p>Du klarade det!</p> 
        </div>

        <div className="djur-ikoner">
            <img src={djurikoner} alt="djurikoner" />
        </div>
    </div>
    );
};

export default EndPage;