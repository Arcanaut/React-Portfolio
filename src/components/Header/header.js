import React from 'react';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import {useColorMode} from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/react';



function Header() {
    const { colorMode } = useColorMode(); 
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width-600px)");
    return(
        <Stack>
 <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
 <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                    <Box mt={isNotSmallerScreen? "0" : 16} align="flex-start">
                        <Text fontSize="5xl" fontWeight="semibold">Hi, I'm</Text>
                        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Brendan Ahearn</Text>
                            <Button mt={8} colorScheme="blue" onClick={() => window.open("https://github.com/Arcanaut")}>Github
                            </Button>
                    </Box>
                    <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://cdn.discordapp.com/attachments/968688052820140104/1015309067645898842/unknown.png'
                    />
                    </Flex>
        </Stack>
    )
}

export default Header;