import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";
import Link from "next/link";

export default function handler(req, res) {
  const body = req.body;
  console.log(body);
  res.status(200);
  return (
    <Layout>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </Layout>
  );
}
