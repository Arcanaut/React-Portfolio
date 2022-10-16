import React from 'react';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
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

                    
                    <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="center"></Circle>
 <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                     boxShadow="lg"
                    boxSize="300px" src='https://cdn.discordapp.com/attachments/682377563707801660/1026903083457986570/2022-10-04-11-58-14-632.jpg'
                    alt='Brendan Ahearn wearing a suit'/>
                    <Box mt={isNotSmallerScreen? "0" : 16} align="flex-start">
                        



                        <Text fontSize="5xl" fontWeight="semibold">Hi, I'm</Text>
                        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'  >Brendan Ahearn</Text>
                            <Box className='intro-title'>
                            <Text color={isDark ? "gray.200" : "gray.500"}  className="intro-title-wrapper">
                                <div  className="intro-item">Designer</div>
                                <break></break>
                                <div  className="intro-item" >Full-Stack Web Developer</div>
                                <break></break> 
                                <div  className="intro-item">Life Long Learner</div>   
                            </Text>
                            <Text></Text>
                            </Box>
                            
                            
                    </Box>
                    <Box alignSelf="flex-end">
                                <Text>
                    and I am a firm believer that adaptability is the key to success. That's why I went to school at Southern Methodist University, where I am learning both the latest and
                legacy languages and frameworks to become Fullstack Web Developer. To see some of my fullstack and front end projects, navigate to my portfolio with the tab above! If you would like
                to view more of my work including my back-end exclusive code, follow the link below to my github.
                
                                </Text>
                            </Box>
                            <Box className="skills-list" >
                    <Box className="skills-button">
                        <i className="fa-brands fa-html5 fa-3x" title="HTML5"></i>
                        <Text>HTML5</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-brands fa-css3-alt fa-3x" title="CSS"></i>
                        <Text>CSS</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-brands fa-js fa-3x" title="JavaScript"></i>
                        <Text>JavaScript</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-brands fa-bootstrap fa-3x" title="Bootstrap"></i>
                        <Text>Bootstrap</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-brands fa-git-alt fa-3x" title="Git"></i>
                        <Text>Git</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-solid fa-code fa-3x" title="APIs"></i>
                        <Text>Rest APIs</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-brands fa-node fa-3x" title="Node.js"></i>
                        <Text>Node.js</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-solid fa-list-check fa-3x" title="Jest"></i>
                        <Text>Jest</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-solid fa-e fa-3x" title="Express.js"></i>
                        <Text>Express</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-solid fa-database fa-3x" title="SQL"></i>
                        <Text>SQL</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-brands fa-envira fa-3x" title="NoSQL"></i>
                        <Text>NoSQL</Text>
                    </Box>
                    <Box className="skills-button">
                        <i className="fa-brands fa-react fa-3x" title="React"></i>
                        <Text>React</Text>
                    </Box>
                </Box>
                    </Flex>
            
        </Stack>
        
    )
}

export default Header;