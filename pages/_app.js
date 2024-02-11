import Header from "@/components/Header";
import "@/styles/Home.module.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}
