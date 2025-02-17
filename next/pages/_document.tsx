import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
    <Html>
        <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
            <link
                href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&amp;display=swap'
                rel='stylesheet'
            ></link>
            {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
            <title>www.awesomebooks.com</title>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document
