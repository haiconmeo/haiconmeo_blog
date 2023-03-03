import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Heading, Text,List } from "@chakra-ui/layout"
import { project } from '../templateData'

const CustomComponentOne = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p="4" bg={colorMode === 'light' ? 'gray.800' : 'gray.900'} color="#fff">
            <Heading bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text" fontSize="xl">
                {project.heading}
            </Heading>
            <List >
            {project.body.map((skill, i) => (
                <Text key={i}>{skill.name}</Text>
            ))}
            </List>
        </Box>
    )
}

export default CustomComponentOne
