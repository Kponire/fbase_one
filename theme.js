'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    primary: ['#0E3465', '#14B8FF'],
    secondary: ['#8699B2', '#4A678B', '#C3CCD8'],
  },
  fontFamily: 'Core Sans C',
  /*components: {
    TextInput: {
      styles: (theme) => ({
        input: {
          borderColor: theme.colors.secondary[2],
          backgroundColor: 'inherit',
          color: theme.colors.secondary[0],
          borderRadius: 2,
          height: 38,
          '&::placeholder': {
            color: theme.colors.secondary[0],
            fontFamily: 'Core Sans C',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
          },
        },
        label: {
          color: theme.colors.secondary[1],
          fontWeight: 600,
          fontSize: 14,
          marginBottom: 8,
        },
      }),
    },
    PasswordInput: {
      styles: {
        innerInput: {
          paddingInline: 5,
        },
      },
    },
    Button: {
      styles: {
        root: {
          fontFamily: 'Core Sans C',
          fontWeight: 600,
          fontSize: 16,
          textTransform: 'capitalize',
          color: '#FFFFFF',
          height: 56,
          borderRadius: 2,
          backgroundColor: '#14B8FF',
          '&:hover': {
            backgroundColor: '#14B8FF',
          },
        },
      },
    },
  },*/  
});