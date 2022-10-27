import React from 'react'
//do not delete Router, Switch, or Route despite terminal saying they are unused/undefined. Deletion results in page unable to render
import { HashRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { IconButton, Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";

function Nav() {
    
    const { colorMode, toggleColorMode } = useColorMode(); 
const isDark = colorMode === "dark";
   return (
    <Flex w="100%" display="flex" justifyContent="space-around" alignItems="center">
        
    <Heading ml="8" size="md" fontWeight='extrabold' color='cyan.500'>
        <NavLink exact activeClassName="active" to="/">
            <Link to="/">Home</Link>
        </NavLink>
    </Heading>

    <Button>
    <NavLink exact activeClassName="active" to="/portfolio">
        <Link to="/portfolio">portfolio</Link>
    </NavLink>
    </Button>
    
    <Button>
    <NavLink exact activeClassName="active" to="/contact">
        <Link to="/contact">contact</Link>
    </NavLink>
    </Button>
    <Button onClick={() => window.open("https://docs.google.com/document/d/11pqyqCb4AtIcOBAPoHOvd2RLn8vaI2Aec0z2zG7VciI/edit?usp=sharing")}>resume</Button>

  
  <IconButton ml={9} icon={isDark ? <FaSun /> : <FaMoon />} 
  isRound="true" onClick={toggleColorMode}></IconButton>

   
  </Flex>
   )}

  export default Nav;