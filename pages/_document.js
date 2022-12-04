// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import theme from "../theme"
import Script from 'next/script'


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head >
          <script src="https://messenger.svc.chative.io/static/v1.0/channels/s5872f568-fe3a-4896-8236-4a4a150699f8/messenger.js?mode=livechat" defer="defer"></script>
          <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-N9XN9ZR3GZ');`}}></Script>
        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-N9XN9ZR3GZ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}