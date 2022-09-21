import React from 'react';

import { IconButton } from "@chakra-ui/button";
import {FaGithub, FaLinkedin, } from "react-icons/fa";
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import {useColorMode} from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/react';
import './header.css'

//TODO: style scroll
//TODO: Move image and possibly circle to later 'About' component

function Header() {
    const { colorMode } = useColorMode(); 
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width-600px)");
    return(
        <Stack>
 
         
      
 <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">

                    
                    <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
 <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://cdn.discordapp.com/attachments/968688052820140104/1015309067645898842/unknown.png'
                    />
                    <Box mt={isNotSmallerScreen? "0" : 16} align="flex-start">
                        



                        <Text fontSize="5xl" fontWeight="semibold">Hi, I'm</Text>
                        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'  >Brendan Ahearn</Text>
                            <Box className='intro-title'>
                            <Text color={isDark ? "gray.200" : "gray.500"}  className="intro-title-wrapper">
                                <div  className="intro-item" >Full-Stack Web Developer</div>
                                <break></break>
                                <div  className="intro-item">Designer</div>
                                <break></break> 
                                <div  className="intro-item">Life Long Learner</div>   
                            </Text>
                            </Box>
                            <Button mt={8} colorScheme="blue" onClick={() => window.open("https://docs.google.com/document/d/11pqyqCb4AtIcOBAPoHOvd2RLn8vaI2Aec0z2zG7VciI/edit?usp=sharing")}>Resume
                            </Button>

                            <IconButton ml={4} icon={<FaGithub/>} 
        isRound="true" onClick={() => window.open("https://github.com/Arcanaut")}></IconButton>
        <IconButton ml={4} icon={<FaLinkedin/>} 
        isRound="true" onClick={() => window.open("https://www.linkedin.com/in/brendan-ahearn-476688a5/")}></IconButton>
                    </Box>
                    
                    </Flex>
        </Stack>
    )
}

export default Header;