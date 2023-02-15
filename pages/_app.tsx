import type { AppProps } from 'next/app';
import '@styles/global.css';
import Layout from '@components/Layout';
import { ContextWrapper } from '@context/spanishContext';

// The ContextWrapper was something I learned from a tutorial. I may refactor it later.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}

export default MyApp;
