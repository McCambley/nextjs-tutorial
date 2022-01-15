import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there, my name is Jake.</p>
        <p>
          This is a sample website - built throughout the
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
