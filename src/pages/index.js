import React from 'react';

import { AppHeader } from '../components/TitleText/AppHeader';
import { CheckContent } from '../components/TitleText/CheckContent';
import { Counter } from '../components/TitleText/Counter';
import { DynamicList } from '../components/TitleText/DynamicList';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
    <Counter />
    <DynamicList n={4} />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
