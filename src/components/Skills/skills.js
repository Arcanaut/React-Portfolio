import React from "react";
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import './skills.css'

                function Skills(){
                    return(
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
                    )
                }

                export default Skills