import Link from '@docusaurus/Link';
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';
import InstallButton from '@site/src/components/InstallButton';
import NewsletterSignupForm from '@site/src/components/NewsletterSignupForm';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import React from 'react';
import asciinemaCast from './asciinema/cloud2sql.cast';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.tagline}>
            Discover Relationships Between Resources
          </div>
          <h1 className={styles.heroTitle}>Cloud2SQL</h1>
          <p>Extract your infrastructure data to an SQL database.</p>
          <p className={styles.buttons}>
            <InstallButton product="cloud2sql" includeVersion />
            <Link
              to="/docs"
              className="button button--outline button--primary button--lg"
            >
              View Docs
            </Link>
          </p>
          <AsciinemaPlayer
            src={asciinemaCast}
            cols={80}
            rows={20}
            preload={true}
            autoPlay={true}
            loop={true}
          />
        </div>
      </header>
      <main className={styles.main}>
        <div className={clsx(styles.clouds, styles.cloudsTop)} />
        <section className={clsx(styles.section, styles.cloudSection)}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div className={styles.tagline}>Query Your Infrastructure</div>
              <h2>
                Infrastructure data in SQL with link tables representing
                resource relationships.
              </h2>
            </div>
            <ul className={styles.cards}>
              <li>
                <h3>Build Your Asset Inventory</h3>
                <p>
                  Visualize your infrastructure assets with your favorite tools
                  and dashboards.
                </p>
              </li>
              <li>
                <h3>Improve Security Posture</h3>
                <p>
                  Pipe data into your security data lake and write{' '}
                  <abbr title="Structured Query Language">SQL</abbr> queries to
                  find vulnerabilities.
                </p>
              </li>
              <li>
                <h3>Document Your Infrastructure</h3>
                <p>
                  Ensure your organization is always following best practices to
                  stay compliant.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className={clsx(styles.clouds, styles.cloudsBottom)} />
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>What&rsquo;s happening in infrastructure data?</h2>
            </div>
            <p>
              Keep up with the latest{' '}
              <Link to="https://some.engineering">Some Engineering</Link>{' '}
              news&mdash;get product updates, blog posts, and more!
            </p>
            <NewsletterSignupForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
