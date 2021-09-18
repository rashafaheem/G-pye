import "../styles/globals.css";
import "../components/appBar/appBar.css";
import "../components/topContent/topContent.css";
import "../components/secondContent/secondContent.css";
import "../components/thirdContent/thirdContent.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
