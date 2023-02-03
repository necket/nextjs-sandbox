import React from 'react';
import Link from 'next/link';

import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
}

export const Button = ({ to, children, ...rest}: Props) => {
  if (to) return (
    <Link href={to} className={styles.button}>
      {children}
    </Link>
  )

  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  )
}
