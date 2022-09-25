import React from "react";
import { IconButton } from "@chakra-ui/button";
import {FaGithub, FaLinkedin,  FaFilePdf } from "react-icons/fa";
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';


function Footer(){
    return (
        <Box>

        <IconButton ml={4} icon={<FaFilePdf/>}  isRound="true" onClick={() => window.open("https://docs.google.com/document/d/11pqyqCb4AtIcOBAPoHOvd2RLn8vaI2Aec0z2zG7VciI/edit?usp=sharing")}>
        </IconButton>

            <IconButton ml={4} icon={<FaGithub/>} isRound="true" onClick={() => window.open("https://github.com/Arcanaut")}>
            </IconButton>

        <IconButton ml={4} icon={<FaLinkedin/>}  isRound="true" onClick={() => window.open("https://www.linkedin.com/in/brendan-ahearn-476688a5/")}>
        </IconButton>
        </Box>
        
    );
};

export default Footer;