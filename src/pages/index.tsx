import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import cx from 'classnames';

import srcLogo from '../images/anudge-logo.svg';

import './index.scss';
import * as styles from './index.module.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={cx(styles.wrapper, styles.hero)}>
          <article>
            <h1>
              <img src={srcLogo} height={48} alt="Anudge" />
            </h1>
            <h2>The digital creative enabler.</h2>
          </article>
        </section>
        <section className={styles.wrapper}>
          <article>
            <h1>Empower Your Creativity, Effortlessly</h1>
            <h2>
              Unleashing the Power of Digital Creativity with Seamless
              Solutions.
            </h2>
          </article>
        </section>
        <section className={styles.wrapper}>
          <article style={{ maxWidth: 750 }}>
            <h1>Why Anudge</h1>
            <p>
              At Anudge, we believe in the boundless potential of digital
              creativity. Our suite of tools and services is meticulously
              designed to remove barriers, making digital creation accessible,
              efficient, and enjoyable for everyone. Whether you're a designer,
              developer, or content creator, Anudge is your partner in bringing
              visions to life.
            </p>
          </article>
        </section>
        <section className={cx(styles.wrapper, styles.product)}>
          <article></article>
        </section>
        <section className={styles.wrapper}>
          <article>
            <h1 className={styles.smallBlue}>Our Mission</h1>
            <h2 className={styles.white}>
              To democratize digital creativity by providing innovative,
              user-friendly solutions that empower creatives worldwide to
              realize their full potential without the usual hassles.
            </h2>
          </article>
        </section>
      </main>
      <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
          <small>&copy; 2024</small>
          <img src={srcLogo} height={24} alt="Anudge" />
        </footer>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
