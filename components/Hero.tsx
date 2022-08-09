import { Container, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import websiteConfig from '../lib/config/website'


const Hero: React.FC = () => {
   return (
      <Container
         py={12}
         maxW='container.lg' 
         centerContent
      >
         <Heading 
            as="h1" 
            size='4xl' 
            noOfLines={1} 
            fontWeight={600} 
            pb={6} 
            color={useColorModeValue('gray.600', 'gray.200')}
            letterSpacing={4}
         >
            <Text 
               borderBottom="solid" 
               borderColor={useColorModeValue('green.500', 'green.600')}
            >
               { websiteConfig.meta.title }
            </Text>
         </Heading>
         <Text 
            as="h2" 
            fontWeight={200} 
            textAlign="center" 
            color={useColorModeValue('gray.500', 'gray.100')}
         >
               { websiteConfig.meta.subTitle }
         </Text>
      </Container>
   )
}

export default Hero