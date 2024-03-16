import {
  createMultiStyleConfigHelpers,
  defineStyleConfig,
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import {
  alertAnatomy,
  accordionAnatomy,
  menuAnatomy,
  modalAnatomy,
  popoverAnatomy,
  switchAnatomy,
} from '@chakra-ui/anatomy'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const fonts = {
  heading:
    "Outfit, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  body: "Open Sans, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
}

export const colors = {
  gray: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    850: '#1f1f23',
    900: '#18181b',
  },
  blue: {
    50: '#e0edff',
    100: '#b0caff',
    200: '#7ea6ff',
    300: '#4b83ff',
    400: '#1a5fff',
    500: '#0042da',
    600: '#0036b4',
    700: '#002782',
    800: '#001751',
    900: '#1a202c',
  },
  purple: {
    50: '#0D182A',
    100: '#e3dbff',
    200: '#cbb3ff',
    300: '#b18fff',
    400: '#9771ff',
    500: '#7c52ff',
    600: '#653eff',
    700: '#4c2aff',
    800: '#3518ff',
    900: '#1d0cff',
  },
  orange: {
    50: '#fff1da',
    100: '#ffd7ae',
    200: '#ffbf7d',
    300: '#ffa54c',
    400: '#ff8b1a',
    500: '#e67200',
    600: '#b45800',
    700: '#813e00',
    800: '#4f2500',
    900: '#200b00',
  },
  yellow: {
    50: '#fff9da',
    100: '#ffedad',
    200: '#ffe17d',
    300: '#ffd54b',
    400: '#ffc91a',
    500: '#e6b000',
    600: '#b38800',
    700: '#806200',
    800: '#4e3a00',
    900: '#1d1400',
  },
}

const Modal = createMultiStyleConfigHelpers(
  modalAnatomy.keys
).defineMultiStyleConfig({
  baseStyle: ({ colorMode }) => ({
    dialog: { bg: colorMode === 'dark' ? 'gray.800' : 'white' },
  }),
})

const Popover = createMultiStyleConfigHelpers(
  popoverAnatomy.keys
).defineMultiStyleConfig({
  baseStyle: ({ colorMode }) => ({
    popper: {
      width: 'fit-content',
      maxWidth: 'fit-content',
    },
    content: {
      bg: colorMode === 'dark' ? 'gray.800' : 'white',
    },
  }),
})

const Menu = createMultiStyleConfigHelpers(
  menuAnatomy.keys
).defineMultiStyleConfig({
  baseStyle: ({ colorMode }) => ({
    list: {
      shadow: 'lg',
      bg: colorMode === 'dark' ? 'gray.800' : 'white',
    },
    item: {
      bg: colorMode === 'dark' ? 'gray.800' : 'white',
      _hover: {
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
      },
    },
  }),
})

const Accordion = createMultiStyleConfigHelpers(
  accordionAnatomy.keys
).defineMultiStyleConfig({
  baseStyle: ({ colorMode }) => ({
    button: {
      _hover: {
        bg: colorMode === 'dark' ? 'purple.800' : 'gray.100',
      },
    },
  }),
})

const Button = defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === 'dark' ? 'purple.800' : 'white',
  }),
  variants: {
    solid: ({ colorMode, colorScheme }) => {
      if (colorScheme !== 'purple') return {}
      return {
        bg: colorMode === 'dark' ? 'purple.400' : 'purple.500',
        color: 'white',
        _hover: {
          bg: colorMode === 'dark' ? 'purple.500' : 'purple.600',
        },
        _active: {
          bg: colorMode === 'dark' ? 'purple.600' : 'purple.700',
        },
      }
    },
    outline: {
      bg: 'transparent',
    },
    ghost: {
      bg: 'transparent',
    },
  },
})

const Alert = createMultiStyleConfigHelpers(
  alertAnatomy.keys
).defineMultiStyleConfig({
  variants: {
    subtle: ({ colorScheme, colorMode }) => {
      if (colorScheme !== 'purple' || colorMode === 'dark') return {}
      return {
        container: {
          bg: 'purple.50',
        },
      }
    },
  },
  baseStyle: {
    container: {
      borderRadius: 'md',
    },
  },
})

const Switch = createMultiStyleConfigHelpers(
  switchAnatomy.keys
).defineMultiStyleConfig({
  baseStyle: ({ colorMode, colorScheme }) => ({
    track: {
      _checked: {
        bg: colorMode === 'dark' ? `${colorScheme}.400` : `${colorScheme}.500`,
      },
    },
  }),
})

const components = {
  Modal,
  Popover,
  Menu,
  Button,
  Accordion,
  Alert,
  Switch,
  Spinner: {
    defaultProps: {
      colorScheme: 'purple',
    },
  },
  NumberInput: {
    baseStyle: {
      focusBorderColor: 'purple.200',
    },
  },
  Input: {
    baseStyle: {
      focusBorderColor: 'purple.200',
    },
  },
  Textarea: {
    baseStyle: {
      focusBorderColor: 'purple.200',
    },
  },
  Link: {
    baseStyle: {
      _hover: { textDecoration: 'none' },
    },
  },
  Tooltip: {
    baseStyle: {
      rounded: 'md',
    },
  },
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('white', 'purple.50')(props),
    },
  }),
}

export const customTheme = extendTheme({
  colors,
  fonts,
  components,
  config,
  styles,
})
