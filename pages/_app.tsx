import type { AppProps } from 'next/app';
import '../styles/global.css';
import Layout from '../components/Layout';
import { ContextWrapper } from '../Context/appContext';

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
