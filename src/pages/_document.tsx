import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pl'>
      <Head>
        <meta
          name='facebook-domain-verification'
          content='yesnehg2w2m7fyj7snl4kv5p8w9ngk'
        />
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=276392531440880&ev=PageView&noscript=1'
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
