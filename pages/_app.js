import "../styles/global.css";
import Layout from "../src/components/Layout.js";
import { ContextWrapper } from "../src/Context/appContext.js";

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
