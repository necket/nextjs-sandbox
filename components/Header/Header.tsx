import Link from 'next/link';

import styles from './Header.module.scss';
import Logo from '../../assets/icons/logo.svg';

const links = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Posts',
    path: '/posts'
  },
  {
    label: 'About',
    path: '/about'
  },
] as const;

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.links}>
          {links.map(({ label, path }) => 
            <Link className={styles.link} key={path} href={path}>{label}</Link>
          )}
        </div>
        <div className={styles.profile}>
          <button className={styles.login} title="Coming soon...">Login</button>
        </div>
        </div>
    </div>
  )
}