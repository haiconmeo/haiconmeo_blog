import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Heading, Center } from "@chakra-ui/react"

const Footer = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p="3" mb="4">
            <Center>
                <Heading fontSize="sm" color={colorMode === 'light' ? 'gray.200' : 'gray.500'}>
                    haiconmeo - Hoang Huu Manh 
                </Heading>
            </Center>
        </Box>
    )
}

export default Footer
