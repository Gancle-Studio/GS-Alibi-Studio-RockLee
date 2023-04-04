import 'reset-css';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import { PageModeProvider } from 'contexts/PageModeContext';
import ThemedApp from 'components/ThemedApp/ThemedApp';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageModeProvider>
      <ThemedApp>
        <Component {...pageProps} />
      </ThemedApp>
    </PageModeProvider>
  );
}
