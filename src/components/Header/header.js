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
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://cdn.discordapp.com/attachments/968688052820140104/1015309067645898842/unknown.png'
                    />
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
                    </Flex>
            
        </Stack>
        
    )
}

export default Header;