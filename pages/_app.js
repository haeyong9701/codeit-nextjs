import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/Home.module.css";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
