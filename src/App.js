
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading } from "@chakra-ui/layout";
import { FaSun, FaMoon, } from "react-icons/fa";

import Header from "./components/Header/header";
import About from "./components/About/about";
// import About from "./About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";


// TODO: potentially move Nav for PWA in to App.js instead of own component
//TODO: Get NPM packages from fontawesome for language icons
function App() {
   
  const { colorMode, toggleColorMode } = useColorMode(); 
  const isDark = colorMode === "dark";
  return (
    <Router>
      <VStack p={5}>
        <Flex w="100%" display="flex" justifyContent="space-around" alignItems="center">
          <Heading ml="8" size="md" fontWeight='extrabold' 
          color='cyan.500'>         
              <NavLink exact activeClassName="active" to="/">
                  <Link to="/">Home</Link>
              </NavLink>
              
          </Heading>

           <NavLink exact activeClassName="active" to="/about">
              <Link to="/about" component={About}>about</Link>
          </NavLink>
          
          <NavLink exact activeClassName="active" to="/portfolio">
              <Link to="/portfolio">portfolio</Link>
          </NavLink>
          <NavLink exact activeClassName="active" to="/contact">
              <Link to="/contact">contact</Link>
          </NavLink>
          <NavLink exact activeClassName="active" to="/resume">
              <Link to="/resume">resume</Link>
          </NavLink>

        
        <IconButton ml={9} icon={isDark ? <FaSun /> : <FaMoon />} 
        isRound="true" onClick={toggleColorMode}></IconButton>
      
         
        </Flex>
        <Header></Header>
        {/* <Portfolio></Portfolio>
        <Contact></Contact> */}
      </VStack>
        {/* <Switch>
      <Route path="/"/>
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      </Switch> */}
      <About></About>
    </Router>
  );
}

export default App;