// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import theme from "../theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="vi">
        <Head >
          <script src="https://messenger.svc.chative.io/static/v1.0/channels/s5872f568-fe3a-4896-8236-4a4a150699f8/messenger.js?mode=livechat" defer="defer"></script>
        </Head>
        <body>
        <NextScript />
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
        </body>
      </Html>
    )
  }
}