import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 width=device-width" />
        <title>Markall</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
