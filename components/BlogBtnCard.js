import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, HStack, Heading, Button, Text, Image } from "@chakra-ui/react"

import { FaPen } from 'react-icons/fa'

const BlogBtnCard = () => {
    const router = useRouter();
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.700" : "gray.900"}  w="100%" p={4} color="white">
            <Heading fontSize="xl" bgGradient={colorMode === 'light' ? "linear(to-r, green.100, #928DAB)" : "linear(to-r, green.100, purple.700)"} bgClip="text">My Blogs</Heading>
            <HStack mt="4">
                <Button onClick={() => router.push('/blog')} _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} variant="outline" leftIcon={<FaPen/>}>Personal</Button>\
                <a href="https://www.buymeacoffee.com/haiconmeo" rel="nofollow"> <Image align="left" src="https://camo.githubusercontent.com/28aae05a0fba45679e8e27d90609601e249b64a5fe30dfef05495de4f4e318d4/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d79656c6c6f772e706e67" height="50" width="210" alt="haiconmeo" data-canonical-src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"/></a>

            </HStack>
            <Box mt="2">
            <Text fontSize="lg">I write articles about content like networking,  machine learning, pen test</Text>

            </Box>
         </Box>
    )
}

export default BlogBtnCard
