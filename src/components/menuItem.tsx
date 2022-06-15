import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { colors } from '../utils/colors';
import { BoxIcon } from './boxIcon';

interface CustomMenuItemProps {
  selected?: boolean;
  text: string;
  to: string;
  icon: React.ReactNode;
}

export const CustomMenuItem: React.FC<CustomMenuItemProps> = (props) => {
  const { selected, text, to, icon } = props;
  return (
    <Box
      as={Link}
      to={to}
      w="219.5px"
      h="54px"
      bgColor={selected ? colors.bg.white : 'transparent'}
      borderRadius="2xl"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      pl="4"
      shadow={selected ? 'sm' : 'none'}
    >
      <BoxIcon selected={selected}>{icon}</BoxIcon>
      <Text fontSize="xl" pl="4" fontWeight="bold" color={selected ? colors.text.primary : colors.text.tertiary}>
        {text}
      </Text>
    </Box>
  );
};

CustomMenuItem.defaultProps = {
  selected: true,
};
