import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import srcLogo from '../images/anudge-logo.svg';

import './index.scss';
import * as styles from './index.module.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1>
          <img src={srcLogo} width={240} alt="Anudge" />
        </h1>
        <p>The digital creative enabler.</p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
