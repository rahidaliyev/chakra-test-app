import * as React from 'react'
import './App.css';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import DarkMode from './components/DarkMode';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const myStyle={
 border: '5px solid #FFFF00',
 marginTop: '200px',
 display:"flex",
 flexDirection:"column"
}
const theme = extendTheme({ colors,dipsplay:"flex" })
function App() {
  return (
<ChakraProvider style={myStyle} theme={theme}>
  <Stack direction='row' spacing={10} align='center'>
  <Button size='lg' colorScheme='teal' variant='solid' >Button</Button>
  <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
  >
    Submit
  </Button>
  <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Your browser is outdated!</AlertTitle>
  <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
</Alert>
<Accordion style={myStyle}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Navbar/>
<DarkMode/>
  </Stack>
</ChakraProvider>
  );
}

export default App;
