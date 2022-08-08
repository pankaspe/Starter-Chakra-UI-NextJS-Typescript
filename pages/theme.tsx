import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
   styles: {
      global: (props: { colorMode: string }) => ({
        'html, body': {
          bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
          fontSize: "md",
        }
      }),
    },
 })

export default theme