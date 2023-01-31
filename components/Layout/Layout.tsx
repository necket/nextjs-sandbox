import React from "react";
import { Container } from "reactstrap";

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import styles from './Layout.module.scss';


interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header/>
        <Container>
          <main className={styles.content}>
            {children}
          </main>
        </Container>
      <Footer/>
    </>
  )
}