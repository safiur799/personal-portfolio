import "@/styles/globals.css";
import PageProgessBar from "@/components/common/PageProgessBar";
import Footer from "@/components/common/footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <PageProgessBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
