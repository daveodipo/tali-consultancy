import Navbar from "./components/Navbar";
import Head from "next/head";
export default function Contact() {
  return (
    <div className="h-screen">
      <Head>
        <title>Contact us | Tali </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className="mb-20">
        <Navbar />
      </div>
      <div className="text-gray-800 font-semibold text-2xl">Coming Soon :)</div>
    </div>
  );
}
