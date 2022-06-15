import { Box } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../utils/colors';
import { BoxIconProps } from '../utils/types';

export const BoxIcon: React.FC<BoxIconProps> = ({ children, selected }) => {
  return (
    <Box
      w="30px"
      h="30px"
      borderRadius="xl"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor={selected ? colors.bg.primary : colors.bg.white}
      color={selected ? colors.text.white : colors.text.secondary}
      shadow={selected ? 'none' : 'sm'}
    >
      {children}
    </Box>
  );
};

BoxIcon.defaultProps = {
  selected: true,
};
