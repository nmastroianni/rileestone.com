import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NX9ZBZ3" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        /> */}
      </body>
    </Html>
  )
}
