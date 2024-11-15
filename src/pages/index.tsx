import Head from "next/head";
import Layout from "~/components/Layout";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Services from "~/components/Services";
import Solution from "~/components/Solution";
import Costs from "~/components/Costs";

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
        <main className="font-montserrat">
          <Hero />
          <About />
          <Services />
          <Solution />
          <Costs />
        </main>
      </Layout>
    </>
  );
}
