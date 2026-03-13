"use client";

import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(s => s + 1);
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex gap-4'>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
       </div>
      <h1 className='text-2xl font-bold text-yellow-500'>Score: {score}</h1>
    </div>
  )
}
