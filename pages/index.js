import { VStack, Container } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'

import { useColorMode } from '@chakra-ui/color-mode'

import Header from '../components/Header'
import Footer from '../components/Footer'
import BioCard from '../components/BioCard'
import SkillsCard from '../components/SkillsCard'
import BlogBtnCard from '../components/BlogBtnCard'
import ProjectsBtnCard from '../components/ProjectsBtnCard'
import ContactCard from '../components/ContactCard'
import MyMessageCard from '../components/MyMessageCard'
// custom dummy components
import CustomComponentOne from '../components/CustomComponentOne'
import CustomComponentTwo from '../components/CustomComponentTwo'
import CustomComponentThree from '../components/CustomComponentThree'
import CustomComponentFour from '../components/CustomComponentFour'
import CustomComponentFive from '../components/CustomComponentFive'

import Masonry from 'react-masonry-css'
import DownloadCv from '../components/DownloadCv'
// responsive breakpoints for masonry grid. Cant be easily adjusted here
const breakpointColumnsObj = {
  default: 3,
  600: 2,
  600: 1
};

export default function Home() {
  const { colorMode } = useColorMode()

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
            <BioCard />
            <ContactCard />
            <MyMessageCard />
            <SkillsCard />
            <BlogBtnCard />
            <ProjectsBtnCard />
            <CustomComponentOne />
            <CustomComponentTwo />
            <CustomComponentThree />
            <CustomComponentFive />
            <DownloadCv />
            <CustomComponentFour />
          </Masonry>
          <Footer />
        </Container>
      </VStack>

    </div>
  )
}
