import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Heading, Text } from "@chakra-ui/layout"

import { customFour } from '../templateData'

const CustomComponentFour = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p="4" bg={colorMode === 'light' ? 'gray.800' : 'gray.900'} color="#fff">
            <Heading bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text" fontSize="xl">
                {customFour.heading}
            </Heading>
            {customFour.body.map((skill, i) => (
                <Text key={i}>{skill.name}  {skill.value}</Text>
            ))}
        </Box>
    )
}

export default CustomComponentFour
