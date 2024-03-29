import React from 'react';
import './portfolio.css';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/react';


const Portfolio = ({img, title, description, skills, link, github}) => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width-600px)")
    return (
        <Stack className="portfolio">
        
            <Flex className="portfolio-browser" direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-center">
            <Box className="project-info" alignSelf="center">
                <Box className="project-title">
                    <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>{title}</Text>
                </Box>
            <Image src={img} alt="" className="portfolio-img" rounded={45}  />
                
                <Box className="project-description">
                    <p>{description}</p>
                </Box>
                <Box className="skills-used">
                    <p>{skills}</p>
                </Box>
                <Box className="project-links">
                    <a className="live-btn" href={link} target="_blank" rel="noreferrer">
                        Deployed
                    </a>
                    <br></br>
                    <a className="git-btn" href={github} target="_blank" rel="noreferrer">
                        Github
                    </a>
                    
                </Box>
                <break></break>
            </Box>
            </Flex>
        </Stack>
    )
}

export default Portfolio;