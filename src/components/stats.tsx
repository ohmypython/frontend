import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { colors } from '../utils/colors';
import { StatsProps } from '../utils/types';
import { BoxIcon } from './boxIcon';

export const Stats: React.FC<StatsProps> = (props) => {
  const { title, text, revelantText, icon } = props;
  return (
    <Box
      w="382px"
      h="80px"
      bgColor={colors.bg.white}
      borderRadius="2xl"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="4"
      shadow="sm"
    >
      <VStack alignItems="flex-start" justifyContent="center">
        <Text fontSize="md" fontWeight="bold" color={colors.text.tertiary}>
          {title}
        </Text>
        <HStack alignItems="flex-end" style={{ margin: 0 }}>
          <Text fontSize="xl" fontWeight="bold" color={colors.text.primary}>
            {text}
          </Text>
          <Text fontSize="md" fontWeight="bold" color={colors.text.green}>
            {revelantText}
          </Text>
        </HStack>
      </VStack>
      <BoxIcon sizeBox="45px" sizeIcon="22.5px" selected>
        {icon}
      </BoxIcon>
    </Box>
  );
};
