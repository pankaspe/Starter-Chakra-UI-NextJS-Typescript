import { Button, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const SwitchColor: React.FC = () => {

   const { colorMode, toggleColorMode } = useColorMode()
   
   return (
      <Button 
         onClick={toggleColorMode} 
         variant="ghost"
         bgColor={useColorModeValue('green.500', 'green.900')}
         color="white"
         _hover={{
            bgColor: useColorModeValue('green.500', 'green.900'),
            color:'white',
         }}
      >
         {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
   )
 }

 export default SwitchColor