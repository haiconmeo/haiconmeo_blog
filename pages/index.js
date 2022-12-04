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
import Script from 'next/script'
// responsive breakpoints for masonry grid. Cant be easily adjusted here
const breakpointColumnsObj = {
  default: 3,
  800: 2,
  600: 1
};

export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <div>
      <Head>
        <title>HaiConMeo-Hoang Huu Manh</title>
        <meta name="description" content="Haiconmeo blog" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Haiconmeo" />
        <meta property="og:image" content="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/313414115_190230920179002_4850919535704207251_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=txGOlDwoHdoAX_eAX9z&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC1-L227G6UIx6U7edfekwQqHPWy-t49Yctnb9-__cbnw&oe=6373BEAB" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-N9XN9ZR3GZ"/>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N9XN9ZR3GZ');
        `}
      </Script>

        <script src="https://messenger.svc.chative.io/static/v1.0/channels/s5872f568-fe3a-4896-8236-4a4a150699f8/messenger.js?mode=livechat" defer="defer"></script>
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
