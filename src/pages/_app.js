import Head from "next/head";
import "../globals.css";
import { Libre_Franklin } from "next/font/google";
import CustomCursorManager from "../components/CustomCursor/context/manager";
const libre = Libre_Franklin({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <CustomCursorManager>
        <main
          className={libre.className}
          style={{ overflow: "hidden" }}
        >
          <Component {...pageProps} />
        </main>
      </CustomCursorManager>
    </>
  );
}
