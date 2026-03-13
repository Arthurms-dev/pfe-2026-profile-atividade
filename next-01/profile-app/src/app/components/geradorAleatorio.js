"use client";

import { useState } from 'react';

export default function geradorAleatorio() {
    
    const [valor, setValor] = useState ("- - ");
    const handleClick = () => {
        const num = (Math.random() * 100) + 1;
        setValor (num);
    };

    return (
        <div className="flex flex-col items-center gap-3 mt-4 p-4 border border-gray-800 rounded-lg">
            <button onClick={handleClick} className='px-6 py-2 border-2 border-white rounded-md hover:bg-white hover:text-black transition'>
                Gerar número aleatório
            </button>

            <h3 className='text-xl font-mono'>Número aleatório: {valor}</h3>
        </div>
    ); 
}