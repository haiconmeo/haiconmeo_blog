import { VStack, Container } from '@chakra-ui/layout'
import Head from 'next/head'
import cloudinary from 'cloudinary'
import { useColorMode } from '@chakra-ui/color-mode'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'

export async function getStaticProps() {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
      })
      const folderPath = 'film photo'
      const resources = await cloudinary.v2.api.resources({
        type: 'upload',
        prefix: folderPath,
        max_results:25
      })
      let images = resources.resources.filter(resource => resource.resource_type === 'image')
    images = images.map(e=>'http://res.cloudinary.com/dsthxgzde/image/upload/c_fill,w_350/'.concat(e.public_id))
    return {
        props:{imgs:images} 
        
      }
    }

import Masonry from 'react-masonry-css'
import { concat } from 'lodash'
// responsive breakpoints for masonry grid. Cant be easily adjusted here
const breakpointColumnsObj = {
  default: 3,
  800: 2,
  600: 1
};

export default function Images({imgs}) {
  const { colorMode } = useColorMode()
  const postsArr = imgs.map(e => (
    <ImageCard key={e}  img={e} />
  ))
  return (
    <div>
      <Head>
        <title>HaiConMeo-Hoang Huu Manh</title>
        <meta name="description" content="Haiconmeo- Hoàng Hữu Mạnh" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Haiconmeo Hoàng Hữu Mạnh" />
        <meta property="og:image" content="https://res.cloudinary.com/dsthxgzde/image/upload/c_fill,w_350/film%20photo/000017_x4h3kc.jpg" />
      </Head>

      <VStack minHeight="100vh" bgGradient={colorMode === 'light' ? "linear(to-r, #1F1C2C, #928DAB)" : "linear(to-r, #0F2027, #203A43, #24243e)"}>
        <Container maxW="960">
          <Header />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {postsArr}
            
          </Masonry>
          <Footer />
        </Container>
      </VStack>

    </div>
  )
}
