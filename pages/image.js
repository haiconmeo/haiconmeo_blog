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
    images = images.map(e=>'http://res.cloudinary.com/dsthxgzde/image/upload/c_fill,w_450/'.concat(e.public_id))
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
        <meta name="description" content="Haiconmeo blog" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Haiconmeo" />
        <meta property="og:image" content="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/313414115_190230920179002_4850919535704207251_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=txGOlDwoHdoAX_eAX9z&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC1-L227G6UIx6U7edfekwQqHPWy-t49Yctnb9-__cbnw&oe=6373BEAB" />
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
