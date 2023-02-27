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
                <a href="https://blog.haiconmeo.info" ><Button _hover={{ bg: colorMode === 'light' ? '#928DAB' : "green.100", color: colorMode === 'light' ? null : "#111"}} variant="outline" leftIcon={<FaPen/>}>
                    Blog
                </Button></a>\
                
            </HStack>
            <Box mt="2">
            <Text fontSize="lg">I write articles about content like networking,  machine learning, pen test</Text>

            </Box>
         </Box>
    )
}

export default BlogBtnCard
