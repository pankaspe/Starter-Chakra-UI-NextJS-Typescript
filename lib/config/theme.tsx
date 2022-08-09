import { extendTheme } from '@chakra-ui/react';
import "@fontsource/merriweather";

const theme = extendTheme({

  // override default background color for light and dark version
  styles: {
    global: (props: { colorMode: string }) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      }
    }),
  },

  // set custom font
  fonts: {
    body: `"Merriweather", "serif"`,
    heading: `"Merriweather", "serif"`,
    mono: "Menlo, monospace",
  },
  
})

export default theme