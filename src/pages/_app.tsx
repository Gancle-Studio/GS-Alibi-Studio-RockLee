import 'reset-css';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { PageModeProvider } from 'contexts/PageModeContext';
import ThemedApp from 'components/ThemedApp/ThemedApp';
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='Alibi Studio - trening personalny i fizjoterapia'
        description='W Alibi Studio zadbamy o Twoje zdrowie. U nas potrenujesz 1:1 z trenerem personalnym, przygotujesz się do zawodów (sporty walki, biegi i inne sporty), poprawisz kondycję i siłę, a przede wszystkim zadbasz o swoje ciało i będziesz się dobrze bawił'
        canonical='www.alibistudio.pl'
        openGraph={{
          type: 'website',
          locale: 'pl',
          url: 'https://www.alibistudio.pl/',
          siteName: 'Alibi Studio - trening personalny i fizjoterapia'
        }}
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Gancle Studio'
          },
          {
            name: 'application-name',
            content: 'alibistudio'
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1; firefox=1; safari=1'
          }
        ]}
      />

      <PageModeProvider>
        <ThemedApp>
          <Component {...pageProps} />
        </ThemedApp>
      </PageModeProvider>
    </>
  );
}
