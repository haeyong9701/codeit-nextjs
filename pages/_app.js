import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/Home.module.css";
import "@/styles/global.css";
import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={notoSansKR.className}>
        <ThemeProvider>
          <Header />
          <Component {...pageProps} />;
        </ThemeProvider>
      </main>
    </>
  );
}
