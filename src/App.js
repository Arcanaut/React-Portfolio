
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header/header";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// TODO: potentially move Nav for PWA in to App.js instead of own 
//TODO: Get NPM packages from fontawesome for language icons
function App() {
   
  const { colorMode, toggleColorMode } = useColorMode(); 
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight='extrabold' 
        color='cyan.500'>Home</Heading>

        <Spacer></Spacer>
       <IconButton ml={9} icon={isDark ? <FaSun /> : <FaMoon />} 
       isRound="true" onClick={toggleColorMode}></IconButton>
     
      <IconButton ml={4} icon={<FaGithub/>} 
       isRound="true" onClick={() => window.open("https://github.com/Arcanaut")}></IconButton>
       <IconButton ml={4} icon={<FaLinkedin/>} 
       isRound="true" onClick={() => window.open("https://www.linkedin.com/in/brendan-ahearn-476688a5/")}></IconButton> 
       </Flex>
       <Header></Header>
       {/* <Portfolio></Portfolio>
       <Contact></Contact> */}
    </VStack>
  );
}

export default App;