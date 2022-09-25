import React from 'react'
//do not delete Router, Switch, or Route despite terminal saying they are unused. Deletion results in page unable to render
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";



//TODO: Make 'resume' act as external link to google drive
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
   )}

  export default Nav;