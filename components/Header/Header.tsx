import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const handleNavigate = (href: string) => () => {
    if (isOpen) setIsOpen(false);
    router.push(href);
  }

  return (
    <Navbar expand="md" fixed="top" container="lg" className={styles.customNavbar}>
      <Link className={styles.logo} href="/">
        <Logo />
      </Link>
      <NavbarToggler onClick={toggleNav} className={styles.toggler}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className={styles.nav}>
          {links.map(({ label, path }) => (
            <NavItem key={path}>
              <a className={styles.link} onClick={handleNavigate(path)}>{label}</a>
            </NavItem>
          ))}
        </Nav>
        <div className={styles.profile}>
          <button className={styles.login} title="Coming soon...">Login</button>
        </div>
      </Collapse>
    </Navbar>
  )
}