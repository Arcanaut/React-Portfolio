import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header/header";




function Nav() {
   
    const { colorMode, toggleColorMode } = useColorMode(); 
    const isDark = colorMode === "dark";
    return (
      <Router>
        <VStack p={5}>
          <Flex w="100%">
            <Heading ml="8" size="md" fontWeight='extrabold' 
            color='cyan.500'>Home</Heading>
  
             <NavLink exact activeClassName="active" to="/about">
                <Link to="/about">about</Link>
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
          {/* <Switch>
        <Route path="/"/>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </Switch> */}
      </Router>
    );
  }

  export default Nav;