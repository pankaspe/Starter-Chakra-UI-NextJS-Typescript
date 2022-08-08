import React from 'react';
import SwitchColor from '../Toggle';

import { HamburgerIcon } from '@chakra-ui/icons';

import {
   Box,
   Flex,
   Text,
   Stack,
   Collapse,
   Link,
   useColorModeValue,
   useBreakpointValue,
   useDisclosure,
   Button,
   Drawer,
   DrawerBody,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
 } from '@chakra-ui/react';

export interface TopNav {}

// @ start the main TopNav component
const TopNav: React.FC<TopNav> = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef =  React.useRef<HTMLButtonElement>(null);
  return(
    <Box>

      {/* flex the elements */}
      <Flex
        bg={useColorModeValue('green.600', 'green.800')}
        color={useColorModeValue('white', 'gray.50')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('green.500', 'green.700')}
        align={'center'}
      >
        
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <Button 
            ref={btnRef} 
            variant='ghost' 
            onClick={onOpen}
            bgColor={useColorModeValue('green.500', 'green.900')}
            color="white"
            _hover={{
               bgColor: useColorModeValue('green.500', 'green.900'),
               color:'white',
            }}
          >
            <HamburgerIcon/>
          </Button>
        </Flex>

        <Flex 
          flex={{ base: 1 }} 
          justify={{ base: 'center', md: 'start' }}
        >
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            color={useColorModeValue('white', 'white')}
            fontWeight={600}
          >
            Logo
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          >
          <SwitchColor/>
        </Stack>

      </Flex>

      {/* start drawer */}
      <Collapse in={isOpen} animateOpacity>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"full"}
        >
          <DrawerOverlay />
          <DrawerContent  
            bgColor={useColorModeValue('green.400', 'green.800')}
          >
            <DrawerCloseButton color={useColorModeValue('gray.50', 'green.50')} />
            <DrawerBody>
              <MobileNav/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Collapse>

    </Box>
  );
}

// @ desktop nav component
const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'md'}
            fontWeight={400}
            color={useColorModeValue('gray.50', 'green.50')}
            _hover={{ textDecoration: 'underline' }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

// @ mobile nav component
const MobileNav = () => {
  return (
    <Stack
      py={100}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
   );
};

// @ customize nav mobile items
const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Box
        py={6}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{ textDecoration: 'none' }}
      >
        <Text
          fontSize={"lg"}
          fontWeight={600}
          color={useColorModeValue('gray.50', 'green.50')}
        >
          {label}
        </Text>
      </Box>
 
    </Stack>
  );
};

// @ define interface for nav component
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

// @ set label and href foreach menu item
const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Botanica',
    href: '#',
  },
  {
    label: 'Alpeggi',
    href: '#',
  },
];

export default TopNav