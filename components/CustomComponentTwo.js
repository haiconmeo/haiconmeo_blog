import { useColorMode } from '@chakra-ui/color-mode'
import { FaPhotoVideo } from 'react-icons/fa'
import { useRouter } from 'next/router';
import { Box, HStack, Heading, Button, Text } from "@chakra-ui/react"

import { customTwo } from '../templateData'

const CustomComponentTwo = () => {
    const { colorMode } = useColorMode()
    const router = useRouter();

    return (
        <Box p="4" bg={colorMode === 'light' ? 'gray.800' : 'gray.900'} color="#fff">
            <Heading bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text" fontSize="xl">
                {customTwo.heading}
            </Heading>
            {customTwo.body.map((skill, i) => (
                <Text key={i}>{skill.name}</Text>
            ))}

        </Box>
    )
}

export default CustomComponentTwo
