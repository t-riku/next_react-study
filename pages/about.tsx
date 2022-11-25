import Head from "next/head";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline
          title="About Page"
          page="about"
          number={1111}
          array={[1, 2, 3]}
          // obj={{ foo: "foo", bar: 3 }}
          bool={true}
          onClick={() => alert("クリック！")}
        >
          <code className={styles.code}>pages/about.tsx</code>
        </Headline>

        <Links />
      </main>
      <Footer />
    </div>
  );
}
