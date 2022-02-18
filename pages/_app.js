import "../styles/global.css";
import { ContextWrapper } from "../src/Context/appContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}

export default MyApp;
