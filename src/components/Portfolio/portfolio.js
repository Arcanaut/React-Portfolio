import React from 'react';
import './portfolio.css';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/react';

//TODO: Round corners of black background to be less sharp
//TODO: Change <div> tags to <Box> for Chakra UI implementation
const Portfolio = ({img, title, collab, description, skills, link, github}) => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width-600px)")
    return (
        <Stack className="portfolio">
            {/* <div ">
               
            </div> */}
            <Flex className="portfolio-browser" direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-center">
            <Box className="project-info">
                <Box className="project-title">
                    <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>{title}</Text>
                </Box>
            <Image src={img} alt="" className="portfolio-img" />
                <Box className="project-collab">
                    <p>{collab}</p>
                </Box>
                <Box className="project-description">
                    <p>{description}</p>
                </Box>
                <Box className="skills-used">
                    <p>{skills}</p>
                </Box>
                <Box className="project-links">
                    <a className="live-btn" href={link} target="_blank" rel="noreferrer">
                        live site
                    </a>
                    <br></br>
                    <a className="git-btn" href={github} target="_blank" rel="noreferrer">
                        github
                    </a>
                </Box>
            </Box>
            </Flex>
        </Stack>
    )
}

export default Portfolio;