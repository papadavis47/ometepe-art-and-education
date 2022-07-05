import "../styles/global.css";
import Layout from "../components/Layout";
import { ContextWrapper } from "../Context/appContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}

export default MyApp;
