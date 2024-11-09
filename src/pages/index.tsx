import Head from "next/head";
import Layout from "~/components/Layout";
import Hero from "~/components/Hero";
import About from "~/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Field Mind</title>
        <meta
          name="description"
          content="Field Mind - Great things take time"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="">
          <Hero />
          <About />
        </main>
      </Layout>
    </>
  );
}
