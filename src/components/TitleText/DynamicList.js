import React from 'react';

import { bordered } from './DynamicList.module.scss';

// eslint-disable-next-line react/prop-types
export const DynamicList = ({ n }) => {
  let arr = [];

  for (let i = 1; i < n + 1; i++) {
    arr.push(<li className={`${bordered}`}>List element {i}</li>);
  }

  return (
    <div>
      <ul>{arr}</ul>
    </div>
  );
};
