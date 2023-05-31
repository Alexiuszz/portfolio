import Head from "next/head";
import "../globals.css";
import { Libre_Franklin } from "next/font/google";

const libre = Libre_Franklin({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={libre.className} style={{ overflow: "hidden" }}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
