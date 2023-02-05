import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/modules/NotFound.module.scss';

const Page = () => (
  <div className={styles.notFound}>
    <Head>
      <title>Not found - 404</title>
    </Head>
    <div>
      <h1>Oops... <strong>404</strong></h1>
      <p>{`The page you are looking for doesn't exist.`}</p>
      <Link href={'/'}>Back to Home page</Link>
    </div>
  </div>
)

export default Page;