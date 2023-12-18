import React from 'react';
import { useState } from 'react';

import { button, p } from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <p className={`${p}`}>{counter}</p>
      <button onClick={decreaseCounter} className={`${button}`}>
        Zmniejsz
      </button>
      <button onClick={increaseCounter} className={`${button}`}>
        Zwieksz
      </button>
    </div>
  );
};
