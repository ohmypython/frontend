import React from 'react';
import { Button } from '@chakra-ui/react';
import { colors } from '../utils/colors';
import { BtnProps } from '../utils/types';

export const BtnBase: React.FC<BtnProps> = (props) => {
  const { text } = props;
  return (
    <Button
      bgGradient={colors.bg.gradient}
      color={colors.text.white}
      transition="all 0.2s ease-in-out"
      sx={{
        '&:hover': {
          bgGradient: colors.bg.gradient,
          boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {text}
    </Button>
  );
};

export const BtnPrimary: React.FC<BtnProps> = (props) => {
  const { text } = props;
  return (
    <Button
      bgColor={colors.bg.primary}
      color={colors.text.white}
      transition="all 0.2s ease-in-out"
      sx={{
        '&:hover': {
          bgColor: colors.bg.primary,
          boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {text}
    </Button>
  );
};

export const BtnSecondary: React.FC<BtnProps> = (props) => {
  const { text } = props;
  return (
    <Button
      bgColor={colors.bg.white}
      color={colors.text.primary}
      transition="all 0.2s ease-in-out"
      sx={{
        '&:hover': {
          bgColor: colors.bg.white,
          boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {text}
    </Button>
  );
};
