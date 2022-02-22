import "../styles/globals.css";
import Layout from "../component/Layout";

function MyApp({ Component, pageProps , children }) {
  return (
    <Layout children={children}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
