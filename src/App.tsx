import { Box } from '@chakra-ui/react';
import React from 'react';
import { BtnBase, BtnPrimary, BtnSecondary } from './components/buttons';

const App: React.FC = () => {
  return (
    <div>
      <BtnBase text="Base" />
      <Box my={4} />
      <BtnPrimary text="Primary" />
      <Box my={4} />
      <BtnSecondary text="Secondary" />
    </div>
  );
};

export default App;
