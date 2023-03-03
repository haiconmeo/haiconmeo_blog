import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Heading, Text } from "@chakra-ui/layout"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { customcv } from '../templateData'

const DownloadCv = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p="4" bg={colorMode === 'light' ? 'gray.800' : 'gray.900'} color="#fff">
            <Heading bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text" fontSize="xl">
                {customcv.heading}
            </Heading>
                
            {customcv.body.map((skill, i) => (
                <Link key={i} href={skill.value} isExternal>
                  {skill.name} <ExternalLinkIcon mx='2px' />
                </Link>
</br>
            ))}
        </Box>
    )
}

export default DownloadCv
