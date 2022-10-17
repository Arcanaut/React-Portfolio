import "./project.css";
import Portfolio from "../Portfolio/portfolio";
import { projects } from "../projectData";
import { Stack, Box, Text } from '@chakra-ui/layout';
//TODO: Have tabs change color depending on last one clicked to show where user is

const Project = () => {
    return (
        <Stack className="list" align="center">
            <Box className="list-texts">
                <h1 className="list-title">Projects</h1>
                <Text className="list-description">

                </Text>
            </Box>
            <Box className="list-list" >
                {projects.map((item) => (
                    <Portfolio key={item.id}  title={item.title} img={item.img} description={item.description} skills={item.skills} link={item.link} github={item.github} />
                ))}
                
            </Box>
            
        </Stack>
    )
}

export default Project;