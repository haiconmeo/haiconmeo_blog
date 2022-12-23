import { useColorMode } from '@chakra-ui/color-mode'
import { Box,Image } from "@chakra-ui/react"


const ImageCard = (img) => {
    const { colorMode } = useColorMode()
    return (
        <Box bg={colorMode === 'light' ? "gray.800" : "gray.900"}  color={colorMode === 'light' ? "#fff" : "#ccc"}>
            <Image src={img.img} alt="alt text" />
         </Box>
    )
}

export default ImageCard
