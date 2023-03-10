import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Sofia+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" defer crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
