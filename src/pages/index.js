import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="Welcome to my portfolio and blog site">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Hi, I'm Ridwan Nugroho</h1>
          <p className={styles.subtitle}>Father, developer, and lifelong learner</p>
          <p className={styles.description}>
            This is my page, articles, and thoughts on tech and creativity. <br />
            You can always find me in ridwan.nugrhoho00@gmail.com
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/blog">
              Visit My Blog
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/on-job-projects">
              View Projects
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
