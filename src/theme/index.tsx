import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    green: {
      700: '#00875F',
      500: '#00B37E',
    },
    gray: {
      800: '#323238',
      700: '#29292E',
      600: '#202024',
      500: '#505059',
      400: '#7C7C8A',
      300: '#8D8D99',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },

  components: {
    Button: {
      defaultProps: {
        h: 14,
        w: 'full',
        rounded: 'sm',
      },

      variants: {
        solid: {
          bg: 'green.700',
          _pressed: {
            bg: 'green.500',
          },
          _text: {
            fontSize: 'md',
            fontFamily: 'heading',
          },
        },

        outline: {
          borderColor: 'green.500',
          borderWidth: 1,
          bg: 'transparent',
          rounded: 'full',
          _pressed: {
            bg: 'gray.500',
          },
          _text: {
            color: 'green.500',
            fontSize: 'md',
            fontFamily: 'heading',
          },
        },
      },
    },
  },
});
