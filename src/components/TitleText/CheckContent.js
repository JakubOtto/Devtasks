import React from 'react';
import { useState } from 'react';

import {
  button,
  container,
  pwhenoff,
  pwhenon,
} from './CheckContent.module.scss';

export const CheckContent = () => {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((previsOn) => !previsOn);
  }
  return (
    <div className={`${container}`}>
      <p className={`${isOn ? pwhenon : pwhenoff}`}>
        {isOn ? 'Wlaczony' : 'Wylaczony'}
      </p>
      <br></br>
      <button onClick={handleClick} className={`${button}`}>
        {isOn ? 'Wylacz' : 'Wlacz'}
      </button>
    </div>
  );
};
