import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import { Libre_Franklin } from "next/font/google";
import LoadedResourceManager from "../components/main-layout/context/ResourceContext";
import CustomCursorManager from "../components/CustomCursor/context/manager";
const libre = Libre_Franklin({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <LoadedResourceManager>
        <CustomCursorManager>
          <main className={`${libre.className} main`}>
            <Analytics />
            <Component {...pageProps} />
          </main>
        </CustomCursorManager>
      </LoadedResourceManager>
    </>
  );
}
