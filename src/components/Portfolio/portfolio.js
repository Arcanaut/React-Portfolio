import React from 'react';
import './portfolio.css';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/react';

{/* <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start"></Flex> */}
const Portfolio = ({img, title, collab, description, skills, link, github}) => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width-600px)")
    return (
        <Stack className="portfolio">
            {/* <div ">
               
            </div> */}
            <Flex className="portfolio-browser" direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-center">
            <Image src={img} alt="" className="portfolio-img" />
            <div className="project-info">
                <div className="project-title">
                    <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>{title}</Text>
                </div>
                <div className="project-collab">
                    <p>{collab}</p>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="skills-used">
                    <p>{skills}</p>
                </div>
                <div className="project-links">
                    <a className="live-btn" href={link} target="_blank" rel="noreferrer">
                        live site
                    </a>
                    <br></br>
                    <a className="git-btn" href={github} target="_blank" rel="noreferrer">
                        github
                    </a>
                </div>
            </div>
            </Flex>
        </Stack>
    )
}

export default Portfolio;