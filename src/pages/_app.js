import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import LoadedResourceManager from "../components/main-layout/context/ResourceContext";
import CustomCursorManager from "../components/CustomCursor/context/manager";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <LoadedResourceManager>
        <CustomCursorManager>
          <main className={` main`}>
            <Analytics />
            <Component {...pageProps} />
          </main>
        </CustomCursorManager>
      </LoadedResourceManager>
    </>
  );
}
