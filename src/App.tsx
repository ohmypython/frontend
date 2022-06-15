import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { IoHome, IoStatsChart } from 'react-icons/io5';
import { BtnBase, BtnPrimary, BtnSecondary } from './components/buttons';
import { CustomMenuItem } from './components/menuItem';

const App: React.FC = () => {
  return (
    <Box w="100vw" minH="100vh" bgColor="blackAlpha.400">
      <VStack m="4" p="2" border="1px solid red" w="min-content">
        <BtnBase text="Base" />
        <Box my={4} />
        <BtnPrimary text="Primary" />
        <Box my={4} />
        <BtnSecondary text="Secondary" />
      </VStack>
      <VStack m="4" p="2" border="1px solid red" w="min-content">
        <CustomMenuItem text="Inicio" to="/" icon={<IoHome />} />
        <CustomMenuItem text="Ranking" to="/ranking" icon={<IoStatsChart />} selected={false} />
      </VStack>
    </Box>
  );
};

export default App;
