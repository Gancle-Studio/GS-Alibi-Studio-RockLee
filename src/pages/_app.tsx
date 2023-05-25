import 'reset-css';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { PageModeProvider } from 'contexts/PageModeContext';
import ThemedApp from 'components/ThemedApp/ThemedApp';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

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

      <Script
        async
        defer
        id='fb-pixel'
        src='https://pixel.fasttony.com/8cb84210010c4b0c97d422e5bc3a7d23'
      />
      <Script
        id='fb-pixel'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '276392531440880');
            fbq('track', 'PageView');
          `
        }}
      />

      <PageModeProvider>
        <ThemedApp>
          <Component {...pageProps} />
        </ThemedApp>
      </PageModeProvider>
    </>
  );
}
