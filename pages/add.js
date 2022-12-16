import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Add() {
  return (
    <Layout>
      <Head>
        <title>Add to Blog</title>
      </Head>
      <section className={utilStyles.container}>
        <form action="/lib/posts" method="post">
          <label htmlFor="title">The Title of the Blog entry</label>
          <input type="text" id="title" name="title"></input>
          <br />
          <label htmlFor="content">Content of the entry</label>
          <textarea type="text" id="content" name="content"></textarea>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </section>
    </Layout>
  );
}
